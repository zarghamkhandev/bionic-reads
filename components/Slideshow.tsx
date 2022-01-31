import { AnimatePresence, motion, Variants } from "framer-motion";
import { wrap } from "popmotion";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface SlideShowProps {}
const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
    };
  },
  center: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      transition: {
        duration: 0.5,
      },
    };
  },
};
const SlideShow: React.FunctionComponent<SlideShowProps> = ({}) => {
  const widgets = [
    {
      type: "Listen Voicy",
      description:
        "Our most popular voicy, used to collect customer feedback via voice. Fully customizable.",
      content: (
        <div className="flex border shadow-lg" style={{ borderRadius: "20px" }}>
          <voicy-momina imageUrl="/images/memoji_1.gif"></voicy-momina>
        </div>
      ),
    },
    {
      type: "Speak Voicy",
      description:
        "Simple yet effective - catch your audience's attention with this cool animated voicy.",
      content: (
        <div className="flex">
          <voicy-meghan imageUrl="/images/memoji_1.gif"></voicy-meghan>
        </div>
      ),
    },
    {
      type: "Speak Voicy",
      description:
        "This is a CTA voicy. Encourage people to take action using your voice!",
      content: (
        <div className="flex">
          <voicy-malik imageUrl="/images/memoji_1.gif"></voicy-malik>
        </div>
      ),
    },
    {
      type: "Speak Voicy",
      description:
        "Another cool animated voicy - people won't be able to resist listening to it.",
      content: (
        <div className="flex">
          <voicy-cta
            imageUrl="/images/memoji_1.gif"
            style={{ borderWidth: "1px" }}
          ></voicy-cta>
        </div>
      ),
    },
    {
      type: "Speak Voicy",
      description:
        "The classic. Use this voicy to read out big texts, give extra information or introduce yourself.",
      content: (
        <div className="flex">
          <voicy-usman imageUrl="/images/memoji_1.gif"></voicy-usman>
        </div>
      ),
    },
    {
      type: "Speak Voicy",
      description:
        "The minimalists - put this voicy anywhere on your website to increase engagement.",
      content: (
        <div className="flex">
          <voicy-nicky imageUrl="/images/memoji_1.gif"></voicy-nicky>
        </div>
      ),
    },
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([page]) => [page + newDirection, newDirection]);
  };
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       paginate(1);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  const next = () => {
    paginate(1);
  };
  const back = () => {
    paginate(-1);
  };
  const dataIndex = wrap(0, widgets.length, page);
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-center w-full overflow-hidden ">
        <AnimatePresence
          initial={false}
          custom={direction}
          exitBeforeEnter={true}
        >
          <motion.div
            className="h-56 px-2 py-4 mx-2 mx-auto overflow-hidden w-fit"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="mx-auto w-fit">{widgets[dataIndex].content}</div>
            <div className="flex flex-col items-center justify-center w-full mt-4">
              <p className="text-sm">{widgets[dataIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex mx-auto mt-10">
        <button className="px-4 py-2 mx-2 bg-gray-100 rounded" onClick={back}>
          <BsChevronLeft className="text-xl" />
        </button>
        <button className="px-4 py-2 mx-2 bg-gray-100 rounded" onClick={next}>
          <BsChevronRight className="text-xl" />
        </button>
      </div>
      {/* <div className="flex items-center justify-center w-full h-4">
        {data.map((_, i) => (
          <motion.div
            initial={{ background: "#D1D5DB" }}
            animate={
              i === dataIndex
                ? { background: "#133763" }
                : { background: "#D1D5DB" }
            }
            transition={{ duration: 1 }}
            key={i}
            className={"w-2 h-2 mx-1 rounded-full cursor-pointer"}
          ></motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default SlideShow;