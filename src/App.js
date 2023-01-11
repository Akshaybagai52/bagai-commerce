import "./styles.scss";
import "./categories.styles.scss";
import Home from "./components/routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Shop from "./components/routes/shop/Shop";
import SignIn from "./components/routes/signin/SignIn";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
