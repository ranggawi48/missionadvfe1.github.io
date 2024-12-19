import { useLayoutEffect } from "react";
import ProfileTitle from "./ProfileTitle";
import ProfilePicture from "./ProfilePicture";
import PremiumAccountInfo from "./PremiumAccountInfo";
import FromProfile from "../../Fragments/FormProfile";
import SectionHeader from "../Movie/SectionHeader";
import MoviePlaylist from "../Movie/MoviePlaylist";

const Profile = () => {
  useLayoutEffect(() => {
    const reorderElements = () => {
      const profileSection = document.getElementById("profile-section");
      const premiumSection = document.getElementById("premium-section");
      const profileTitle = document.getElementById("profile-title");

      if (window.innerWidth < 768) {
        if (
          premiumSection &&
          profileSection &&
          !premiumSection.contains(profileSection)
        ) {
          profileSection.parentNode.insertBefore(
            premiumSection,
            profileSection
          );
        }
        if (
          profileTitle &&
          premiumSection &&
          !premiumSection.contains(profileTitle)
        ) {
          premiumSection.parentNode.insertBefore(
            profileTitle,
            premiumSection.nextSibling
          );
        }
      } else {
        if (
          premiumSection &&
          profileSection &&
          !profileSection.contains(premiumSection)
        ) {
          profileSection.parentNode.insertBefore(
            profileSection,
            premiumSection
          );
        }
        if (
          profileTitle &&
          profileSection &&
          !profileSection.contains(profileTitle)
        ) {
          profileSection.parentNode.insertBefore(profileTitle, profileSection);
        }
      }
    };

    reorderElements();
    window.addEventListener("resize", reorderElements);

    return () => {
      window.removeEventListener("resize", reorderElements);
    };
  }, []);

  return (
    <div className="w-full bg-background px-5 md:px-20 flex flex-col gap-8">
      <div id="profile-title">
        <ProfileTitle />
      </div>
      <div className="flex flex-col md:flex-row gap-16" id="profile-section">
        <div className="flex-1 flex flex-col gap-4">
          <ProfilePicture />
          <FromProfile className="w-full" />
        </div>
        <div className="flex-1 max-w-full" id="premium-section">
          <PremiumAccountInfo className="w-full" />
        </div>
      </div>
      <section className="relative py-5 md:py-10 lg:py-20 flex-col mt-[-5%]">
        <SectionHeader>Daftar Saya</SectionHeader>
        <MoviePlaylist />
      </section>
    </div>
  );
};

export default Profile;
