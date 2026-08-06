import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Sampson Boateng — Data Analyst",description:"Data analyst and machine learning practitioner turning complex data into clear direction.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
