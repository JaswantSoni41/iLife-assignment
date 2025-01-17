import { Button } from "@/components/ui/button";

function GameCard() {
  return (
    <div className="bg-gray-900 text-white rounded-lg border border-gray-700 shadow-md p-4">
      {/* Title */}
      <h2 className="text-lg font-bold text-yellow-500">Energy Transfer</h2>

      {/* Session Name */}
      <p className="text-sm text-green-400 mt-2">
        Session Name: <span className="text-gray-300">xxxxxxxxxxxxxxx</span>
      </p>

      {/* Details */}
      <div className="mt-4">
        <p className="text-sm text-gray-400">Easy | 5 Questions | 60s</p>
        <p className="text-sm text-blue-400 mt-2">MCQs</p>
        <p className="text-sm text-gray-400">
          Genre: <span className="text-white">Science</span>
        </p>
        <p className="text-sm text-gray-400">
          Hosted on: <span className="text-white">07/08/2024 | 1:05 PM</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-between mt-4 gap-1">
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
          Host Game
        </Button>
        <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
          Leaderboard
        </Button>
      </div>
    </div>
  );
}

export default function GameGrid() {
  return (
    <div className="container mx-auto p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cards */}
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
