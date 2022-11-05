import Navbar from "src/components/Navbar";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="container mt-90">{children}</div>
  </>
);

export default MainLayout;
