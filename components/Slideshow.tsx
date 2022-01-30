import { AnimatePresence, motion, Variants } from "framer-motion";
import { wrap } from "popmotion";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface SlideShowProps {
  data: JSX.Element[];
}
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
const SlideShow: React.FunctionComponent<SlideShowProps> = ({ data }) => {
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
  const dataIndex = wrap(0, data.length, page);
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-center w-full overflow-hidden ">
        <AnimatePresence
          initial={false}
          custom={direction}
          exitBeforeEnter={true}
        >
          <motion.div
            className="px-2 py-4 mx-2 mx-auto overflow-hidden w-fit"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {data[dataIndex]}
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
