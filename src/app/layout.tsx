import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import SessionWrapper from '@/components/SessionWrapper'
import { CartProvider } from '@/context/cart'

const inter = Poppins({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
    variable: '--font-poppins',
})

const roboto = Roboto({
    subsets: ['latin'],

    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto',
})
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${inter.variable} ${roboto.variable}`}
            >
                <CartProvider>
                    <AntdRegistry>
                        {' '}
                        <SessionWrapper>{children}</SessionWrapper>
                    </AntdRegistry>
                </CartProvider>
            </body>
        </html>
    )
}
