import {
  Slot,
  SlotStatus,
  Race,
  SlotSettings,
  Computer,
} from "../../types/lobby";
import classnames from "classnames";
import { Button, Popover, Menu, MenuItem, Icon, Card } from "@blueprintjs/core";
import PlayerColorPicker from "./PlayerColorPicker";
import PingValue from "../PingValue";
import { IconNames } from "@blueprintjs/icons";
import { PingStats } from "../../types/ping";

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
  ping?: PingStats | null;
  disabled?: boolean;
  creator: boolean;
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
  disabled,
  creator,
}) => {
  let inner = null;

  if (slot.settings.status === SlotStatus.Occupied) {
    inner = renderPlayerSlot(
      id,
      slot,
      teams,
      host,
      me,
      onSettingsChange,
      creator,
      ping,
      disabled
    );
  } else if (slot.settings.status === SlotStatus.Open) {
    inner = renderOpenSlot(id, slot, onSettingsChange, creator, disabled);
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
  creator,
  ping?: PingStats | null,
  disabled?: boolean
) {
  const readonly = !me && !(creator && !slot.player);

  if (slot.settings.team === 24) {
    return (
      <div className="flex p-1 items-center">
        {slot.player ? (
          <div
            className="flex-auto px-4 flex items-center"
            style={SlotItemStyles}
          >
            <span className={`flex-auto ${me ? "font-semibold" : ""}`}>
              <span>{slot.player.name}</span>
            </span>
            {me ? null : (
              <small className="flex-initial">
                <PingValue value={ping} />
              </small>
            )}
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <div className="flex p-1 items-center justify-center content-center space-x-1">
      <div className="flex-initial" style={TeamStyles}>
        <TeamPicker
          readonly={readonly || disabled}
          value={slot.settings.team}
          teams={teams}
          onChange={(team) => {
            onSettingsChange && onSettingsChange({ id, team });
          }}
        />
      </div>
      <div className="flex-initial">
        <PlayerColorPicker
          readonly={readonly || disabled}
          value={slot.settings.color}
          onChange={(color) => {
            onSettingsChange && onSettingsChange({ id, color });
          }}
        />
      </div>

      {slot.player ? (
        <div className="flex-auto px-4 flex">
          <span className={`flex-auto ${me ? "font-semibold" : ""}`}>
            <span>{slot.player.name}</span>
          </span>
          {me ? null : (
            <small className="flex-initial">
              <PingValue value={ping} />
            </small>
          )}
        </div>
      ) : (
        <Button className="flex-auto">
          Computer ({slot.settings.computer})
        </Button>
      )}

      <div className="flex-initial">
        <RacePicker
          readonly={readonly || disabled}
          value={slot.settings.race}
          onChange={(race) => {
            onSettingsChange && onSettingsChange({ id, race });
          }}
        />
      </div>
      <div className="flex-initial">
        <HandicapPicker
          readonly={readonly || disabled}
          value={slot.settings.handicap}
          onChange={(handicap) => {
            onSettingsChange && onSettingsChange({ id, handicap });
          }}
        />
      </div>
    </div>
  );
}

function renderOpenSlot(
  id: number,
  slot: Slot,
  onSettingsChange: HandlerSlotSettingsChange,
  creator: boolean,
  disabled?: boolean
) {
  if (!creator || slot.settings.team === 24) {
    return (
      <div className="p-1">
        <Button fill disabled={disabled}>
          Open Slot
        </Button>
      </div>
    );
  }

  const menu = (
    <Menu>
      <MenuItem
        className="text-center"
        text="Add Computer"
        onClick={() => {
          onSettingsChange &&
            onSettingsChange({
              id,
              computer: Computer.Normal,
              status: SlotStatus.Occupied,
            });
        }}
      />
    </Menu>
  );
  return (
    <Popover
      minimal
      disabled={disabled}
      content={menu}
      targetClassName="flex-auto"
      className="flex p-1 items-center justify-center"
    >
      <Button className="flex-auto" fill disabled={disabled}>
        Open Slot
      </Button>
    </Popover>
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
  onChange?: (value: Race) => void;
  readonly?: boolean;
}

const RaceValues = Object.keys(Race);

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
          onChange(value as Race);
        }
      }}
    />
  ));

  return (
    <Popover minimal content={<Menu style={{ minWidth: 64 }}>{items}</Menu>}>
      <Button
        className={classnames(className)}
        style={{ width: 80 }}
        title="Race"
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
