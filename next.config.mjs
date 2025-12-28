/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
          { protocol: 'https', hostname: 'plus.unsplash.com' }, 

    ],
  },
  reactCompiler: true,
};

export default nextConfig;
