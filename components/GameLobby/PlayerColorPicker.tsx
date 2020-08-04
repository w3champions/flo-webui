import { PLAYER_COLORS } from "../../const";
import { Popover, Button, Icon, Classes } from "@blueprintjs/core";
import classnames from "classnames";

export interface PlayerColorPickerProps {
  value: number;
  className?: string;
  onChange?: (value: number) => void;
  disabled?: boolean;
  readonly?: boolean;
}

export default function PlayerColorPicker({
  value,
  className,
  onChange,
  disabled,
  readonly,
}: PlayerColorPickerProps) {
  const { r, g, b } = PLAYER_COLORS[value];

  if (readonly) {
    return <ColorBlock readonly size={28} r={r} g={g} b={b} />;
  }

  return (
    <Popover
      disabled={disabled}
      className="flex-initial flex"
      minimal
      content={
        <div
          className={classnames(
            "flex flex-row flex-wrap icons-container justify-between p-1",
            className
          )}
          style={{ width: 200 }}
        >
          {PLAYER_COLORS.map(({ r, g, b }, i) => {
            return (
              <div
                className={`flex-1 m-1 ${Classes.POPOVER_DISMISS}`}
                key={i}
                onClick={() => {
                  if (onChange) {
                    onChange(i);
                  }
                }}
              >
                <ColorBlock size={24} r={r} g={g} b={b} />
              </div>
            );
          })}
        </div>
      }
    >
      <ColorBlock size={28} r={r} g={g} b={b} />
    </Popover>
  );
}

function ColorBlock({
  r,
  g,
  b,
  size,
  disabled,
  readonly,
}: {
  r: number;
  g: number;
  b: number;
  size: number;
  disabled?: boolean;
  readonly?: boolean;
}) {
  return (
    <div
      className={classnames(
        "flex-initial rounded shadow border border-gray-800",
        disabled
          ? "cursor-not-allowed opacity-50"
          : readonly
          ? ""
          : "hover:border-white cursor-pointer"
      )}
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: size,
        height: size,
      }}
    ></div>
  );
}
