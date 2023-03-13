import Head from "next/head";
import { Header } from "@/components/layouts/header";

const DefaultLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content="Petrousus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
