import React, { forwardRef } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { smoother } from "../App";

const Page2 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-red-200 flex items-center justify-center"
    >
        <div id="target-box" className="h-[30px] w-[64px] bg-black text-white flex justify-center items-center cursor-pointer">
        <h2>ToBox1</h2>
        </div>
      <h1 className="text-4xl">Page 2</h1>
    </div>
  );
});

export default Page2;
