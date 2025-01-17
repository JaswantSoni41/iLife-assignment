import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QuizCard from "./QuizCard";
import HomeSession from "./HomeSession";
import QuizQuestion from "./QuixQuestion";
import Leaderboard from "./Leaderboard";

const quizData = [
  {
    id: 1,
    title: "Energy Transfer",
    difficulty: "Easy",
    questions: 20,
    time: "60s",
    type: "MCQs",
    author: "Rahul",
    genre: "Tech",
    created_at: "07/08/2024 | 1:05 PM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 2,
    title: "Basics of Chemistry",
    difficulty: "Medium",
    questions: 15,
    time: "45s",
    type: "Quiz",
    author: "Neha",
    genre: "Science",
    created_at: "10/05/2023 | 3:15 PM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 3,
    title: "Modern Physics",
    difficulty: "Hard",
    questions: 30,
    time: "90s",
    type: "MCQs",
    author: "Vikas",
    genre: "Physics",
    created_at: "05/12/2023 | 5:20 PM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 4,
    title: "World Geography",
    difficulty: "Medium",
    questions: 25,
    time: "75s",
    type: "Quiz",
    author: "Anjali",
    genre: "Geography",
    created_at: "12/07/2024 | 2:30 PM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 5,
    title: "Digital Marketing 101",
    difficulty: "Easy",
    questions: 10,
    time: "30s",
    type: "MCQs",
    author: "Karan",
    genre: "Marketing",
    created_at: "22/09/2023 | 11:15 AM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 6,
    title: "AI Fundamentals",
    difficulty: "Hard",
    questions: 35,
    time: "120s",
    type: "MCQs",
    author: "Megha",
    genre: "AI",
    created_at: "14/11/2024 | 4:10 PM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 7,
    title: "Introduction to Programming",
    difficulty: "Easy",
    questions: 20,
    time: "60s",
    type: "MCQs",
    author: "Rohan",
    genre: "Coding",
    created_at: "20/10/2024 | 1:05 PM",
    thumbnail: "/images/Thumbnail.png",
  },
  {
    id: 8,
    title: "History of Science",
    difficulty: "Medium",
    questions: 15,
    time: "45s",
    type: "Quiz",
    author: "Priya",
    genre: "History",
    created_at: "02/01/2025 | 3:45 PM",
    thumbnail: "/images/Thumbnail.png",
  },
];

  

const TabLeft = () => {
  return (
    <Tabs defaultValue="My Library" className="justify-items-center w-full h-full p-2">
    <TabsList className="scale-95 md:scale-100">
      <TabsTrigger value="My Library" className="font-bold text-base">
        My Library
      </TabsTrigger>
      <TabsTrigger value="HomeSession" className="font-bold text-base ">
        Home Session
      </TabsTrigger>
    </TabsList>
    
    <TabsContent value="My Library"  className="flex flex-col justify-center gap-2 w-full data-[state=active]:h-[79vh] h-0">
    <div className="flex justify-end items-center mt-4 ml-auto text-[#00CCB3]">
      <span className=" cursor-pointer">Sort by: Date</span>
    </div>
    <QuizCard data={quizData}/>
    </TabsContent>
    <TabsContent value="HomeSession" className="data-[state=active]:h-[79vh] h-0 flex flex-col justify-center gap-2 w-full overflow-y-auto relative ">
      <div className="absolute top-0 w-full"><HomeSession/></div>
    </TabsContent>
  </Tabs>
  
  
  )
}

const TabRight = () => {
  return (
    <Tabs defaultValue="mcq" className="justify-items-center w-full h-full p-2">
    <TabsList className="">
      <TabsTrigger value="mcq" className="font-bold text-base">
        MCQ
      </TabsTrigger>
      <TabsTrigger value="leaderboard" className="font-bold text-base ">
        Leaderboard
      </TabsTrigger>
    </TabsList>
    <TabsContent value="mcq" className="h-[79vh]">
      <QuizQuestion/>
    </TabsContent>
    <TabsContent value="leaderboard" className="h-[79vh] w-full overflow-x-hidden"><Leaderboard/></TabsContent>
  </Tabs>
  
  
  )
}

export { TabLeft , TabRight}
