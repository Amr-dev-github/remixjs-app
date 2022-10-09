import styles from "./commonAnswersSection.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const CommonAnswersSection = () => {
	return (
		<div className="commonAnswersSection">
			<p className="commonAnswersSectionHeader">اشهر الاجابات</p>
			<div className="commonAnswersSectionCard"></div>
			<div className="commonAnswersSectionCard"></div>
			<button className="commonAnswersSectionButton">
				<i />
				عرض المزيد
			</button>
		</div>
	);
};
