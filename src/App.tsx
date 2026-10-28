import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanYourTripPage from "./pages/PlanYourTripPage";
import AgendaPage from "./pages/AgendaPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import GiftRegistryPage from "./pages/GiftRegistryPage";
import RSVPPage from "./pages/RSVPPage";
import QAPage from "./pages/QAPage";
import HostPage from "./pages/HostPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/rsvp" element={<RSVPPage />} />
          <Route path="/gift-registry" element={<GiftRegistryPage />} />
          <Route path="/qa" element={<QAPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/plan-your-trip" element={<PlanYourTripPage />} />
          <Route path="/host" element={<HostPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
