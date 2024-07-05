import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlusCircle, ListOrdered } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index";
import AddTransaction from "./pages/AddTransaction";
import ViewTransactions from "./pages/ViewTransactions";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Add Transaction",
    to: "/add",
    icon: <PlusCircle className="h-4 w-4" />,
  },
  {
    title: "View Transactions",
    to: "/view",
    icon: <ListOrdered className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="add" element={<AddTransaction />} />
              <Route path="view" element={<ViewTransactions />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;