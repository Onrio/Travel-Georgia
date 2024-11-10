import Layout from "@/Layout/default/layout";
import "@/style/index.module.css";
import About from "./pages/about/views";
import Error404 from "./pages/error-404/error-404";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import CountryView from "@/pages/home/views/country-article/country-article";
import Contact from "./pages/contact";
import LangGuard from "./components/Guards/lang-guard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = React.lazy(() => import("@/pages/home/views/list/index"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="" element={<Navigate to="/en" />} />
          <Route path=":lang" element={<LangGuard />}>
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route path="country-view/:id" element={<CountryView />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
