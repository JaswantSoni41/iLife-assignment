"use client"
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter} from "@/components/ui/sidebar";
import Link from "next/link";
import Menus from "./Menus";
import SidebarFooterContent from "./SidebarFooterContent";

const AppSidebar = () => {
  return (
    <Sidebar>
        <div className="hidden md:block div h-[5.175rem]">
            
        </div>
        <div className="logo h-[2.875rem] w-full mt-9 md:hidden">
        <h1 className="font-bold text-center"><Link href={"/"}>Logo + Name</Link></h1>
        </div>
      <SidebarHeader>
        <div className="profile bg-[#6A3DCC] rounded-full cursor-pointer py-1 px-3 flex flex-col justify-center items-center text-start">
          <div className="details">
          <p className="font-bold text-lg text-white">Jaswant Soni</p>
          <p className="text-sm text-white">Student</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <Menus/>
      </SidebarContent>
      <SidebarFooter className="w-full">
        <SidebarFooterContent/>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
