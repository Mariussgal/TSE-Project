/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [],
    },
    sassOptions: {
      includePaths: ['./components'],
    },
  }
  
  export default nextConfig;