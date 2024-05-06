import React, { useEffect, useState } from "react";
import DashBord from "../components/DashBord";
import Navbar from "../components/Navbar";
import Invoice from "../components/Invoice";

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-auto w-full flex flex-col absolute"
      style={{
        backgroundImage: 'linear-gradient(to top right, #70DBC6, #CA84F1)',
      }}
    >
      <Navbar />
      <DashBord />
      <div 
        className="w-full mt-[380px] z-[999] h-screen "
        style={{ 
          backdropFilter: scrolling ? 'blur(10px)' : 'blur(0px)',
          background:scrolling?"none":"" ,
          transition: 'backdrop-filter 0.5s ease',
        }}
      >
        <Invoice/>
      </div>
    </div>
  );
}

export default App;
