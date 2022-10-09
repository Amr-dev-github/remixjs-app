import styles from "./QASection.css";

export function links() {
	return [
		{ rel: "stylesheet", href: styles },
	];
}

export function QASection() {
	return (
		<div className="QASection">
			<div className="QASectionHeader">
				<i />
				<p>سؤال وجواب</p>
			</div>
			<p className="QASectionBody">
				الانضباط هو اساس نجاح اي عمل او تحقيق اي هدف ويتم تحقيق مبادئ الضبط
				والربط عن طريق وضع مبادئ و اهداف ثابتة ومن المفضل ربطها بتوقيتات محددة
				علي شرط الا تتغير بتغير الظروف المحيطة
			</p>
		</div>
	);
}
