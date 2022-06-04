import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import MyList from "./pages/MyList";
import Movies from "./pages/Movies";

import NotFound from "./pages/NotFound";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/movie/:id" element={<Movies />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
