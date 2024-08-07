import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Contacts } from "./pages/Contact/Contact";
import { Home } from "./components/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="aboutme" element={<h2>aboutme</h2>} />
      <Route path="project" element={<h2>project</h2>} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
  )
);
