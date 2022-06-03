import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myList" element={<MyList />} />
        {/* <Route path="/" element={< />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
