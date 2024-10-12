import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}></div>
      <p className="unnamed-character-style-4">Daniel</p>
    </div>
  );
};

export default Avatar;
