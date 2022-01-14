import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
    </Layout>
  );
}
