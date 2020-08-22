import { FunctionComponent } from "react";
import { Nav } from "./Nav";
import Head from "next/head";
import { Classes } from "@blueprintjs/core";

export const Layout: FunctionComponent<{
  noIcon?: boolean;
  noNav?: boolean;
  flex?: boolean;
  navContent?: JSX.Element;
}> = ({ noIcon, noNav, flex, navContent, children }) => {
  return (
    <>
      <Head>
        <title>Flo - Warcraft III Hosting Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Classes.DARK}>
        {noNav ? null : <Nav noIcon={noIcon} content={navContent} />}
        <div className={`flo-wrapper ${flex ? "flo-wrapper-flex" : ""}`}>
          {children}
        </div>
      </main>
    </>
  );
};
