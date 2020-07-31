import { PLAYER_COLORS } from "../const";
import { Popover, Button, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export default function PlayerColorPicker() {
  return (
    <Popover
      content={
        <div
          className="flex flex-row flex-wrap icons-container justify-between"
          style={{ width: 200 }}
        >
          {PLAYER_COLORS.map(({ r, g, b }, i) => {
            return (
              <div
                key={i}
                className="rounded shadow h-6 w-6 border border-gray-800 m-1 hover:border-white"
                style={{
                  backgroundColor: `rgb(${r}, ${g}, ${b})`,
                }}
              ></div>
            );
          })}
        </div>
      }
    >
      <Button icon="user">
        <span>Color</span>
        <Icon icon={IconNames.CARET_DOWN}></Icon>
      </Button>
    </Popover>
  );
}
