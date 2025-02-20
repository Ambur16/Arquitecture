import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./layout";

export const LayoutWrapper = () => {
  const location = useLocation();
  return (
    <Layout>
      <div className="h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full overflow-auto"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};
