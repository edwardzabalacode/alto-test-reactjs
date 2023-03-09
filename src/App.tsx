import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientProvider from "./components/ClientProvider";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import DetailPost from "./pages/DetailPost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <React.Fragment>
      {/** Client provider **/}
      <ClientProvider />

      <div className="bg-background min-h-full h-full">
        <div className="w-[95%] mx-auto md:w-4/6">
          {/** Header Component **/}
          <Header />

          {/** Render Routes **/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<DetailPost />} />
            <Route path="/blog/:id/edit" element={<EditPost />} />
            <Route path="/blog/create" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
