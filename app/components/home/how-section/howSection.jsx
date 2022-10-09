import styles from "./howSection.css";

export function links() {
	return [
		{ rel: "stylesheet", href: styles },
	];
}

export function HowSection() {
	return (
		<div className="HowSection">
			<div className="HowSectionHeader">
				<i />
				<p>كيف؟</p>
			</div>
			<p className="HowSectionBody">
				الانضباط هو اساس نجاح اي عمل او تحقيق اي هدف ويتم تحقيق مبادئ الضبط
				والربط عن طريق وضع مبادئ و اهداف ثابتة ومن المفضل ربطها بتوقيتات محددة
				علي شرط الا تتغير بتغير الظروف المحيطة
			</p>
		</div>
	);
}
