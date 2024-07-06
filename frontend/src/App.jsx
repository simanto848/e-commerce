import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import summaryApi from "./common/index";
import Context from "./context";

export default function App() {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(summaryApi.current_user.url, {
      method: summaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    setUser(dataApi.user);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          user, // User details state
          fetchUserDetails, // User details fetch
        }}
      >
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-100px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}
