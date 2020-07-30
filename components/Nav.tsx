import { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPlayerInfo, AppDispatch, selectSetupDone } from "../redux/store";
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

export const Nav: FunctionComponent<{ noIcon?: boolean }> = ({ noIcon }) => {
  const setupDone = useSelector(selectSetupDone);
  const playerInfo = useSelector(selectPlayerInfo);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        {!noIcon && (
          <>
            <Navbar.Heading className="mr-0">
              <Link href="/">
                <a>
                  <img
                    className="fill-current h-8 w-8 mr-2"
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

        {setupDone && (
          <div className="flex space-x-1">
            <Link href="/create-game">
              <Button icon={IconNames.PLUS} text="Create Game" minimal />
            </Link>
            <Button minimal icon={IconNames.LIST}>
              Servers
            </Button>
          </div>
        )}
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
                  }}
                />
              </Menu>
            }
          >
            <Button icon="user">
              <span>{playerInfo.name}</span>
              <Icon icon={IconNames.CARET_DOWN}></Icon>
            </Button>
          </Popover>
        )}
      </Navbar.Group>
    </Navbar>
  );
};
