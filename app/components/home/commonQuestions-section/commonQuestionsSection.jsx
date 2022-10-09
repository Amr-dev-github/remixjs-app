import styles from "./commonQuestionsSection.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const CommonQuestionsSection = () => {
	return (
		<div className="commonQuestionsSection">
			<p className="commonQuestionsSectionHeader">الاسئلة الشائعه</p>
			<div className="commonQuestionsSectionCards">
				<div className="commonQuestionsSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="commonQuestionsSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="commonQuestionsSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="commonQuestionsSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
			</div>
		</div>
	);
};
