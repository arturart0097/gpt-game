import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesctopPage from "./pages/DesctopPage";
import OriginPage from "./pages/OriginPage";
import Layout from "./components/Layout";
import DetailPage from "./pages/DetailPage";
import { ScrollToTop } from "./components/ScrollToTop";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DesctopPage />} />
          <Route path="/origin" element={<OriginPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/fact/:id" element={<DetailPage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
