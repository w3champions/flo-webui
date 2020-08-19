import { Slot, SlotStatus, Race, SlotSettings } from "../../types/lobby";
import classnames from "classnames";
import { Button, Popover, Menu, MenuItem, Icon, Card } from "@blueprintjs/core";
import PlayerColorPicker from "./PlayerColorPicker";
import PingValue from "../PingValue";
import { IconNames } from "@blueprintjs/icons";

export type SlotUpdate = {
  id: number;
} & Partial<SlotSettings>;

type HandlerSlotSettingsChange = (update: SlotUpdate) => void;

export interface GameSlotProps {
  id: number;
  slot: Slot;
  teams: number;
  host?: boolean;
  me?: boolean;
  ping?: number | null;
  onSettingsChange?: HandlerSlotSettingsChange;
}

const TeamStyles = {
  width: 30,
};

export const GameSlot: React.FunctionComponent<GameSlotProps> = ({
  id,
  slot,
  teams,
  host,
  me,
  onSettingsChange,
  ping,
}) => {
  let inner = null;

  if (slot.player) {
    inner = renderPlayerSlot(id, slot, teams, host, me, onSettingsChange, ping);
  } else if (slot.settings.status === SlotStatus.Open) {
    inner = renderOpenSlot(slot);
  }

  return (
    <Card className="border border-gray-700 rounded my-1 shadow p-0">
      {inner}
    </Card>
  );
};

const SlotItemStyles = {
  height: 28,
};

function renderPlayerSlot(
  id: number,
  slot: Slot,
  teams: number,
  host: boolean,
  me: boolean,
  onSettingsChange: HandlerSlotSettingsChange,
  ping?: number | null
) {
  if (slot.settings.team === 24) {
    return (
      <div className="flex p-1 items-center">
        <div
          className="flex-auto px-4 flex items-center"
          style={SlotItemStyles}
        >
          <span className={`flex-auto ${me ? "font-semibold" : ""}`}>
            {slot.player ? <span>{slot.player.name}</span> : null}
          </span>
          {me ? null : (
            <small className="flex-initial">
              <PingValue value={ping} />
            </small>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex p-1 items-center justify-center content-center space-x-1">
      <div className="flex-initial" style={TeamStyles}>
        <TeamPicker
          readonly={!me}
          value={slot.settings.team}
          teams={teams}
          onChange={(team) => {
            onSettingsChange && onSettingsChange({ id, team });
          }}
        />
      </div>
      <div className="flex-initial">
        <PlayerColorPicker
          readonly={!me}
          value={slot.settings.color}
          onChange={(color) => {
            onSettingsChange && onSettingsChange({ id, color });
          }}
        />
      </div>
      <div className="flex-auto px-4 flex">
        <span className={`flex-auto ${me ? "font-semibold" : ""}`}>
          {slot.player ? <span>{slot.player.name}</span> : null}
        </span>
        {me ? null : (
          <small className="flex-initial">
            <PingValue value={ping} />
          </small>
        )}
      </div>
      <div className="flex-initial">
        <RacePicker
          readonly={!me}
          value={slot.settings.race}
          onChange={(race) => {
            onSettingsChange && onSettingsChange({ id, race });
          }}
        />
      </div>
      <div className="flex-initial">
        <HandicapPicker
          readonly={!me}
          value={slot.settings.handicap}
          onChange={(handicap) => {
            onSettingsChange && onSettingsChange({ id, handicap });
          }}
        />
      </div>
    </div>
  );
}

function renderOpenSlot(slot: Slot) {
  return (
    <div className="flex p-1 items-center">
      <Button className="flex-auto">Open Slot</Button>
    </div>
  );
}

interface TeamPickerProps {
  teams: number;
  value: number;
  className?: string;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

function TeamPicker({
  teams,
  value,
  className,
  onChange,
  readonly,
}: TeamPickerProps) {
  if (readonly) {
    return <div className="text-center">{value + 1}</div>;
  }

  const items = [];

  for (let i = 0; i < teams; i++) {
    items.push(
      <MenuItem
        className="text-center"
        key={i}
        text={`${i + 1}`}
        onClick={() => {
          if (onChange) {
            onChange(i);
          }
        }}
      />
    );
  }

  return (
    <Popover minimal content={<Menu style={{ minWidth: 64 }}>{items}</Menu>}>
      <Button className={className} title="Team">
        <span>{value + 1}</span>
      </Button>
    </Popover>
  );
}

interface RacePickerProps {
  value: Race;
  className?: string;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

const RaceValues = [0, 1, 2, 3, 4];

function RacePicker({ value, className, onChange, readonly }: RacePickerProps) {
  if (readonly) {
    return (
      <div className="text-center" style={{ width: 80 }}>
        {Race[value]}
      </div>
    );
  }
  const items = RaceValues.map((value) => (
    <MenuItem
      className="text-center"
      key={value}
      text={Race[value]}
      onClick={() => {
        if (onChange) {
          onChange(value);
        }
      }}
    />
  ));

  return (
    <Popover minimal content={<Menu style={{ minWidth: 64 }}>{items}</Menu>}>
      <Button
        className={classnames(className)}
        style={{ width: 80 }}
        title="Team"
      >
        <span>{Race[value]}</span>
      </Button>
    </Popover>
  );
}

const HandicapValues = [100, 90, 80, 70, 60, 50];

interface HandicapPickerProps {
  value: number;
  className?: string;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

function HandicapPicker({
  value,
  className,
  onChange,
  readonly,
}: HandicapPickerProps) {
  if (readonly) {
    return (
      <div className="text-center" style={{ width: 48 }}>{`${value}%`}</div>
    );
  }
  const items = HandicapValues.map((value) => (
    <MenuItem
      className="text-center"
      key={value}
      text={`${value}%`}
      onClick={() => {
        if (onChange) {
          onChange(value);
        }
      }}
    />
  ));

  return (
    <Popover minimal content={<Menu style={{ minWidth: 64 }}>{items}</Menu>}>
      <Button
        className={classnames(className)}
        style={{ width: 48 }}
        title="Team"
      >
        <span>{`${value}%`}</span>
      </Button>
    </Popover>
  );
}
