import Post from "@components/Post.js";

import styles from "@modules/Home/Home.module.scss";
import RightBar from "@components/Home/RightBar";
import Stories from "@components/Home/Stories";

export default function Home() {
  return (
    <div className={`${styles.Container} relative`}>
      <div>
        <Stories />
        <Post />
        <Post />
      </div>
      <RightBar />
    </div>
  );
}
