import './globals.css'
import '@mcsam/ui/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "McSam's Template",
	description: "Boilerplate for McSam's projects",
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
