import React, { forwardRef } from 'react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { smoother } from "../App";

const Page1 = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='h-[100vh] w-full bg-gray-100 flex flex-col justify-center items-center'>

            <div onClick={(e)=>{smoother.scrollTo('#target-box', 1, "center center")}} className="h-[30px] w-[64px] bg-black text-white flex justify-center items-center cursor-pointer">
                <h2>ToBox hellooooooo
                </h2>
            </div>
            
        </div>
    );
});

export default Page1;
