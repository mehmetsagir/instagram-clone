import Layout from "@components/Layout"
import Header from '@components/Profile/Header'

export default function Home({children}) {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  )
}
