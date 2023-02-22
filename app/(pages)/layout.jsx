import Header from "components/Header";
import { getMenus } from "lib/menus";
import { getSocials } from "lib/socialLinks";
import { getWebInfo } from "lib/webinfo";
import Script from "next/script";

export default async function RootLayout({ children }) {

  return (
    <main>
      {children}
    </main>
  );
}
