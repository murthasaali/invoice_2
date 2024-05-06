import React from "react";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";

function DashBord() {
  return (
    <div className="w-full h-[320px] fixed flex flex-col mt-20 p-4 ">
      <div className="w-full h-[300px]  bg- flex justify-start items-center gap-4 px-2 ">
        <div className="w-[60%] h-full bg-stone-100 rounded-3xl bg-opacity-30  flex flex-col  justify-between py-3">
          <div className="w-full h- flex p-3 justify-between">
            <div className="h-fit text-end relative">
              <h1 className="absolute font-thin top-[-10px] left-3">Overdue</h1>
              <p className="text-[50px] text-end   p-3 rounded-3xl">
                <span className="text-[30px]">$</span>
                <CountUp end={68} />,
                <span className="text-stone-950 text-opacity-60">
                  <CountUp end={512} />
                </span>
                .
                <span className="text-[30px] text-stone-950 text-opacity-60">
                  00
                </span>
              </p>
            </div>
            <div className="h-fit text-end relative">
              <h1 className="absolute font-thin top-[-10px] left-3">
                Due within next month
              </h1>
              <p className="text-[50px] text-end   p-3 rounded-3xl">
                <span className="text-[30px]">$</span>
                <CountUp end={68} />,
                <span className="text-stone-950 text-opacity-60">
                  <CountUp end={512} />
                </span>
                .
                <span className="text-[30px] text-stone-950 text-opacity-60">
                  00
                </span>
              </p>
            </div>
            <div className="h-fit w-[250px] text-end relative flex items-start">
              <h1 className="absolute font-thin top-[-10px] left-3">
                Average time to get paid
              </h1>
              <p className="text-[50px] text-end   p-3 rounded-3xl">
                12{" "}
                <span className="text-[20px] text-stone-950 text-opacity-60">
                  days
                </span>
              </p>
            </div>
          </div>
          <div className="w-full h-fit p-4 font-thin  gap-3 flex justify-evenly">
            <div className="w-[30%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-green-600"></div>
              <h1 className="absolute top-[-30px] left-0">sep</h1>
            </div>
            <div className="w-[40%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-green-600"></div>
              <h1 className="absolute top-[-30px] left-0">act</h1>
            </div>
            <div className="w-[15%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-green-600"></div>
              <h1 className="absolute top-[-30px] left-0">now</h1>
            </div>
            <div className="w-[15%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-green-600"></div>
              <h1 className="absolute top-[-30px] left-0">dec</h1>
            </div>
          </div>
          <div className="w-full h-fit px-10  flex justify-between rounded-3xl">
            <div className="w-fit flex  gap-[-10px]">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
            </div>
            <div className="w-fit flex  gap-[-10px]">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
            </div>
            <div className="w-fit flex  gap-[-10px]">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[40%] relative h-full bg-stone-100 rounded-3xl bg-opacity-30  flex flex-col  justify-between pt-3 pb-0">
          <div className="w-full h- flex p-3 pb-0 justify-between">
            <div className="h-fit text-end relative flex items-center">
              <h1 className="absolute font-thin top-[-10px] left-3">
                Available for instant payout
              </h1>
              <p className="text-[50px] text-end   p-3 rounded-3xl">
                <span className="text-[30px]">$</span>
                <CountUp end={214} />,
                <span className="text-stone-950 text-opacity-60">
                  <CountUp end={390} />
                </span>
                .
                <span className="text-[30px] text-stone-950 text-opacity-60">
                  00
                </span>
              </p>
              <button className="h-fit px-3 py-2 rounded-full border border-stone-950 border-opacity-40">
                Expects
              </button>
            </div>
          </div>
          <button className="h-fit w-fit p-3 border absolute top-5 rounded-full right-5"><GoArrowUpRight/></button>
          <div className="w-full h-[50%] bottom-0 rounded-3xl items-end absolute flex justify-between px-4 ">
            <div className="w-[75%] h-full flex bg-opacity-40 items-end   ">
              <div className="h-[80%] w-[30%] bg-stone-100 bg-opacity-40 p-4 rounded-t-3xl">  
              <div className=" flex flex-col h-full justify-between"> <div>#43344</div>
              <div  className=" font-thin ">visa</div></div></div>
              <div className="h-[100%] w-[30%] bg-stone-100 bg-opacity-40 p-4 rounded-t-3xl" style={{background:"#DFFE23 "}}>  
              <div className=" flex flex-col h-full justify-between"> <div>#43344</div>
              <div  className=" font-thin ">visa</div></div></div>
              <div className="h-[60%] w-[30%] bg-stone-100 bg-opacity-40 p-4 rounded-t-3xl">  
              <div className=" flex flex-col h-full justify-between"> <div>#43344</div>
              <div  className=" font-thin ">visa</div></div></div>
            </div>
            <button className=" h-fit p-3 bg-stone-950 mb-5 rounded-full text-white text-sm font-thin">Pay Out Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBord;
