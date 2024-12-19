import { useEffect, useState } from "react";
import { Navbar } from "../components/Elements/NavigationBar";
import Banner from "../components/Elements/Banner";
import Movie from "../components/Elements/Movie";
import Footer from "../components/Elements/Footer";
import { ProfileProvider } from "../context/ProfileContext";
import { getUser } from "../services/apiservice";

const HomePage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      getUser(userId)
        .then((res) => {
          setUsername(res.username || "Guest");
        })
        .catch(() => {
          localStorage.removeItem("userId");
          window.location.href = "/";
        });
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="h-screen bg-background overflow-auto md:overflow-auto">
      <ProfileProvider>
        <Navbar username={username} />
      </ProfileProvider>
      <Banner />
      <Movie />
      <Footer />
    </div>
  );
};

export default HomePage;
