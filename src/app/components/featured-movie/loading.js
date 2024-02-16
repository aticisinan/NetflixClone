import React from "react";
import Skeleton from "../skeleton/index";

import styles from "./styles.module.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Skeleton />
    </div>
  );
}

export { FeatureMovieLoading };
