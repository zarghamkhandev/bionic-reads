import Head from "next/head";
import EmbedSteps from "../components/EmbedSteps";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <EmbedSteps />
    </Layout>
  );
}
