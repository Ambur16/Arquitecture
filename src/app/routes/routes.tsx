import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "~/pages/login/login";
import AuthLayout from "~/shared/layouts/auth-layout";
import Layout from "~/shared/layouts/layout";
import Home from "~/pages/home/home";
import Products from "~/pages/products/products";
import Calendar from "~/pages/calendar/calendar";
import Place from "~/pages/place/place";

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>}/>

      <Route element={<LayoutWrapper />}>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/place" element={<Place />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;