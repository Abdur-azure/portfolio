module.exports = {
    // output: 'export',
    images: {
      eslint: { ignoreDuringBuilds: true },
      domains: ["cdn.hashnode.com"],
      remotePatterns: [{
        protocol: 'https',
        hostname: 'onedrive.live.com',
        port: '',
      }]
    },
    reactStrictMode: true,    
  };
