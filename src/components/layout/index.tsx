import { DM_Sans } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

const DMSans = DM_Sans({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${DMSans.className}`} style={{ position: "relative" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
