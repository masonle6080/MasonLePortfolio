import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // (you forgot this in some examples!)
import myStoryPhoto  from '/mystoryphoto.jpg'

export default function Mystory1() {
  const { scrollY } = useScroll();
  const [pageHeight, setPageHeight] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      setPageHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set immediately
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollPercentage = useTransform(scrollY, [0, pageHeight], [0, 100]);
  const scale = useTransform(scrollPercentage, [0, 35, 45, 55], [0.7, 1.1, 1.1, 0.9]);

  return (
    <motion.div
      style={{
        scale,
        height: "100%",   // ✅ Corrected
        display: "flex",  // ✅ Now flex properly
        justifyContent: "center",
        alignItems: "center",
      }}
      className="overflow-hidden" // ✅ Optional: avoids weird scaling overflows
    >
      <div className="flex flex-row items-center justify-center gap-12">
        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-col items-end">
            <p className="text-[16px] font-poppins font-bold">Youth</p>
          </div>
          <p className="max-w-[350px]">
            I grew up in Marin County (a little north of SF) and was raised with my younger brother by my mom and dad. As Vietnamese immigrants, my parents instilled the principles of diligence, hard work, and empathy. Much of my childhood was spent playing sports and exploring the outdoors.
          </p>
        </div>
        <img 
          className="rounded-2xl shadow-[2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[10vw] h-[13vw] object-cover" 
          src={myStoryPhoto} 
          alt="me when young"
        />
      </div>
    </motion.div>
  );
}
