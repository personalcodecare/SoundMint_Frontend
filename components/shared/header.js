/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

const Header = ({ ...props }) => {
  const { title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js" />
      </Head>
    </>
  );
};

export default Header;
