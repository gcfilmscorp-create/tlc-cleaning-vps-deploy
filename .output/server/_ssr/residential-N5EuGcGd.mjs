import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./site-Cge8Amps.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CalendarClock, O as CalendarRange, k as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./cta-band-Ld_v2DxU.mjs";
import { i as SectionHeading, n as PageHero, r as Section, t as CheckList } from "./page-sections-FreG-wJI.mjs";
import { t as residential_default } from "./residential-DmegbB5c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/residential-N5EuGcGd.js
var import_jsx_runtime = require_jsx_runtime();
var whatWeClean = [
	"Kitchens and eating areas",
	"Bathrooms and high-touch surfaces",
	"Bedrooms and living spaces",
	"Floors, carpets, and area rugs",
	"Furniture, shelves, and accessible surfaces",
	"Baseboards, fixtures, and detailed areas",
	"Trash removal and finishing touches"
];
var plans = [
	{
		icon: CalendarDays,
		title: "Weekly Cleaning",
		copy: "Ideal for busy households, families, pet owners, and clients who want a consistently maintained home."
	},
	{
		icon: CalendarRange,
		title: "Biweekly Cleaning",
		copy: "A popular option for staying ahead of dust, buildup, and everyday mess."
	},
	{
		icon: CalendarClock,
		title: "Monthly Cleaning",
		copy: "Helpful for lighter-maintenance homes or clients who need periodic professional support."
	}
];
function Residential() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Residential",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A cleaner home.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-primary",
				children: "A lighter routine."
			})] }),
			lead: "Reliable residential cleaning designed around your home, your priorities, and your schedule. Let our team handle the details while you enjoy a space that feels fresh, comfortable, and ready for life.",
			image: residential_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				size: "pillLg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "Request a residential estimate"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Personalized, never generic",
				title: "Cleaning designed for real life.",
				lead: "Every home is different, and every client has different priorities. That is why TLC Cleaning Co. provides personalized cleaning instead of a one-size-fits-all checklist."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base leading-relaxed text-muted-foreground",
				children: "We focus on the areas that matter most to you and deliver consistent care throughout your home, visit after visit."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "What we clean"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: whatWeClean })
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Recurring options",
					title: "Choose the rhythm that fits your home.",
					align: "center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-3",
					children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-lift)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-xl bg-lime-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(plan.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl",
								children: plan.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: plan.copy
							})
						]
					}, plan.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-14 max-w-xl text-center font-display text-2xl leading-snug text-foreground sm:text-3xl",
					children: "Your home should feel like a place to relax."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Ready for a home that stays fresh?",
			lead: "Tell us about your home and we'll build a cleaning plan around your priorities."
		})
	] });
}
//#endregion
export { Residential as component };
