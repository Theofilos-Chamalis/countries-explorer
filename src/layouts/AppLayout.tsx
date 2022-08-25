import { FunctionComponent, ReactElement } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

interface AppLayoutProps {
  children: ReactElement;
}

// Basic layout wrapper for the app, which includes the navbar, the head (for including meta tags),
// and the children pages which it wraps.
const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Countries Explorer</title>
        <meta
          name="description"
          content="A next.js based frontend application that uses the REST Countries V2 API to pull and
          display country related information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;
