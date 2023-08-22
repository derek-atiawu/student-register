import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/home_page/Home";
import FormPage from "../pages/form_page/FormPage";
import NavBar from "../components/navbars/Navbar";
import Payment from "../pages/paymentfolder/Payment";
import Maps from "../pages/maps/Maps";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/*" element={<FormPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
      <main>
        <Outlet />
      </main>
    </BrowserRouter>
  );
}

export default Router;
