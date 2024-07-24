import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings as SettingsIcon } from "lucide-react";
import ThemeSwitcher from "@/components/modals/theme_switcher";

const Settings = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <SettingsIcon className="w-8 h-8" color="DimGrey" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 h-40" color="gray">
          <DropdownMenuItem>
            <ThemeSwitcher />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Settings;
