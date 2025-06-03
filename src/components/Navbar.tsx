import { Instagram, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-all duration-300 ${isSticky ? 'navbar-sticky' : 'absolute'} top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4`}>
      <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
        KAMALO CITY
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white hover:text-kamalo-red transition-colors">
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-white hover:text-kamalo-red transition-colors focus:outline-none">
            Services
            <ChevronDown className="ml-1 w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/95 border-gray-800 mt-2">
            {/* Services menu items */}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Other menu items */}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button className="text-white p-2 hover:text-kamalo-red transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-kamalo-dark border-gray-800">
            {/* Mobile menu content */}
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;