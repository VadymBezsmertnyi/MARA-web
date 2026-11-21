import React, { FunctionComponent } from "react";

// providers
import LocalesProvider from "@/localization/localization.provider";
import ApiProvider from "@/providers/ApiProvider/ApiProvider";

// components
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <LocalesProvider>
      <ApiProvider>
        <>
          <Header />
          <main>{children}</main>
        </>
      </ApiProvider>
    </LocalesProvider>
  );
};

export default Layout;
