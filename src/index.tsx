import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
// import your route components too


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/rooms/new" element={<App />} />
          <Route index element={<NewRoom />} />
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);