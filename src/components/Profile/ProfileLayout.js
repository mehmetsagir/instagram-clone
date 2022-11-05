import Header from "@components/Profile/Header";

export default function Home({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
