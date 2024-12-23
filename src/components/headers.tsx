"use client";
import { Moon, Sun, /* Youtube, */ Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Headers() {
  const { setTheme, theme } = useTheme();

  const onChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/40 dark:border-border">
      <div className="flex py-2 justify-end mx-1 items-center">
        <h2 className="select-none font-bold text-2xl mr-1">Telio.s</h2>
        {/* <Button variant="ghost" size="icon"> */}
        {/*   <Youtube */}
        {/*     style={{ height: "24px", width: "24px" }} */}
        {/*     className="rotate-0 scale-100 transition-all" */}
        {/*   /> */}
        {/* </Button> */}
        <Button
          onClick={() => window.open("https://github.com/telio-s")}
          variant="ghost"
          size="icon"
          className="bg-white dark:bg-black "
        >
          <div className="relative overflow-hidden">
            <Github
              style={{ height: "24px", width: "24px", fill: "transparent" }}
              className="rotate-0 scale-100 transition-all "
            />
            <div className="github-icon-text-gradient-animate mix-blend-screen dark:mix-blend-multiply"></div>
          </div>
        </Button>
        <Button onClick={onChangeTheme} variant="ghost" size="icon">
          <Sun
            style={{ height: "24px", width: "24px", fill: "transparent" }}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            style={{ height: "24px", width: "24px" }}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}
