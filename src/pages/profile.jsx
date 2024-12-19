import { Navbar } from "../components/Elements/NavigationBar";
import Footer from "../components/Elements/Footer";
import { ProfileProvider } from "../context/ProfileContext";
import Profile from "../components/Elements/Profile";
import { getUser } from "../services/apiservice"; 
import { useEffect, useState } from "react";
const ProfilePage = () => {
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
        <Profile />
      </ProfileProvider>
      <Footer />
    </div>
  );
};

export default ProfilePage;
