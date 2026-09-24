import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-lead-fix-20260909-BoEjIfIZ.mjs";
import { i as SectionHeading, n as PageHero, r as Section } from "./page-sections-lead-fix-20260909-iQ-k7Kxp.mjs";
import { n as ServiceTimeline, t as AmbientServiceVideo } from "./service-story-lead-fix-20260909-BkpfUhy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commercial-lead-fix-20260909-DF2_YEaL.js
var import_jsx_runtime = require_jsx_runtime();
var commercial_default = "/assets/commercial-DmhNc2lk.webp";
var scope = [
	"Office and shared-area cleaning",
	"Restroom cleaning and disinfection",
	"Breakroom and kitchen cleaning",
	"Desk and workstation surface care",
	"Floor vacuuming, sweeping, and mopping",
	"High-touch surface sanitization",
	"Trash and recycling removal",
	"Custom maintenance tasks"
];
var frequencies = [
	"Daily",
	"Weekly",
	"Biweekly",
	"Monthly"
];
function Commercial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Commercial",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A cleaner business makes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-primary",
				children: "a stronger impression."
			})] }),
			lead: "Create a healthier, more welcoming environment for employees, customers, and visitors. TLC Cleaning Co. provides reliable commercial cleaning plans tailored to your facility, schedule, and priorities.",
			image: commercial_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				size: "pillLg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/free-estimate",
					children: "Request a commercial estimate"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Minimal disruption",
				title: "Professional cleaning that works around your business.",
				lead: "Your workplace should reflect the quality of your business. Our team helps maintain clean, organized, and presentable commercial spaces while minimizing disruption to your daily operations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-border bg-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: "Flexible service plans"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "Choose the cadence that matches your facility and traffic level. We can also create a customized scope of work for ongoing maintenance or periodic deep cleaning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-2",
						children: frequencies.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-foreground",
							children: f
						}, f))
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientServiceVideo, {
				src: "/videos/commercial-cleaning.mp4",
				poster: "/videos/commercial-cleaning-poster.webp",
				title: "TLC commercial cleaning in action"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTimeline, {
				eyebrow: "Commercial care, step by step",
				title: "A complete clean, built around your workplace.",
				lead: "Every plan is tailored to your facility, traffic, and priorities. Your recurring service may include the following details.",
				items: scope
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The result",
					title: "A better environment for everyone.",
					lead: "A professionally cleaned workplace supports employee comfort, customer confidence, and a polished brand image.",
					light: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-ink-muted",
					children: "TLC Cleaning Co. brings consistent care and clear communication to every visit, allowing you to focus on running your business. Keep your business ready for every workday."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Keep your business ready for every workday.",
			lead: "Share your facility details and we'll build a scope of work that fits your operation.",
			label: "Request a commercial estimate"
		})
	] });
}
//#endregion
export { Commercial as component };
