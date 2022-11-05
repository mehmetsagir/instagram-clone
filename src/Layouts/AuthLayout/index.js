import styles from "./AuthLayout.module.scss";

import Footer from "@components/Auth/Footer";

const AuthLayout = ({ children }) => {
  return (
    <section className={styles.Layout}>
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default AuthLayout;
