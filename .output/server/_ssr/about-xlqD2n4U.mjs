import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site } from "./site-Cge8Amps.mjs";
import { t as CtaBand } from "./cta-band-Ld_v2DxU.mjs";
import { i as SectionHeading, n as PageHero, r as Section, t as CheckList } from "./page-sections-FreG-wJI.mjs";
import { t as residential_default } from "./residential-DmegbB5c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-xlqD2n4U.js
var import_jsx_runtime = require_jsx_runtime();
var beliefs = [
	"Every client deserves clear communication and dependable service.",
	"Every home and business has different needs.",
	"The smallest details can change how a space feels.",
	"A clean environment supports comfort, confidence, and peace of mind.",
	"Trust is earned through consistency, care, and respect."
];
var stats = [
	{
		value: "2015",
		label: "Serving Massachusetts since"
	},
	{
		value: "15+",
		label: "Years of combined experience"
	},
	{
		value: "100%",
		label: "Satisfaction guaranteed"
	},
	{
		value: "2",
		label: "Shores served, plus surrounding areas"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Cleaning with care", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-primary",
				children: "since 2015."
			})] }),
			lead: `TLC Cleaning Co. is a family-owned cleaning company serving homes and businesses across the ${site.area}.`,
			image: residential_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our name",
				title: "More than a cleaning service.",
				lead: "TLC stands for Tender, Love and Care — and that idea guides how we approach every space. We believe professional cleaning should feel personal, dependable, and thoughtfully tailored to the people who live or work there."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-base leading-relaxed text-muted-foreground lg:pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Since 2015, our team has helped clients enjoy cleaner homes, more welcoming workplaces, and more time for the things that matter." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We combine years of experience with careful attention to detail, flexible service options, and a genuine commitment to client satisfaction." })]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-display text-5xl leading-none text-primary",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-4 text-sm leading-relaxed text-ink-muted",
					children: stat.label
				})] }, stat.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "What we believe",
					title: "Principles behind every visit."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: beliefs })
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl",
							children: "Why TLC"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: "We are proud to be a locally operated, family-owned, and woman-led company. Our goal is not simply to complete a checklist. It is to build lasting relationships by delivering an experience clients feel confident recommending."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 font-display text-2xl leading-snug text-foreground",
							children: "Experience cleaning with genuine TLC."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { About as component };
