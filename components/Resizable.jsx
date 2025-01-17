"use client"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {TabLeft, TabRight} from "./Tabs";
import React, { useEffect, useState } from "react";



const Resizable = () => {

  const [isVertical, setIsVertical] = useState(false);

  // Function to handle screen resize
  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsVertical(window.innerWidth <= 770);
    }
  };

  useEffect(() => {
    // Run only in the browser
    if (typeof window !== "undefined") {
      // Set initial layout
      setIsVertical(window.innerWidth <= 770);

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <ResizablePanelGroup direction={`${isVertical?'vertical':'horizontal'}`} className={''}>
        <ResizablePanel defaultSize={100} className="h-full w-full"><TabLeft/></ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={100} className="h-full w-full"><TabRight/></ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Resizable;
