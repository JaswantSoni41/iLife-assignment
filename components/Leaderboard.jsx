"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    { rank: 1, name: "John Smith", email: "john.smith@gmail.com", category: "Games", score: 3454 },
    { rank: 2, name: "Jaswant Soni", email: "jaswant.soni@gmail.com", category: "Games", score: 3468 },
    { rank: 3, name: "Alice Green", email: "alice.green@gmail.com", category: "Anime", score: 2950 },
    { rank: 4, name: "Jane Doe", email: "jane.doe@gmail.com", category: "Marvel", score: 2530 },
    { rank: 5, name: "Robert Brown", email: "robert.brown@gmail.com", category: "Harry Potter", score: 2105 },
    { rank: 6, name: "Lucy White", email: "lucy.white@gmail.com", category: "Oscar Movie", score: 1920 },
    { rank: 7, name: "Emily Black", email: "emily.black@gmail.com", category: "Marvel", score: 1815 },
    { rank: 8, name: "Lucy Green", email: "lucy.green@gmail.com", category: "Oscar Movie", score: 1 },
    { rank: 9, name: "James Bond", email: "james.bond@gmail.com", category: "Spy Fiction", score: 1700 },
    { rank: 10, name: "Tony Stark", email: "tony.stark@gmail.com", category: "Marvel", score: 1600 },
  ]);

  const [sortedPlayers, setSortedPlayers] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    setSortedPlayers(sorted);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 730);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [players]);

  const maskEmail = (email) => {
    const [username, domain] = email.split("@");
    const maskedUsername = username.slice(0, 2) + "*".repeat(username.length - 2);
    return `${maskedUsername}@${domain}`;
  };

  return (
    <div className="flex flex-col items-center space-y-6 text-white p-6 overflow-x-hidden relative">
      {/* Leaderboard Banner */}
      <Image src={"svg/leaderboard.svg"} alt="Leaderboard Banner" width={250} height={10} />

      {/* Top Rankings */}
      {isSmallScreen ? (
        <div className="relative w-full z-0 overflow-hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000, // 2 seconds delay for autoplay
              }),
            ]}
          >
            <CarouselContent>
              {sortedPlayers.slice(0, 3).map((player, index) => (
                <CarouselItem key={index} className="flex flex-col items-center">
                  <div className="relative flex flex-col items-center bg-[#3b3a40]/80 p-4 rounded-lg shadow-md w-40 sm:w-48">
                    <div className="absolute -top-3 left-0">
                      {index === 0 && (
                        <Image src={"./images/GoldMedal.png"} alt="Gold Medal" height={50} width={50} />
                      )}
                      {index === 1 && (
                        <Image src={"./images/SilverMedal.png"} alt="Silver Medal" height={50} width={50} />
                      )}
                      {index === 2 && (
                        <Image src={"./images/BronzeMedal.png"} alt="Bronze Medal" height={50} width={50} />
                      )}
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-700 mb-2 relative overflow-hidden">
                      <Image src={"./images/profile-1.png"} alt="Profile" objectFit="cover" fill />
                    </div>
                    <h3 className="text-lg font-semibold">{player.name}</h3>
                    <p className="text-sm text-gray-400">{maskEmail(player.email)}</p>
                    <div className="flex justify-between w-full text-sm mt-2">
                      <span className="font-medium">{player.category}</span>
                      <span className="flex items-center space-x-1 gap-1">
                        <Image src={"./images/Coins.png"} alt="Coin" width={25} height={25} />
                        <span>{player.score}</span>
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center items-end space-x-4 flex-wrap gap-5 lg:scale-75 xl:scale-100 relative z-0">
          {/* Ranks for larger screens */}
          {sortedPlayers.slice(0, 3).map((player, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center bg-[#3b3a40]/80 p-4 rounded-lg shadow-md ${
                index === 0 ? "w-48 sm:w-56 transform scale-110" : "w-40 sm:w-48"
              }`}
            >
              <div className="absolute -top-3 left-0">
                {index === 0 && (
                  <Image src={"./images/GoldMedal.png"} alt="Gold Medal" height={50} width={50} />
                )}
                {index === 1 && (
                  <Image src={"./images/SilverMedal.png"} alt="Silver Medal" height={50} width={50} />
                )}
                {index === 2 && (
                  <Image src={"./images/BronzeMedal.png"} alt="Bronze Medal" height={50} width={50} />
                )}
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-700 mb-2 relative overflow-hidden">
                <Image src={"./images/profile-1.png"} alt="Profile" objectFit="cover" fill />
              </div>
              <h3 className="text-lg font-semibold">{player.name}</h3>
              <p className="text-sm text-gray-400">{maskEmail(player.email)}</p>
              <div className="flex justify-between w-full text-sm mt-2">
                <span className="font-medium">{player.category}</span>
                <span className="flex items-center space-x-1 gap-1">
                  <Image src={"./images/Coins.png"} alt="Coin" width={25} height={25} />
                  <span>{player.score}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lower Rankings */}
      <div className="space-y-2 w-full lg:overflow-y-auto overflow-x-hidden h-[70vh]">
        {sortedPlayers.slice(3).map((player, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center bg-[#3b3a40]/80 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="text-gray-300 font-medium">#{index + 4}</div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 relative overflow-hidden">
                <Image src={"./images/profile-1.png"} alt="Profile" objectFit="cover" fill />
              </div>
              <div>
                <h3 className="font-semibold">{player.name}</h3>
                <p className="text-sm text-gray-400">{maskEmail(player.email)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium">{player.category}</span>
              <span className="flex items-center space-x-1 gap-1">
                <Image src={"./images/Coins.png"} alt="Coin" width={25} height={25} />
                <span>{player.score}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
