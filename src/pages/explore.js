import Post from "@components/Explore/Post";

import styles from "@modules/Explore/Post.module.scss";

const explore = () => {
  const fakePostData = [
    {
      id: 1,
      like: 23,
      comment: 1,
    },
    {
      id: 2,
      like: 65,
      comment: 5,
    },
    {
      id: 3,
      like: 244,
      comment: 3,
    },
    {
      id: 4,
      like: 125,
      comment: 7,
    },
    {
      id: 5,
      like: 986,
      comment: 25,
    },
    {
      id: 6,
      like: 757,
      comment: 42,
    },
    {
      id: 7,
      like: 7,
      comment: 1,
    },
    {
      id: 8,
      like: 34,
      comment: 6,
    },
    {
      id: 9,
      like: 64,
      comment: 2,
    },
  ];

  return (
    <div className={styles.Posts}>
      {fakePostData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default explore;
