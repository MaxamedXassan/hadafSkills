import './globals.css';

export const metadata = {
  title: 'HadafSkills | Xirfad baro. Mustaqbal dhiso.',
  description:
    'Ku tababar xirfadaha suuqa looga baahan yahay HadafSkills. Koorsooyin Mobile Repairing, Solar, Graphic Design, iyo Barista oo leh tababar gacanta ah.',
  applicationName: 'HadafSkills',
  icons: {
    icon: '/logo.jpeg',
  },
  openGraph: {
    title: 'HadafSkills | Xirfad baro. Mustaqbal dhiso.',
    description:
      'Baro xirfad suuqa looga baahan yahay, hel tababar dhab ah, una diyaargarow mustaqbal wanaagsan.',
    locale: 'so_SO',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="so">
      <body>{children}</body>
    </html>
  );
}
