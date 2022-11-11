import { useRouter } from "next/router";

import MainLayout from "src/layouts/MainLayout";
import AuthLayout from "src/layouts/AuthLayout";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  if (pathname === "/login" || pathname === "/register") {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
