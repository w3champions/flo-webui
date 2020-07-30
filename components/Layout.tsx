import { FunctionComponent } from "react";
import { Nav } from "./Nav";
import Head from "next/head";
import { Classes } from "@blueprintjs/core";

export const Layout: FunctionComponent<{
  noIcon?: boolean;
  flex?: boolean;
}> = ({ noIcon, flex, children }) => {
  return (
    <>
      <Head>
        <title>Flo - Warcraft III Hosting Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Classes.DARK}>
        <Nav noIcon={noIcon} />
        <div className={`flo-wrapper ${flex ? "flo-wrapper-flex" : ""}`}>
          {children}
        </div>
      </main>
    </>
  );
};
