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

const Home = React.lazy(() => import("@/pages/home/views/list/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/ge" />} />
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
  );
};

export default App;
