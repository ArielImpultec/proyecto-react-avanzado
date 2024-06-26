import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Proyecto React Avanzado",
    description: "Curso de React Avanzado"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
