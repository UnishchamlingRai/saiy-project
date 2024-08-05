/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saity.yallagai.site",
        port: "",
        pathname: "/image/**", // Corrected the pathname pattern
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
