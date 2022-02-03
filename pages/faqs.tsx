import Layout from "../components/Layout";

export default function Faqs() {
  return (
    <Layout>
        

{/* Section 1 */}
<section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
        <div className="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
          <p className="text-xs mb-5 tracking-tighter font-bold text-left text-our-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
            Got a Question? We’ve got answers.
          </p>
          <h3 className="mt-1 mb-20 text-2xl tracking-tighter font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
            Frequently Asked Questions
          </h3>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
            <h3 className="text-lg font-bold text-our-700 sm:text-xl tracking-tighter md:text-2xl">Will voicys slow down the speed of my website?</h3>
            <p className="mt-2 text-base tracking-tighter text-gray-600 sm:text-lg md:text-normal">
            No, don't worry about that.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
            <h3 className="text-lg font-bold tracking-tighter text-our-700 sm:text-xl md:text-2xl">How do I add the voicys on my website?</h3>
            <p className="mt-2 text-base tracking-tighter text-gray-600 sm:text-lg md:text-normal">
            When you first sign up you will add your website URL. You then want to add the one line of code we provide to your website's head tag. Later, when creating the voicys, you can use our smart embed option, which lets you see where your voicy will go and do the work for you.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
            <h3 className="text-lg font-bold text-our-700 tracking-tighter sm:text-xl md:text-2xl">I have surpassed my monthly views and need more, what should I do?</h3>
            <p className="mt-2 text-base text-gray-600 tracking-tighter sm:text-lg md:text-normal">
            No worries. Simply upgrade to a higher plan or reach out to us for a custom solution.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
            <h3 className="text-lg font-bold text-our-700 tracking-tighter sm:text-xl md:text-2xl">What happens to my voicys when my free trial expires?</h3>
            <p className="mt-2 text-base text-gray-600 tracking-tighter sm:text-lg md:text-normal">
            Don't worry, we won't delete your voicys. They will simply be disabled until you subscribe to a plan. After that they will be back up and running.💪
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
