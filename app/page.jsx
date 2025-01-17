"use client"
import { SidebarTrigger } from "@/components/ui/sidebar";
import Resizable from "@/components/Resizable";
import React, { useEffect, useState } from "react";
import { TabLeft, TabRight} from "@/components/Tabs";

export default function Home() {

  const [isVertical, setIsVertical] = useState(false);
  
    // Function to handle screen resize
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsVertical(window.innerWidth <= 1030);
      }
    };
  
    useEffect(() => {
      // Run only in the browser
      if (typeof window !== "undefined") {
        // Set initial layout
        setIsVertical(window.innerWidth <= 1030);
  
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);
  
        // Cleanup the event listener
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);

  return (
    <main className="w-full h-[calc(100vh_-_4.78rem)] relative overflow-y-auto">
      <SidebarTrigger className="z-[10]"/>
      <div className={`${isVertical ? 'hidden' :''} px-2 h-[calc(100vh_-_6.721rem)] overflow-y-auto`}>
        <Resizable/>
      </div>

      <div className={`${isVertical ? '' : 'hidden'} px-2 min-h-[calc(100vh_-_6.721rem)] overflow-y-auto`}>
        <div className="tab-left min-h-screen">
          <TabLeft/>
        </div>

        <div className="tab-right min-h-screen">
          <TabRight/>
        </div>
      </div>
      

    </main>
  );
}
