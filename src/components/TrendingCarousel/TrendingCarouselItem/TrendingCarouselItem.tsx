import React from "react";
import Button from "@src/components/Button/Button";

import styles from "./TrendingCarouselItem.module.scss";

type TrendingCarouselItemProps = {
  title: string;
  img: string;
  onClick: () => void;
};

export const TrendingCarouselItem: React.FC<TrendingCarouselItemProps> = ({
  title,
  img,
  onClick,
}) => {
  return (
    <Button className={styles.card} onClick={onClick}>
      <img src={`assets/${img}`} alt={title} />
    </Button>
  );
};
