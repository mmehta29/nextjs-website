import { CartContextProvider } from "@/components/store/CartContext";
import "./globals.css";
import AuthProvider from "./profile/newauth-session-provider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style="stop-color:#3a4d7f; stop-opacity:1"
                />
                <stop
                  offset="100%"
                  style="stop-color:#0f67a1; stop-opacity:1"
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>

        </div> */}
        <CartContextProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </CartContextProvider>

      </body>
    </html>
  );
}
