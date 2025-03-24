let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Run ESLint during builds but don't fail on warnings
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'lib', 'hooks'], // Specify directories to lint
  },
  typescript: {
    // Run type checking during builds
    ignoreBuildErrors: false,
  },
  images: {
    // Enable image optimization
    unoptimized: false,
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com' // Add Cloudinary domain
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Optimize for common device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Common image sizes
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
