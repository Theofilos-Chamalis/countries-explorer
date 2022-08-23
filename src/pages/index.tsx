import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Countries Explorer</title>
        <meta
          name="description"
          content="A next.js based frontend application that uses the REST Countries V2 API to pull and display country related information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className="flex justify-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-nunito-bold text-dm-dark-blue"
        >
          Powered by{" Vercel"}
        </a>
      </footer>
    </>
  );
};

export default HomePage;
