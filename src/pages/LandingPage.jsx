import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

function LandingPage() {
  const history = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      history("/invoice"); // Navigate to the invoice page
    }, 6000); // Adjust the timeout duration as needed (in milliseconds)

    return () => clearTimeout(timeoutId);
  }, [history]);

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center absolute"
      style={{
        backgroundImage: "linear-gradient(to top right, #70DBC6, #CA84F1)",
      }}
    >
      <p className="text-center w-[70%] font-thin text-white text-[40px]">
        <Typewriter
          options={{
            strings: [
              'Introducing our latest innovation in invoice management: Say goodbye to manual invoicing headaches and hello to efficiency. Try it today'
            ],
            autoStart: true,
            loop: false, // Set loop to false to stop after typing once
          }}
        />
      </p>
    </div>
  );
}

export default LandingPage;
