import { Route, Routes } from "react-router-dom";
import PageDetail from "./PageDetail";
import CheckOut from "./CheckOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<PageDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
