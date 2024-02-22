import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Create } from "./create";
import { Update } from "./update";
import { Image } from "./image";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/image" element={<Image />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
