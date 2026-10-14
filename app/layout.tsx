import type { Metadata, Viewport } from 'next';
export const metadata: Metadata = {title:'Moje leki',description:'Przypomnienia o lekach i suplementach',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,title:'Moje leki'}};
export const viewport: Viewport = {themeColor:'#172b46',width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body style={{margin:0,background:'#eef3f8',fontFamily:'system-ui,Arial'}}>{children}</body></html>}