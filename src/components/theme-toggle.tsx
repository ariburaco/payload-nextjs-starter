"use client";

import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full p-2 transition-colors dark:hover:bg-gray-800 dark:hover:text-gray-100"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

export { ModeToggle, ThemeProvider };
