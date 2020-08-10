import { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPlayerInfo,
  AppDispatch,
  selectSetupDone,
  selectSessionGameId,
} from "../redux/store";
import Link from "next/link";
import {
  Navbar,
  Alignment,
  Button,
  Popover,
  Menu,
  MenuItem,
  Intent,
  Icon,
} from "@blueprintjs/core";
import { signOut } from "../redux/modules/auth";
import { IconNames } from "@blueprintjs/icons";
import { useRouter } from "next/router";
import { useWs } from "../providers/ws";

export const Nav: FunctionComponent<{
  noIcon?: boolean;
  content?: JSX.Element;
}> = ({ noIcon, content }) => {
  const router = useRouter();
  const setupDone = useSelector(selectSetupDone);
  const playerInfo = useSelector(selectPlayerInfo);
  const dispatch: AppDispatch = useDispatch();
  const path = router.pathname;
  const ws = useWs();

  return (
    <Navbar fixedToTop style={{ maxWidth: 1366, margin: "0 auto" }}>
      <Navbar.Group align={Alignment.LEFT}>
        {!noIcon && (
          <>
            <Navbar.Heading className="mr-0">
              <Link href="/">
                <a>
                  <img
                    className="fill-current h-8 w-8 mr-2 shadow"
                    width="64"
                    height="64"
                    src="/flo.svg"
                  />
                </a>
              </Link>
            </Navbar.Heading>
            <Navbar.Divider />
          </>
        )}

        {setupDone ? (
          content ? (
            content
          ) : (
            <div className="flex space-x-1">
              <Link href="/">
                <Button
                  minimal
                  icon={IconNames.DASHBOARD}
                  active={path === "/"}
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/create-game">
                <Button
                  icon={IconNames.PLUS}
                  text="Create Game"
                  minimal
                  active={path === "/create-game"}
                />
              </Link>
            </div>
          )
        ) : null}
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT} className="flex space-x-1">
        {playerInfo && (
          <Popover
            minimal
            content={
              <Menu>
                <Link href="/about">
                  <MenuItem text="About Flo" />
                </Link>

                <MenuItem
                  text="Sign out"
                  onClick={() => {
                    dispatch(signOut());
                    if (ws) {
                      ws.drop();
                    }
                  }}
                />
              </Menu>
            }
          >
            <Button icon="user" rightIcon={IconNames.CARET_DOWN}>
              <span>{playerInfo.name}</span>
            </Button>
          </Popover>
        )}
      </Navbar.Group>
    </Navbar>
  );
};
