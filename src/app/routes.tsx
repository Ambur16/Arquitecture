import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "~/features/login/components";
import { AuthLayout, LayoutWrapper }  from "~/shared/layouts";
import { HomePage, CharacterPage, LocationPage } from "~/pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />

      <Route element={<LayoutWrapper />}>
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/Characters" element={<CharacterPage />} />
        <Route path="/Locations" element={<LocationPage />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
