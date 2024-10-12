import { formatTime } from "@src/utils/formatTime";
import styles from "./FilmInformation.module.scss";
import Button from "@src/components/Button/Button";

interface FilmInformationProps {
  title: string;
  titleImage: string;
  category: string;
  releaseYear: string;
  mpaRating: string;
  duration: number;
  description: string;
}

export const FilmInformation: React.FC<FilmInformationProps> = ({
  title,
  titleImage,
  category,
  releaseYear,
  mpaRating,
  duration,
  description,
}) => {
  return (
    <div className={styles.videoContent}>
      <h3 className={`unnamed-character-style-6 ${styles.title}`}>{title}</h3>
      <div className={styles.coverImage}>
        <img
          className="cover-image"
          src={`assets/${titleImage}`}
          alt={category}
        />
      </div>

      <div className={styles.videoInfo}>
        <div className={styles.metaInfo}>
          <span className="unnamed-character-style-7">{releaseYear}</span>
          <span className="unnamed-character-style-7">{mpaRating}</span>
          <span className="unnamed-character-style-7">
            {formatTime(duration)}
          </span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.actions}>
        <Button className={styles.play}>Play</Button>
        <Button className={styles.info}>More Info</Button>
      </div>
    </div>
  );
};
