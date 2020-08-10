import { useSelector } from "react-redux";
import { selectNodes } from "../redux/modules/node";
import { Classes } from "@blueprintjs/core";
import { FlagIcon } from "./FlagIcon";

export default function MyPing() {
  const nodes = useSelector(selectNodes);

  return (
    <table
      className={`${Classes.HTML_TABLE} ${Classes.HTML_TABLE_CONDENSED} ${Classes.HTML_TABLE_STRIPED} w-full`}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Ping</th>
        </tr>
      </thead>
      <tbody>
        {nodes.map((node) => (
          <tr key={node.id}>
            <td>{node.name}</td>
            <td>
              <div className="flex justify-start items-center content-center">
                <FlagIcon className="flex-initial mr-1" id={node.country_id} />
                <span className="flex-auto">{node.location}</span>
              </div>
            </td>
            <td>
              <span className={getPingClass(node.ping)}>
                {node.ping !== null ? `${node.ping}ms` : "N/A"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function getPingClass(value: number | null) {
  if (value === null) {
    return "text-gray-300";
  }
  if (value < 150) {
    return "text-green-500";
  }
  if (value < 250) {
    return "text-orange-500";
  }
  return "text-red-500";
}
