/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "saity.yallagai.site",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
