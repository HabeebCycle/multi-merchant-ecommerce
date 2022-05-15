import React from "react";
import Head from "next/head";
import { appSettings } from "../../utils/app-settings";

const Seo = (props) => {
  return (
    <Head>
      <title>
        {props.title
          ? `${props.title} | ${appSettings.title}`
          : appSettings.title}
      </title>
      <meta
        name="description"
        content={
          props.description ? props.description : appSettings.description
        }
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={
          props.title
            ? `${props.title} | ${appSettings.title}`
            : appSettings.title
        }
      />
      <meta
        property="og:description"
        content={
          props.description ? props.description : appSettings.description
        }
      />
      <meta property="og:site_name" content={appSettings.title} />
      <meta property="twitter:card" content={appSettings.title} />
      <meta property="twitter:creator" content={appSettings.socials.twitter} />
      <meta property="twitter:title" content={props.title} />
      <meta
        property="twitter:description"
        content={
          props.description ? props.description : appSettings.description
        }
      />
    </Head>
  );
};

export default Seo;
