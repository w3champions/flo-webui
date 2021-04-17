import { H1, NonIdealState } from "@blueprintjs/core";
import { GetServerSideProps } from "next";
import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import { ADMIN_LIST } from "../const";
import { selectPlayerInfo } from "../redux/store";

const jwt = require("jsonwebtoken");

const METABASE_SITE_URL = "http://service.w3flo.com:23000";
const METABASE_SECRET_KEY =
  "08523503c30a1d497ce16ca0c67410a24833e9bf900d2a6cb0e0ce0a1f9ba8a6";

interface Props {
  iframeUrl: string;
}

export default function PlayerGames({ iframeUrl }: Props) {
  const playerInfo = useSelector(selectPlayerInfo);
  const isAdmin = playerInfo && ADMIN_LIST.includes(playerInfo.name);
  return (
    <Layout flex>
      {isAdmin ? (
        <iframe
          src={iframeUrl}
          frameBorder="0"
          width="100%"
          allowTransparency
        ></iframe>
      ) : (
        <NonIdealState title="Access Denied"></NonIdealState>
      )}
    </Layout>
  );
  return (
    <>
      {playerInfo && playerInfo.name}
      {iframeUrl}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const payload = {
    resource: { question: 39 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  const iframeUrl =
    METABASE_SITE_URL +
    "/embed/question/" +
    token +
    "#theme=night&bordered=true&titled=true";

  return {
    props: {
      iframeUrl,
    },
  };
};
