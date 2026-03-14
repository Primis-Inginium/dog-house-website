import {notFound} from 'next/navigation';
import {useLocale} from 'next-intl';
 
export default function RootLayout({children, params}: {children: React.ReactNode, params: {locale: string}}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
