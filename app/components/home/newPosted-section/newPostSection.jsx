import styles from "./newPostSection.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const NewPostSection = () => {
	return (
		<div className="NewPostSection">
			<p className="NewPostSectionHeader">نشرت حديثا</p>
			<div className="NewPostSectionCards">
				<div className="NewPostSectionCard">
					<div className="NewPostSectionCardImage" />
					<div className="NewPostSectionCardBody">
						<p className="NewPostSectionCardBodyTitle">قسم التاريخ</p>
						<p className="NewPostSectionCardBodyText">
							لماذا يتجه العالم نحو الاستثمار في الإيثريوم؟
						</p>
					</div>
					<div className="NewPostSectionCardFooter">
						<p className="NewPostSectionCardFooterText1">بواسطة: احمد حاتم</p>
						<p className="NewPostSectionCardFooterText2">منذ 1 يوم </p>
					</div>
				</div>
				<div className="NewPostSectionCard">
					<div className="NewPostSectionCardImage" />
					<div className="NewPostSectionCardBody">
						<p className="NewPostSectionCardBodyTitle">قسم التاريخ</p>
						<p className="NewPostSectionCardBodyText">
							لماذا يتجه العالم نحو الاستثمار في الإيثريوم؟
						</p>
					</div>
					<div className="NewPostSectionCardFooter">
						<p className="NewPostSectionCardFooterText1">بواسطة: احمد حاتم</p>
						<p className="NewPostSectionCardFooterText2">منذ 2 يوم </p>
					</div>
				</div>
				<div className="NewPostSectionCard">
					<div className="NewPostSectionCardImage" />
					<div className="NewPostSectionCardBody">
						<p className="NewPostSectionCardBodyTitle">قسم التاريخ</p>
						<p className="NewPostSectionCardBodyText">
							لماذا يتجه العالم نحو الاستثمار في الإيثريوم؟
						</p>
					</div>
					<div className="NewPostSectionCardFooter">
						<p className="NewPostSectionCardFooterText1">بواسطة: احمد حاتم</p>
						<p className="NewPostSectionCardFooterText2">منذ 3 يوم </p>
					</div>
				</div>
				<div className="NewPostSectionCard">
					<div className="NewPostSectionCardImage" />
					<div className="NewPostSectionCardBody">
						<p className="NewPostSectionCardBodyTitle">قسم التاريخ</p>
						<p className="NewPostSectionCardBodyText">
							لماذا يتجه العالم نحو الاستثمار في الإيثريوم؟
						</p>
					</div>
					<div className="NewPostSectionCardFooter">
						<p className="NewPostSectionCardFooterText1">بواسطة: احمد حاتم</p>
						<p className="NewPostSectionCardFooterText2">منذ 4 يوم </p>
					</div>
				</div>
			</div>
			<button className="NewPostSectionButton">
				<i />
				عرض المزيد
			</button>
		</div>
	);
};
