import EmbedSteps from "../components/EmbedSteps";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TrustedBy from "../components/TrustedBy";
import Usecases from "../components/Usecases";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <EmbedSteps />
      <Usecases />
    </Layout>
  );
}
