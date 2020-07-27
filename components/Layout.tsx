import { FunctionComponent } from "react";
import { Nav } from "./Nav";
import Head from "next/head";

export const Layout: FunctionComponent<{ noIcon?: boolean }> = ({
  noIcon,
  children,
}) => {
  return (
    <>
      <Head>
        <title>Flo - Warcraft III Hosting Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav noIcon={noIcon} />
        <div className="flo-wrapper">{children}</div>
      </main>
    </>
  );
};
