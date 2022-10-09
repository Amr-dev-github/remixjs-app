import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import React, { useEffect } from "react";
import { parseCookie } from "@utils/index.js";
import { initialization } from "@config/services/index.js";

export function links() {
	return [
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
		},
		{
			href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap",
			rel: "stylesheet",
		},
	];
}

export default function App() {
	initialization();

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export const loader = ({ request }) => {
	const cookieHeader = request.headers.get("Cookie");
	const Cookies = cookieHeader ? parseCookie(cookieHeader) : null;
	return {
		Cookies,
	};
};
export const meta = () => ({
	charset: "utf-8",
	title: "Pure Project",
	viewport: "width=device-width,initial-scale=1",
});
