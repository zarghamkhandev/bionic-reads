import CTA from "../components/CTA";
import EmbedSteps from "../components/EmbedSteps";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";
import Usecases from "../components/Usecases";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <EmbedSteps />
      <Usecases />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
