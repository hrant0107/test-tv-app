import Button from "../Button/Button";
import styles from "./AssideSettings.module.scss";

const AssideSettings = () => {
  return (
    <div className={styles.assideSettings}>
      <Button className={`${styles.noBackground} unnamed-character-style-6`}>
        LANGUAGE
      </Button>
      <Button className={`${styles.noBackground} unnamed-character-style-6`}>
        GET HELP
      </Button>
      <Button className={`${styles.noBackground} unnamed-character-style-6`}>
        EXIT
      </Button>
    </div>
  );
};

export default AssideSettings;
