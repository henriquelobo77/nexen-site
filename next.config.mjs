/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Página descontinuada: preserva os links já indexados.
      {
        source: '/nexen-beauty',
        destination: '/',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
