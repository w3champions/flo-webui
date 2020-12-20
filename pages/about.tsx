import { Classes, H1, H2 } from "@blueprintjs/core";
import { FlagIcon } from "../components/FlagIcon";
import { Layout } from "../components/Layout";

export default function About() {
  return (
    <Layout flex>
      <div>
        <img src="flo-the-cat.jpg" alt="Flo the cat" style={{height: 500, width: 333}} />
      </div>
      <div className="ml-12 bp3-running-text">
        <H1>About Flo</H1>

        <p>
          Created by fluxxu. <FlagIcon className="inline-block" id="CN"></FlagIcon> (<a href="https://twitter.com/fluxxu" target="_blank">twitter</a>) (<a href="https://weibo.com/fluxxu" target="_blank">weibo</a>) <br />
          Powered by <a href="https://www.rust-lang.org/" target="_blank">Rust</a>.
        </p>

        <H2>Support</H2>
        <a className={`${Classes.BUTTON}`} href="https://discord.gg/uJmQxG2" target="_blank">W3Champions Discord</a>
        <br /><br />
        <a className={`${Classes.BUTTON}`} href="https://nga.178.com/read.php?tid=24605531" target="_blank">NGA</a>
      </div>
    </Layout>
  );
}
