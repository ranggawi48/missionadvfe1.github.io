import MovieContinue from "./MovieContinue";
import MovieTop from "./MovieTop";
import MovieNewReleases from "./MovieNewReleases";
import MovieTrending from "./MovieTrending";
import SectionHeader from "./SectionHeader";

const Movie = () => {
  return (
    <>
      <section className="relative p-5 md:p-10 lg:p-20 flex flex-col">
        <SectionHeader>Melanjutkan Tonton Film</SectionHeader>
        <MovieContinue />
      </section>
      <section className="relative p-5 md:p-10 lg:p-20 flex-col mt-[-6%] md:mt-[-8%] lg:mt-[-6%]">
        <SectionHeader>Top Rating Film dan Series Hari ini</SectionHeader>
        <MovieTop />
      </section>
      <section className="relative p-5 md:p-10 lg:p-20 flex-col mt-[-6%] md:mt-[-8%] lg:mt-[-6%]">
        <SectionHeader>Film Trending</SectionHeader>
        <MovieTrending />
      </section>
      <section className="relative p-5 md:p-10 lg:p-20 flex-col mt-[-6%] md:mt-[-8%] lg:mt-[-6%]">
        <SectionHeader>Rilis Baru</SectionHeader>
        <MovieNewReleases />
      </section>
    </>
  );
};

export default Movie;
