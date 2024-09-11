import React from "react";
import { Input } from "../ui/input";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import logo from '/logo.png';
import { Search } from "lucide-react";

const Navbar : React.FC = () => {
  return (
    <div className="bg-white px-4 rounded-md shadow-md flex items-center justify-between">
      <div className="w-96 h-10 relative">
        <Search className="absolute top-2.5 left-1 text-gray-300 text-[20px]" fontSize={8}></Search>
        <Input className="h-full w-full px-7 placeholder:text-gray-300" placeholder="Recherche"></Input>
      </div>

      <div>
        <Avatar className="rounded-full">
          <AvatarFallback></AvatarFallback>
          <AvatarImage src={logo} className="w-20 h-auto"></AvatarImage>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
