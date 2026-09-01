import { motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ExplorerSection } from "./components/ExplorerSection";
import { FutureDetailPage } from "./components/FutureDetailPage";
import { HowToReadPage } from "./components/HowToReadPage";

const editorialEase = [0.16, 1, 0.3, 1] as const;

function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: editorialEase }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-paper">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <ExplorerSection />
            </PageTransition>
          }
        />
        <Route
          path="/futures/:slug"
          element={
            <PageTransition>
              <FutureDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/how-to-read"
          element={
            <PageTransition>
              <HowToReadPage />
            </PageTransition>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
