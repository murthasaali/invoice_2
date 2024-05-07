import React from "react";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";

function DashBord() {
  return (
    <div className="w-full h-[320px] fixed flex flex-col mt-20 p-4 ">
      <div className="w-full h-[300px]  bg- flex justify-start items-center gap-4 px-2 ">
        <div
          className="w-[40%] relative h-full bg-stone-100 rounded-3xl bg-opacity-30  flex flex-col  justify-between  pb-0"
          style={{
            backgroundImage:
              "url('https://avatars.mds.yandex.net/i?id=55ca061889befd7406ec6bc563c974c885aae871-7551603-images-thumbs&ref=rim&n=33&w=444&h=250')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full backdrop-blur-sm rounded-3xl">
            <div className="w-full h- flex p-3 pb-0 justify-between">
              <div className="h-fit text-end relative flex items-center">
                <h1 className="absolute font-thin top-[-10px] left-3">
                  Available for instant payout
                </h1>
                <p className="text-[50px] text-end text-stone-200  p-3 rounded-3xl">
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
            <button className="h-fit w-fit p-3 border absolute top-5 rounded-full right-5">
              <GoArrowUpRight />
            </button>
            <div className="w-full h-[50%] bottom-0 rounded-3xl items-end absolute flex justify-between px-4 ">
              <div className="w-[75%] h-full flex bg-opacity-40 items-end   ">
                <div className="h-[80%] w-[30%] bg-stone-100 bg-opacity-40 p-4 rounded-t-3xl">
                  <div className=" flex flex-col h-full justify-between">
                    {" "}
                    <div>#43344</div>
                    <div className=" font-thin ">visa</div>
                  </div>
                </div>
                <div
                  className="h-[100%] w-[30%] bg-stone-100 bg-opacity-40 p-4 rounded-t-3xl"
                  style={{ background: "#DFFE23 " }}
                >
                  <div className=" flex flex-col h-full justify-between">
                    {" "}
                    <div>#43344</div>
                    <div className=" font-thin ">visa</div>
                  </div>
                </div>
                <div className="h-[60%] w-[30%] bg-stone-100 bg-opacity-40 p-4 rounded-t-3xl">
                  <div className=" flex flex-col h-full justify-between">
                    {" "}
                    <div>#43344</div>
                    <div className=" font-thin ">visa</div>
                  </div>
                </div>
              </div>
              <button className=" h-fit p-3 bg-stone-950 mb-5 rounded-full text-white text-sm font-thin">
                Pay Out Now
              </button>
            </div>
          </div>
        </div>
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
              <div className="w-[50%] h-full rounded-full bg-custom bg-opacity-80" ></div>
              <h1 className="absolute top-[-30px] left-0">sep</h1>
            </div>
            <div className="w-[40%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-custom bg-opacity-80"></div>
              <h1 className="absolute top-[-30px] left-0">act</h1>
            </div>
            <div className="w-[15%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-custom bg-opacity-80"></div>
              <h1 className="absolute top-[-30px] left-0">now</h1>
            </div>
            <div className="w-[15%] h-5 bg-stone-950 bg-opacity-40 rounded-full relative">
              <div className="w-[50%] h-full rounded-full bg-custom bg-opacity-80"></div>
              <h1 className="absolute top-[-30px] left-0">dec</h1>
            </div>
          </div>
          <div className="w-full h-fit px-10  flex justify-between rounded-3xl">
            <div className="w-fit flex  gap-[-10px]">
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full" style={{backgroundImage:"url('https://i.pinimg.com/originals/0b/ea/32/0bea327b41fcb149bf331e2fca53ee4c.jpg' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}}></div>
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=644bad278c1101c64374f08599a788a22c49ceea-10157623-images-thumbs&n=13' )" ,backgroundPosition:"center" ,backgroundSize:"cover" ,backgroundRepeat:"no-repeat"}} ></div>
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=b0d8f61f2bb22224c5ea1fff4fb2ef0c7d149d3e-10491961-images-thumbs&n=13' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}} ></div>
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=922d95cead989b8f1456fc7b02e25b102c6e8364-12193070-images-thumbs&n=13' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}} ></div>
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=11823c4157fed4ba1345361fb3467b34624c814b-11939057-images-thumbs&n=13' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}} ></div>
            </div>
            <div className="w-fit flex  gap-[-10px]">
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://avatars.mds.yandex.net/i?id=95c7f192543a19335194b20cfd9347837358a9d0-12371956-images-thumbs&n=13' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}} ></div>
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://www.the-sun.com/wp-content/uploads/sites/6/2023/01/NA-Andrew-tate-offplatform.jpg?strip=all&amp;quality=100&amp;w=1920&amp;h=1080&amp;crop=1' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}} ></div>
              <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full"  style={{backgroundImage:"url('https://www.dmarge.com/wp-content/uploads/2019/05/how-to-wear-suit-jacket.jpg' )" ,backgroundPosition:"center" ,backgroundSize:"cover " ,backgroundRepeat:"no-repeat"}} ></div>
            </div>
            <div className="w-fit flex gap-[-10px] relative">
  <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full absolute top-0 right-8" style={{backgroundImage:"url('https://personalgoldclub.com/wp-content/uploads/2018/12/ar_suitwide_p-business-woman.jpg' )", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} ></div>
  <div className="w-10 h-10 bg-black border border-white border-[3px] rounded-full  " style={{backgroundImage:"url('https://thumbs.dreamstime.com/b/business-woman-modern-office-44552485.jpg' )", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", zIndex: 1}} ></div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBord;
