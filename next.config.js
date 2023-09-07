/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ca', 'es'],
    defaultLocale: 'ca',
  },
  // async redirects() {
  //   return [
  //     {
  //       source:      '/',
  //       destination: '/ca',
  //       permanent:   true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
