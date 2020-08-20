import { Alert, Classes, Intent, Dialog, Icon } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGameStarting,
  selectStartGameRejection,
  clearStartGameRejection,
  selectCurrentGamePlayers,
} from "../../redux/modules/game";
import { IconNames } from "@blueprintjs/icons";
import { useCallback } from "react";

export default function GameStartFailedAlert() {
  const dispatch = useDispatch();
  const rejection = useSelector(selectStartGameRejection);
  const players = useSelector(selectCurrentGamePlayers);
  const close = useCallback(() => {
    dispatch(clearStartGameRejection());
  }, [dispatch]);

  return (
    <Dialog
      icon={IconNames.ERROR}
      isOpen={!!rejection}
      className={Classes.DARK}
      onClose={close}
      title="Start Game Failed"
    >
      {rejection && (
        <div className={Classes.DIALOG_BODY}>
          <p className="mb-4">{rejection.message}</p>
          <table
            className={`${Classes.HTML_TABLE} ${Classes.HTML_TABLE_CONDENSED} ${Classes.HTML_TABLE_STRIPED} w-full`}
          >
            <thead>
              <tr>
                <th>Player</th>
                <th>Game Version</th>
                <th>Map Checksum</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => {
                const ack = rejection.player_client_info_map[p.id];
                const sha1 = ack && ack.map_sha1 ? hexSha1(ack.map_sha1) : null;
                return (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>
                      {ack ? (
                        ack.war3_version
                      ) : (
                        <Icon icon={IconNames.CROSS} className="text-red-600" />
                      )}
                    </td>
                    <td>
                      {ack ? (
                        <span
                          title={sha1}
                          className="text-xs truncate inline-block w-32"
                        >
                          {sha1}
                        </span>
                      ) : (
                        <Icon icon={IconNames.CROSS} className="text-red-600" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Dialog>
  );
}

function hexSha1(numbers: number[]) {
  return numbers.map((v) => v.toString(16)).join("");
}
