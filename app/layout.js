import { Manrope } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata = {
  // title: {
  //   template: "%s | Saity",
  //   default: "Saity",
  // },
  // description: "Your description here",
  title: "Saity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${manrope.className} bg-gray-50`}>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              minWidth: "300px",
              maxWidth: "500px",
              padding: "16px 24px",
              fontWeight: "bold",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
