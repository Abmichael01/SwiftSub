import { useSidebarStore } from '@/stores/sidebarStore'
import { useThemeStore } from '@/stores/themeStore'
import { Moon, Sun, SidebarClose, SidebarOpen } from 'lucide-react'
import React from 'react'

const Navbar: React.FC = () => {
  const { toggle, isOpen } = useSidebarStore()
  const { theme, setTheme } = useThemeStore()

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div onClick={toggle} className="cursor-pointer">
        {isOpen ? <SidebarClose /> : <SidebarOpen />}
      </div>
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon />}
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center rounded-full bg-primary text-white">
            U
          </div>
          <h1>Urkelcodes</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
