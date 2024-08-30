import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Theme } from "@/lib/themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-medium">
        <span>Background Color</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-40">
        {Object.values(Theme).map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme.toLowerCase())}
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
