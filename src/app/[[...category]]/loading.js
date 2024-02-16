import React from "react";
import { CategoriesLoading } from "../components/categories";
import { FeatureMovieLoading } from "../components/featured-movie";

function HomeLoading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
    </div>
  );
}

export default HomeLoading;
