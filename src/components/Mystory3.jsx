import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import myStoryPhoto from '/IMG_9307.png'

export default function Mystory3() {
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
  const scale = useTransform(scrollPercentage, [0, 85, 95, 100], [0.7, 1.1, 1.1, 1]);

  return (
    <motion.div
      style={{
        scale,
        width: "100%",    // ✅ corrected
        height: "100%",   // ✅ corrected
        display: "flex",  // ✅ added flex to center
        justifyContent: "center",
        alignItems: "center",
      }}
      className="overflow-hidden" // ✅ prevents scaling from causing scrollbars
    >
      <div className='flex flex-row items-center justify-center gap-12 w-[60%]'>
            <div className='flex flex-col gap-4 my-4 '>
                <div className='flex flex-col items-end'>
                    <p className='text-[16px] font-poppins font-bold'>UCSB</p>
                </div>
                <p className='max-w-[350px]'>While I enjoyed filmmaking and photography, I realized that I wanted it to stay as a hobby. So when applied for colleges, I decided to choose Computer Science instead of film. As I have taken classes here at UCSB, as well as talked to other people in the major, I realized that Computer Science holds the same key elements of filmmaking. I love the process of creating something to call your own, and through Computer Science I hope to create and be apart of projects that I can be proud of to call my own.</p>
            </div>
            <img className='rounded-2xl shadow-[2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[10vw] h-[13vw] object-cover' src={myStoryPhoto} alt="me when young"></img>

        </div>
    </motion.div>
  );
}
