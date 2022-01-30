import CTA from "../components/CTA";
import EmbedSteps from "../components/EmbedSteps";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";
import TryIt from "../components/TryIt";
import Usecases from "../components/Usecases";
import Video from "../components/Video";

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <Video /> */}
      {/* <TrustedBy /> */}

      <TryIt />

      <Usecases />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
