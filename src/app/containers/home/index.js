import React from "react";
import { FeaturedMovie } from "../../components/featured-movie";
import { Categories } from "../../components/categories";
import { MoviesSection } from "../../components/movies-section";

function HomeContainer({
  PopularMovies = [],
  topRatedMovies = [],
  selectedCategory,
  categories = [],
}) {
  return (
    <div>
      <FeaturedMovie movie={PopularMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />

      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((movie) => `${movie.id}` == selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Popular Films"
        movies={PopularMovies.slice(1, 11)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={topRatedMovies.slice(11, 20)}
      />
    </div>
  );
}

export default HomeContainer;
