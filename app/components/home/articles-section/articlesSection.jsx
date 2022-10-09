import styles from "./articlesSection.css";

export function links() {
	return [
		{ rel: "stylesheet", href: styles },
	];
}

export function ArticlesSection() {
	return (
		<div className="ArticlesSection">
			<div className="ArticlesSectionHeader">
				<i />
				<p>مقالات علمية</p>
			</div>
			<p className="ArticlesSectionBody">
				الانضباط هو اساس نجاح اي عمل او تحقيق اي هدف ويتم تحقيق مبادئ الضبط
				والربط عن طريق وضع مبادئ و اهداف ثابتة ومن المفضل ربطها بتوقيتات محددة
				علي شرط الا تتغير بتغير الظروف المحيطة
			</p>
		</div>
	);
}
