import styles from "./footer.css";

export function links() {
	return [
		{ rel: "stylesheet", href: styles },
	];
}

export function Footer() {
	return (
		<div className="footer">
			<div className="footerlogo" />
			<p>جميع الحقوق محفوظه © مجره 2022 </p>
		</div>
	);
}
