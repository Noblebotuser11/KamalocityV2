
import { TooltipProvider } from "@/components/ui/tooltip";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Service sub-pages
import HookahLounge from "./pages/services/HookahLounge";
import PrivateBookings from "./pages/services/PrivateBookings";
import LiveEntertainment from "./pages/services/LiveEntertainment";
import PreOrderFood from "./pages/services/PreOrderFood";
import Perfumes from "./pages/services/Perfumes";
import BarberNextDoor from "./pages/services/BarberNextDoor";
import GameNights from "./pages/services/GameNights";

// Menu sub-pages
import DailySpecials from "./pages/menu/DailySpecials";
import VegetableSides from "./pages/menu/VegetableSides";
import Sides from "./pages/menu/Sides";

// Gallery sub-pages
import RestaurantAmbiance from "./pages/gallery/RestaurantAmbiance";
import FoodAndDrinks from "./pages/gallery/FoodAndDrinks";
import EventsAndEntertainment from "./pages/gallery/EventsAndEntertainment";
import ServicesGallery from "./pages/gallery/ServicesGallery";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/daily-specials" element={<DailySpecials />} />
          <Route path="/menu/vegetable-sides" element={<VegetableSides />} />
          <Route path="/menu/sides" element={<Sides />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hookah-lounge" element={<HookahLounge />} />
          <Route path="/services/private-bookings" element={<PrivateBookings />} />
          <Route path="/services/live-entertainment" element={<LiveEntertainment />} />
          <Route path="/services/pre-order-food" element={<PreOrderFood />} />
          <Route path="/services/perfumes" element={<Perfumes />} />
          <Route path="/services/barber-next-door" element={<BarberNextDoor />} />
          <Route path="/services/game-nights" element={<GameNights />} />
          <Route path="/gallery/restaurant-ambiance" element={<RestaurantAmbiance />} />
          <Route path="/gallery/food-and-drinks" element={<FoodAndDrinks />} />
          <Route path="/gallery/events-and-entertainment" element={<EventsAndEntertainment />} />
          <Route path="/gallery/services" element={<ServicesGallery />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
