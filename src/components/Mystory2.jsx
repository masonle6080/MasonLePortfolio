import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Mystory2() {
  const { scrollY } = useScroll();
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollPercentage = useTransform(scrollY, [0, pageHeight], [0, 100]);
  const scale = useTransform(scrollPercentage, [0, 60, 70, 90], [0.7, 1.1, 1.1, 0.9]);

  return (
    <motion.div
      style={{
        scale,
        height: "100%",   // ✅ corrected
        display: "flex",  // ✅ added flex to center
        justifyContent: "center",
        alignItems: "center",
      }}
      className="overflow-hidden" // ✅ prevents scaling from causing scrollbars
    >
      <div className="flex flex-row items-center justify-center gap-12">
        <img 
          className="rounded-2xl shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[10vw] h-[13vw] object-cover" 
          src="IMG_8873.png" 
          alt="me at my film screening"
        />
        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-col">
            <p className="text-[16px] font-poppins font-bold">Film</p>
          </div>
          <p className="max-w-[350px]">
            When COVID hit I discovered the world of photography and filmmaking; most of my high school was spent involved in the craft. Using my mom's old camera, I experimented and fell in love. Eventually I got my own camera — a Sony A7iii. I joined a film program and created various films, including documentaries, music videos, and short films.
          </p>
          <Link to="/portfolio">
            <span className="text-blue underline">&gt; <span className="font-bold">portfolio</span></span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
