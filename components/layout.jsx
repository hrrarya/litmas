import Head from "next/head";
import Header from "./header";
import Main from "./main-section/main";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Litmas | Home</title>
        <meta name="description" content="Litmas is a story share app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main pages={children} />
    </div>
  );
};

export default Layout;
