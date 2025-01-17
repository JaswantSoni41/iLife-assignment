import Image from "next/image"
import { Button } from "./ui/button"
import { FaArrowRightLong } from "react-icons/fa6";


const SidebarFooterContent = () => {
  return (<>
      <Button variant="outline" className="w-full bg-[#E1BD43] justify-start hover:bg-[#f5d97c]">
        <Image priority
                width={25}
                height={25}
                src={"./svg/Upload.svg"}
                alt="+Create"/>
                <p className="w-full text-center">Upgrade</p>
      </Button>

      <Button variant="outline" className="w-full bg-[#298CB0] justify-between h-fit hover:bg-[#51b4d8]">
        <Image priority
                width={25}
                height={25}
                src={"./svg/Refer.svg"}
                alt="+Create"/>
                <p className="text-start text-wrap">Refer A Friend & earn More Coins</p>
            <FaArrowRightLong/>
                
      </Button>
      </>)
}

export default SidebarFooterContent
