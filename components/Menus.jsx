import React from "react";
import { Button } from "./ui/button";

import Image from "next/image";

const Menus = () => {
  return (
    <>
      <div className="w-full">
        <div className="p-[2px] bg-gradient-to-r from-purple-500 rounded-md to-blue-500 inline-block w-full my-2.5">
          <Button variant="outline" className="w-full py-2 bg-[#1F2441]">
            <p className="text-2xl font-bold bg-gradient-to-r from-[#2DF8FE] to-[#EA2DFB] bg-clip-text text-transparent">+ Create</p>
          </Button>
        </div>

        {/* Section 1 */}
        <div className="w-full rounded-lg bg-[#d1d1d1] dark:bg-[#3d3d3d] p-2 flex flex-col gap-2">
          <div className="Button cursor-pointer flex justify-start items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Library.svg"}
                alt="+Create"
              />
              <span className="font-normal text-sm">My Library</span>
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Review.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Smart Review</span>
            </div>

            <div className="right">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Lock.svg"}
                alt="logo"
              ></Image>
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Hosted.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Hosted Session</span>
            </div>

            <div className="right">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Lock.svg"}
                alt="logo"
              ></Image>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full rounded-lg bg-[#d1d1d1] dark:bg-[#3d3d3d] p-2 mt-3">
          <div className="p-[2px] bg-gradient-to-r from-purple-500 rounded-md to-blue-500 inline-block w-full">
            <Button variant="outline" className="w-full py-2 bg-[#1F2441]">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Bulb.svg"}
                alt="+Create"
              />
              <span className="text-[#FDC822] font-medium text-base">
                Battle of Brains
              </span>
            </Button>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full rounded-lg bg-[#d1d1d1] dark:bg-[#3d3d3d] p-2 flex flex-col gap-2 mt-3">
          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Groups.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Groups</span>
            </div>

            <div className="right">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Lock.svg"}
                alt="logo"
              ></Image>
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Market.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Market Place</span>
            </div>

            <div className="right">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Lock.svg"}
                alt="logo"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-full rounded-lg bg-[#d1d1d1] dark:bg-[#3d3d3d] p-2 flex flex-col gap-2 mt-3">
          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Reward.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Rewards</span>
            </div>

          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Notification.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Notification</span>
            </div>

            <div className="right">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Lock.svg"}
                alt="logo"
              />
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Profile.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Profile</span>
            </div>

            
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Setting.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Setting</span>
            </div>

            <div className="right">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Lock.svg"}
                alt="logo"
              />
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/HTU.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">How to Use</span>
            </div>

          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Support.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Support Hub</span>
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/Logout.svg"}
                alt="logo"
              />
              <span className="font-normal text-sm">Logout</span>
            </div>

          </div>

        </div>

        {/* Section 5 */}
        <div className="w-full rounded-lg bg-[#d1d1d1] dark:bg-[#3d3d3d] p-2 flex flex-col gap-2 mt-3">
          

          <div className="Button flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <span className="font-thin text-sm dark:text-gray-300">Other Links</span>
            </div>
          </div>

          <div className="Button cursor-pointer flex justify-between items-center ">
            <div className="left flex justify-center items-center gap-2">
              <Image
                priority
                width={20}
                height={20}
                src={"./svg/AI.svg"}
                alt="logo"
              />
              <span className="font-bold bg-gradient-to-r from-[#1A9CEC] to-[#43C8A2] bg-clip-text text-transparent">At your service</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Menus;
