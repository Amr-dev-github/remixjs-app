import styles from "./mostSearchedSection.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const MostSearchedSection = () => {
	return (
		<div className="mostSearchedSection">
			<p className="mostSearchedSectionHeader">الأكثر بحثا</p>
			<div className="mostSearchedSectionCards">
				<div className="mostSearchedSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="mostSearchedSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="mostSearchedSectionCard">
					<p>
						الحماية من انتقال السارس- CoV-2 عن طريق الحقن الأولي- إستراتيجية
						لقاح معزز داخل الأنف
					</p>
					<p>الكمياء</p>
				</div>
				<div className="mostSearchedSectionCard">
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
