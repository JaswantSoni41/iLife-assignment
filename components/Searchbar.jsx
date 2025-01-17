"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [popoverOpen, setPopoverOpen] = useState(false); // State to manage popover visibility

  const genres = ["All Genres", "Action", "Adventure", "Puzzle", "RPG"]; // Example options

  const handleGenreSelect = (genre, string) => {
    setSelectedGenre(genre); // Update selected genre
    setPopoverOpen(false); // Close the popover
  };

  return (
    <div className="flex items-center bg-gray-800 text-white rounded-lg p-2 w-full">
      {/* Dropdown with Popover */}
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button variant="default" className="bg-purple-600 text-white rounded-l-lg px-4 py-2">
            <span className="hidden md:block">{selectedGenre}</span>
            <span className="m-0 md:ml-2 ">▲</span> {/* Placeholder for dropdown icon */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 bg-gray-700 text-white">
          {genres.map((genre) => (
            <div
              key={genre}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleGenreSelect(genre)} // Close popover on click
            >
              {genre}
            </div>
          ))}
        </PopoverContent>
      </Popover>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search your hosted games by Titles or session names...."
        className="flex-grow bg-gray-800 text-sm text-gray-400 placeholder-gray-400 focus:ring-0 focus:outline-none"
      />

      {/* Search Icon */}
      <Button variant="ghost" className="px-4">
        <FiSearch className="text-gray-400 hover:text-white" size={20} />
      </Button>
    </div>
  );
}
