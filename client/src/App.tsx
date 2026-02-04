import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { toast } from "sonner";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Get visitor data from localStorage
    const storedName = localStorage.getItem("visitorName");
    const visitCount = parseInt(localStorage.getItem("visitCount") || "0");
    
    // Always increment visit count
    const newVisitCount = visitCount + 1;
    localStorage.setItem("visitCount", newVisitCount.toString());

    // Prompt for name if not stored
    let name = storedName;
    if (!name) {
      name = prompt("Welcome! Please enter your name:");
      if (name) {
        localStorage.setItem("visitorName", name);
      } else {
        name = "Guest";
      }
    }

    // Greet the user
    toast(`Hello ${name}!`, {
      description: `You have visited this project ${newVisitCount} ${newVisitCount === 1 ? 'time' : 'times'}.`,
      duration: 5000,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
