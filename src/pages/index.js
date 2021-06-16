import Layout from "@components/Layout";
import Post from '@components/Post.js'

import styles from '@modules/Home/Home.module.scss'
import RightBar from "@components/Home/RightBar";

export default function Home() {
  return (
    <Layout>
      <div className={`${styles.Container} relative`}>
        <div>
          <Post />
          <Post />
        </div>
        <RightBar />
      </div>
    </Layout>
  )
}
