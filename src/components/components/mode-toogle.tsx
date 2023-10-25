import { Moon, Sun, Check } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/components/theme-provider"
 
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
 
  const classNamesFor = "flex justify-between items-center gap-2"
  const checkClasses = "text-primary"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={classNamesFor}>
          Light {theme === "light" && <Check className={checkClasses} />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={classNamesFor}>
          Dark {theme === "dark" && <Check className={checkClasses} />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={classNamesFor}>
          System {theme === "system" && <Check className={checkClasses} />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}