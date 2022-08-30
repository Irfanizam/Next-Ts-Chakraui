import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>This is a Website to register</h1>
    </Layout>
  );
}
