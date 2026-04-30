import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/store/AppStore";
import { RequireAdmin } from "@/components/auth/RequireAdmin";

import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import SupplierProfile from "./pages/SupplierProfile";

import ResidentDashboard from "./pages/resident/ResidentDashboard";
import ProjectsList from "./pages/resident/ProjectsList";
import CategoriesList from "./pages/resident/CategoriesList";
import DealsList from "./pages/resident/DealsList";
import CategorySuppliers from "./pages/resident/CategorySuppliers";
import DealDetail from "./pages/resident/DealDetail";
import ResidentProfile from "./pages/resident/ResidentProfile";
import ResidentProfileEdit from "./pages/resident/ResidentProfileEdit";
import Notifications from "./pages/resident/Notifications";
import MyOffers from "./pages/resident/MyOffers";

import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupplierProfileEdit from "./pages/supplier/SupplierProfileEdit";
import SupplierOffers from "./pages/supplier/SupplierOffers";
import OfferEditor from "./pages/supplier/OfferEditor";
import SupplierLeads from "./pages/supplier/SupplierLeads";
import SupplierReviews from "./pages/supplier/SupplierReviews";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminSuppliers from "./pages/admin/AdminSuppliers";
import AdminResidents from "./pages/admin/AdminResidents";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminDeals from "./pages/admin/AdminDeals";
import AdminDeposits from "./pages/admin/AdminDeposits";
import AdminStats from "./pages/admin/AdminStats";
import AdminPaymentSettings from "./pages/admin/AdminPaymentSettings";
import AdminRegions from "./pages/admin/AdminRegions";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminSupplierAreas from "./pages/admin/AdminSupplierAreas";
import AdminSupplierMedia from "./pages/admin/AdminSupplierMedia";
import AdminDbSuppliers from "./pages/admin/AdminDbSuppliers";

import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentCancel from "./pages/payment/PaymentCancel";

const queryClient = new QueryClient();

const adminRoute = (el: React.ReactNode) => <RequireAdmin>{el}</RequireAdmin>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" dir="rtl" />
        <BrowserRouter>
