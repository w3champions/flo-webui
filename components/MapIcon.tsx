import classNames from "classnames";

const Style = {
  backgroundImage: "url(/war3/melee-map-icon-selected.png)",
  width: 32,
  height: 32,
  minWidth: 32,
  minHeight: 32,
  lineHeight: "32px",
  fontSize: "9px",
};

export function MapIcon(props: { num_player: number; className?: string }) {
  return (
    <span
      className={classNames(
        "inline-block bg-cover text-center text-white font-semibold",
        props.className
      )}
      style={Style}
    >
      {props.num_player}
    </span>
  );
}
