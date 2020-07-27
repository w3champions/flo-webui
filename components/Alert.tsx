export interface Props {
  message: string;
}

export function Alert(props: Props) {
  return <div className="flo-alert">{props.message}</div>;
}
