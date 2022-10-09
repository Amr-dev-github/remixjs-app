import styles from "./introSection.css";

export function links() {
	return [
		// {
		// 	rel: "preload",
		// 	href: "/assets/images/pexels-8376099.jpg",
		// 	as: "image",
		// },
		{ rel: "stylesheet", href: styles },
	];
}

export function IntroSection() {
	return (
		<div className="IntroSection">
			<div className="IntroSectionToolBar">
				<div className="IntroSectionDiv">
					<div />
					<p>انضم لنا</p>
					<div />
				</div>
				<div className="IntroSectionnavLinks">
					<p className="IntroSectionlink">الرئيسية</p>
					<p className="IntroSectionlink">مقالات علمية</p>
					<p className="IntroSectionlink">كيف؟</p>
					<p className="IntroSectionlink">سؤال وجواب</p>
				</div>
				<div className="IntroSectionlogo" />
			</div>
			<p className="IntroSectiontext">مجرة بوابتك إلى العالم </p>
			<div className="IntroSectionSearchInput">
				<i className="IntroSectionsearchIcon" />
				<input type="text" placeholder="بحث عن موضوع" />
			</div>
		</div>
	);
}
