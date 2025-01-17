import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrashIcon, PencilIcon, PlayIcon } from "lucide-react";

export default function QuizCard({ data }) {
  return (
    <div className="space-y-6 overflow-x-auto w-full">
      {data.map((quiz) => (
        <div
          key={quiz.id}
          className="relative p-4 bg-[#111016CC]/80 rounded-lg shadow-md text-white flex flex-col sm:flex-row gap-5 md:gap-0 justify-between md:items-start"
        >
          {/* Main Content */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-start sm:items-center">
            {/* Thumbnail */}
            <div className="relative md:w-32 md:h-24 flex-shrink-0 mb-4 sm:mb-0 w-full h-[12rem]">
              <Image
                src={quiz.thumbnail || "/placeholder-image.png"}
                alt={quiz.title}
                fill
                className="rounded-lg object-cover"
              />

              <div className="absolute bottom-0 right-0 bg-teal-300 p-1 rounded-full">
                <PencilIcon className="w-4 h-4 text-gray-800" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow w-full">
              <h2 className="text-lg font-semibold truncate">{quiz.title}</h2>
              <p className="text-sm text-gray-400">
                {quiz.difficulty} | {quiz.questions} Questions | {quiz.time}
              </p>
              <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-400 mt-1">
                {/* Author name */}
                <div className="author-details flex flex-col md:flex-row items-start justify-between gap-3">
                  <span className="text-xl text-[#FDC76F]">{quiz.type}</span>

                  <div className="flex flex-col gap-2 md:gap-1">
                  <div className="top-details flex flex-wrap gap-2 md:gap-3 mt-1">
                    <div className="author-name">
                      <span className="font-semibold">Created by:</span>
                      <span> {quiz.author}</span>
                    </div>
                    <div className="author-name">
                      <span className="font-semibold">Genre:</span>
                      <span> {quiz.genre}</span>
                    </div>
                  </div>
                  <div className="created-at">
                      <span className="font-semibold">Created at:</span>
                      <span> {quiz.created_at}</span>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row sm:flex-col gap-4 justify-between">
            <Button
              variant="secondary"
              className="ml-auto text-red-500 w-full sm:w-auto"
            >
              <TrashIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              className="flex items-center space-x-2 w-full sm:w-auto bg-[#739AF9] hover:bg-[#5373c2]"
            >
              <PencilIcon className="w-4 h-4" />
              <span>Edit</span>
            </Button>
            <Button
              variant="secondary"
              className="flex items-center space-x-2 w-full sm:w-auto bg-[#739AF9] hover:bg-[#5373c2]"
            >
              <PlayIcon className="w-4 h-4" />
              <span>Play</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
