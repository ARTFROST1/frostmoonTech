import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PS3Guide from "./pages/PS3Guide";
import PS4Guide from "./pages/PS4Guide";
import OpenDay from "./pages/OpenDay";
import Presentation from "./pages/Presentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<OpenDay />} />
          <Route path="/home" element={<Index />} />
          <Route path="/ps3-guide" element={<PS3Guide />} />
          <Route path="/ps4-guide" element={<PS4Guide />} />
          <Route path="/open-day" element={<OpenDay />} />
          <Route path="/presentation" element={<Presentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
