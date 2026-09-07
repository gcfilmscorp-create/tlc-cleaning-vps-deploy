import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./site-Cge8Amps.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as AppWindow, M as Boxes, N as Blinds, g as Lamp, l as Refrigerator, o as Sparkles, s as Shirt, x as CookingPot } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./cta-band-Ld_v2DxU.mjs";
import { i as SectionHeading, n as PageHero, r as Section } from "./page-sections-FreG-wJI.mjs";
import { t as hero_kitchen_default } from "./hero-kitchen-niZSBDvX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/additional-services-cBz_BlAK.js
var import_jsx_runtime = require_jsx_runtime();
var addOns = [
	{
		icon: CookingPot,
		title: "Inside Oven Cleaning",
		copy: "Grease and food residue removal from interior oven surfaces."
	},
	{
		icon: Refrigerator,
		title: "Inside Refrigerator Cleaning",
		copy: "Shelves, drawers, and accessible interior surfaces refreshed."
	},
	{
		icon: Boxes,
		title: "Inside Cabinets & Drawers",
		copy: "Detailed interior cleaning for empty cabinets and drawers."
	},
	{
		icon: AppWindow,
		title: "Window Cleaning",
		copy: "Interior and exterior cleaning based on access and project scope."
	},
	{
		icon: Blinds,
		title: "Blind Cleaning",
		copy: "Detailed dust and buildup removal."
	},
	{
		icon: Lamp,
		title: "Chandeliers & Fixtures",
		copy: "Careful cleaning for accessible decorative fixtures."
	},
	{
		icon: Shirt,
		title: "Laundry Folding",
		copy: "Convenient folding service added to an eligible appointment."
	},
	{
		icon: Sparkles,
		title: "Special Projects",
		copy: "Customized cleaning for unique spaces, events, or property needs."
	}
];
var serviceTypes = [
	{
		title: "One-Time Cleaning",
		copy: "A flexible option for special occasions, seasonal needs, or a single refresh."
	},
	{
		title: "Recurring Cleaning",
		copy: "Weekly, biweekly, or monthly care for consistent results."
	},
	{
		title: "Customized Projects",
		copy: "A tailored scope for special requests, properties, or situations."
	}
];
function AdditionalServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Add-Ons",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Extra care for the details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-primary",
				children: "that need it."
			})] }),
			lead: "Some spaces and situations need more than a standard cleaning. Add specialized services to your appointment or request a custom project based on your needs.",
			image: hero_kitchen_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				size: "pillLg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "Request a custom estimate"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Available add-ons",
			title: "Choose what your space needs."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: addOns.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-lift)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-xl bg-lime-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg leading-snug",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: item.copy
					})
				]
			}, item.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Service types",
					title: "Three ways to work with us."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: serviceTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl",
							children: type.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: type.copy
						})]
					}, type.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: "Add-on services should be requested in advance and may require a separate estimate. Availability depends on access, condition, project size, and safety requirements."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Need something not listed?",
			lead: "Describe your project and our team will confirm availability and pricing.",
			label: "Request a custom estimate"
		})
	] });
}
//#endregion
export { AdditionalServices as component };
