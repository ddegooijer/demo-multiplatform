import { ReactNode } from "react";
import RootLayout from "../../layout";
import { routes } from "../../../utils/data";
import Link from "next/link";

const getRoutes = (site: string) => {
  return Object.values(routes).filter((route) => route.site === site);
};

const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { site: string };
}) => {
  const routes = getRoutes(params.site);

  return (
    <RootLayout>
      {routes.map((route) => (
        <Link href={route.slug}>{route.title}</Link>
      ))}
      {children}
    </RootLayout>
  );
};

export default Layout;
