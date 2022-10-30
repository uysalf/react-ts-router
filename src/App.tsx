import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";

import Navbar from "./components/Navbar";
import OrderSummary from "./pages/OrderSummary";
import NoMatch from "./pages/NoMatch";
import Products from "./pages/Products";
import FeatureProducts from "./components/FeatureProducts";
import NewProducts from "./components/NewProducts";
import Users from "./pages/Users";
import UserDetails from "./components/UserDetails";
import { Admin } from "./pages/Admin";
import Profile from "./pages/authentication/Profile";
import { AuthProvider } from "./pages/authentication/auth";
import Login from "./pages/authentication/Login";
import RequireAuth from "./pages/authentication/RequireAuth";
const LazyAbout = React.lazy(() => import("./pages/About"));
function App(props: any) {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="/order-summary" element={<OrderSummary />}></Route>
          <Route path="/products" element={<Products />}>
            <Route index element={<FeatureProducts />} />
            <Route path="featured" element={<FeatureProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>

          {/* <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<UserDetails />}></Route> */}

          <Route path="/users" element={<Users {...props} />}>
            <Route path=":userId" element={<UserDetails />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
