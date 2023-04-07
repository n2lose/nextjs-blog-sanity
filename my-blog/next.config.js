/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
	images: {
		// remotePatterns: [
		//   {
		// 	protocol: 'https',
		// 	hostname: 'example.com',
		// 	port: '',
		// 	pathname: '/account123/**',
		//   },
		// ],
		remotePatterns: [
			{ hostname: 'cdn.sanity.io' }
		  ],
	},
	typescript: {
	  // Set this to false if you want production builds to abort if there's type errors
	  ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
	},
	eslint: {
	  /// Set this to false if you want production builds to abort if there's lint errors
	  ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
	},
	experimental: { appDir: true },
	webpack(config) {
	  config.experiments = { ...config.experiments, topLevelAwait: true }
	  return config
	},
};

module.exports = nextConfig
