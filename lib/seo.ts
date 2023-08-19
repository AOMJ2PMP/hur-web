export const seo = {
  title: 'ENGCMP0200 | AI-empowered English Composition Course',
  description:
    'An AI-assisted academic English Composition course tailored for sophomore students in SCUPI',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
