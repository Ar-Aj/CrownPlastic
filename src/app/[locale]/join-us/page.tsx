import type { Metadata } from 'next';
import JoinUsClient from './JoinUsClient';

export const metadata: Metadata = {
  title: 'Join Us - Careers at Crown Plastic Pipes',
  description:
    'Explore career opportunities at Crown Plastic Pipes. Join our team of industry professionals and help build the future of plastic piping systems in the UAE and GCC.',
  openGraph: {
    title: 'Join Us - Careers at Crown Plastic Pipes',
    description:
      'Explore career opportunities at Crown Plastic Pipes. Join our team of industry professionals and help build the future of plastic piping systems in the UAE and GCC.',
    url: 'https://crownplasticuae.com/join-us',
    siteName: 'Crown Plastic Pipes',
    type: 'website',
  },
  alternates: { canonical: 'https://crownplasticuae.com/join-us' },
};

export default function JoinUsPage() {
  return <JoinUsClient />;
}
