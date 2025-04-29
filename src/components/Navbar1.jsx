import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // (you forgot this in some examples!)

export default function Navbar1() {
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
  const scale = useTransform(scrollPercentage, [15, 50], [1.5, 1]);

  return (
    <motion.div
      style={{
        scale,
           // ✅ Corrected
        display: "flex",  // ✅ Now flex properly
        justifyContent: "center",
        alignItems: "center",
      }}
      className="overflow-hidden" // ✅ Optional: avoids weird scaling overflows
    >
      <div>
        <p>Mason Le</p>
      </div>
    </motion.div>
  );
}
