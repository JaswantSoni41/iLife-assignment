import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdExitToApp } from "react-icons/md";


const QuizQuestion = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-start px-4">
      {/* Header */}
      <div className="w-full max-w-lg flex justify-between items-center rounded-full bg-[#1d1d1d] p-2 mb-6 mt-6">
        <span className="text-gray-400 text-lg font-bold">1/10</span>
        <p className="text-lg font-bold text-gray-400">Harry Potter</p>
        <div className="w-[3rem] h-[3rem] rounded-full  flex items-center justify-center text-black font-bold border-2 border-green-600 overflow-hidden">
          <span className="bg-[#050505] rounded-full text-gray-400 p-3">
            60
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="w-full max-w-lg text-center mb-6">
        <h2 className="text-xl font-medium">
          Who directed 'Harry Potter and the Philosopher's Stone'?
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
        {/* Option 1 */}
        <Card className="hover:scale-105 transition cursor-pointer">
          <CardContent className="p-4 text-center bg-gradient-to-b from-[#9677FF] to-[#6B4AFD] text-white rounded-lg font-semibold h-40 flex items-center justify-center text-lg">
            Chris Columbus
          </CardContent>
        </Card>

        {/* Option 2 */}
        <Card className="hover:scale-105 transition cursor-pointer">
          <CardContent className="p-4 text-center bg-gradient-to-b from-[#FFA888] to-[#DB5926] text-white rounded-lg font-semibold h-40 flex items-center justify-center text-lg ">
            Steven Spielberg
          </CardContent>
        </Card>

        {/* Option 3*/}
        <Card className="hover:scale-105 transition cursor-pointer">
          <CardContent className="p-4 text-center bg-gradient-to-b from-[#5FEACD] to-[#0A7172] text-white rounded-lg font-medium h-40 flex flex-col items-center justify-center">
            <div className="relative w-48 h-24 rounded-md overflow-hidden border-y-2 border-white mb-2 over">
              <Image
                src="./images/peter-jackson.png"
                alt="Peter Jackson"
                fill // Specify height
                objectFit="cover"
              />
            </div>
            <span className="text-white text-lg font-semibold">
              Peter Jackson
            </span>
          </CardContent>
        </Card>

        {/* Option 4*/}
        <Card className="hover:scale-105 transition cursor-pointer">
          <CardContent className="p-4 text-center  bg-gradient-to-b from-[#12AEFB] to-[#4364FD] text-white rounded-lg font-medium h-40 flex flex-col items-center justify-center">
            <div className="relative w-48 h-24 rounded-md overflow-hidden border-y-2 border-white mb-2 over">
              <Image
                src="./images/victor.png"
                alt="Victor Burton"
                fill // Specify height
                objectFit="cover"
              />
            </div>
            <span className="text-white text-lg font-semibold">
              Victor Burton
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center w-full max-w-lg mt-8">
        <Button className="bg-red-600 px-6 py-2 rounded-lg text-white hover:bg-red-700">
          <MdExitToApp/> <span className="font-normal text-xl">Exit</span>
        </Button>
        <Button className="bg-[#4ACBAD] px-6 py-2 rounded-lg text-white hover:bg-[#328a75]">
          <span className="font-normal text-xl">Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;
