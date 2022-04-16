import { createRoot } from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
// import your route components too
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/rooms/new" element={<App />} />
          <Route index element={<NewRoom />} />
        </Route>
    </Routes>
  </BrowserRouter>,
);