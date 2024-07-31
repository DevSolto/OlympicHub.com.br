/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outras configurações do Next.js podem ser adicionadas aqui
  reactStrictMode: true, // Exemplo de outra configuração
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://apis.codante.io/:path*',
      },
    ];
  },
};

export default nextConfig;
