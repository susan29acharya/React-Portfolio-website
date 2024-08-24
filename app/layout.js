import { Inter } from "next/font/google";
import "./Component/Nav.css"
import "./Home/home.css"
import "./About/About.css"
import "./Contact/Contact.css"
import "./Skills/Skills.css"
import "./projec/project.css"
import "./Component/Card.css"
import "./Copyright/Copy.css"
import "./Component/project.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}