import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import React from "react";

interface MoreButtonProps {
  children: React.ReactNode;
}
const MoreButton = ({ children }: MoreButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-2" variant="ghost">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {React.Children.map(children, (child, index) => (
          <>
            {child && <DropdownMenuItem key={index}>{child}</DropdownMenuItem>}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreButton;
