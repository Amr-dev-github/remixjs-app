import styles from "./visitorsNowSeeingSection.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const VisitorsNowSeeingSection = () => {
	return (
		<div className="VisitorsNowSeeingSection">
			<p className="VisitorsNowSeeingSectionHeader">الزوار يشاهدون الان</p>
			<div className="VisitorsNowSeeingSectionCards">
				<div className="VisitorsNowSeeingSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="VisitorsNowSeeingSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="VisitorsNowSeeingSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="VisitorsNowSeeingSectionCard">
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
