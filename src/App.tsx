
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Submissions from "./pages/Submissions";
import Applications from "./pages/Applications";
import GalleryForms from "./pages/GalleryForms";
import GalleryDetails from "./pages/GalleryDetails";
import ChooseBooth from "./pages/ChooseBooth";
import Payment from "./pages/Payment";
import Curatorial from "./pages/Curatorial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/gallery-forms" element={<GalleryForms />} />
          <Route path="/gallery-details" element={<GalleryDetails />} />
          <Route path="/choose-booth" element={<ChooseBooth />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/curatorial" element={<Curatorial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
