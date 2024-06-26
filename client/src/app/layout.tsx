import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	title: "Next Blog App",
	description: "Generated by create next app",
};
const routes = [
	{ id: 1, name: "Posts", href: "/posts" },
	{ id: 2, name: "Users", href: "/users" },
	{ id: 3, name: "Todos", href: "/todos" },
];
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`min-h-screen flex flex-col ${inter.className}`}>
				<div className="flex min-h-12 justify-center bg-indigo-600 text-white">
					<div className="container flex items-center justify-between">
						<span className="text-xl font-bold flex h-full justify-center items-center cursor-pointer">
							<Link href="/">Blog App</Link>
						</span>
						<ul className="flex h-full items-center justify-center gap-x-8 p-0">
							{routes.map((route) => (
								<li
									className="cursor-pointer flex items-center justify-center font-semibold hover:text-sky-300 hover:rounded-md flex-1"
									key={route.id}
								>
									<Link href={route.href}>{route.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={`flex flex-col flex-1 items-center bg-slate-300`}>
					<div className="container flex flex-1 flex-col pb-4">{children}</div>
				</div>
			</body>
		</html>
	);
}
