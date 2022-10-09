import styles from "@assets/styles/home.css";

import {
	IntroSection,
	links as IntroSectionLinks,
} from "@components/home/intro-section/introSection";

import {
	NewPostSection,
	links as NewPostSectionLinks,
} from "@components/home/newPosted-section/newPostSection";

import {
	MostSearchedSection,
	links as MostSearchedSectionLinks,
} from "@components/home/mostSearched-section/mostSearchedSection";

import {
	VisitorsNowSeeingSection,
	links as VisitorsNowSeeingSectionLinks,
} from "@components/home/visitorsNowSeeing-section/visitorsNowSeeingSection";

import {
	ArticlesSection,
	links as ArticlesSectionLinks,
} from "@components/home/articles-section/articlesSection";

import {
	HowSection,
	links as HowSectionLinks,
} from "@components/home/how-section/howSection";

import {
	QASection,
	links as QASectionLinks,
} from "@components/home/QA-section/QASection";

import {
	CommonQuestionsSection,
	links as CommonQuestionsSectionLinks,
} from "@components/home/commonQuestions-section/commonQuestionsSection";

import {
	CommonAnswersSection,
	links as CommonAnswersSectionLinks,
} from "@components/home/commonAnswers-section/commonAnswersSection";

import { Footer ,	links as FooterLinks,
} from "@components/home/footer-section/footer";

export function links() {
	return [
		...IntroSectionLinks(),
		...NewPostSectionLinks(),
		...MostSearchedSectionLinks(),
		...VisitorsNowSeeingSectionLinks(),
		...ArticlesSectionLinks(),
		...HowSectionLinks(),
		...QASectionLinks(),
		...CommonQuestionsSectionLinks(),
		...CommonAnswersSectionLinks(),
		...FooterLinks(),
		{ rel: "stylesheet", href: styles },
	];
}

export default function index() {
	return (
		<div className="home">
			<div>
				<IntroSection />
			</div>
			<div className="Section1">
				<NewPostSection />
			</div>
			<div className="Section2">
				<MostSearchedSection />
			</div>
			<div className="Section3">
				<div className="div1">
					<div className="icon1"></div>
					<p>بماذا يتميز موقع مجرة</p>
					<div className="icon2"></div>
				</div>
			</div>
			<div className="Section4">
				<ArticlesSection />
			</div>
			<div className="Section5">
				<VisitorsNowSeeingSection />
			</div>
			<div className="Section6">
				<NewPostSection />
			</div>
			<div className="Section7">
				<HowSection />
			</div>
			<div className="Section8">
				<VisitorsNowSeeingSection />
			</div>
			<div className="Section9">
				<NewPostSection />
			</div>
			<div className="Section10">
				<QASection />
			</div>
			<div className="Section11">
				<CommonQuestionsSection />
			</div>
			<div className="Section12">
				<CommonAnswersSection />
			</div>
			<div className="Section13">
				<Footer />
			</div>
		</div>
	);
}
