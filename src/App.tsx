import ListingLayout from "./components/ListingPage";
import DetailsLayout from "./components/DetailsLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingLayout />}></Route>
        <Route path="/details" element={<DetailsLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
