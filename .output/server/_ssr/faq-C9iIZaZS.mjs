import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./site-Cge8Amps.mjs";
import { E as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./cta-band-Ld_v2DxU.mjs";
import { i as SectionHeading, n as PageHero, r as Section } from "./page-sections-FreG-wJI.mjs";
import { t as residential_default } from "./residential-DmegbB5c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-C9iIZaZS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "What cleaning services do you offer?",
		a: "Residential, commercial, recurring, deep, move-in/move-out, post-construction, and optional add-on services."
	},
	{
		q: "Do you offer recurring cleaning?",
		a: "Yes. Weekly, biweekly, and monthly plans are available and can be customized."
	},
	{
		q: "Do you provide free estimates?",
		a: "Yes. Contact our team to request a free estimate. Same-day estimates may be available."
	},
	{
		q: "Do you bring cleaning supplies?",
		a: "Our team can arrive prepared with the agreed products and equipment. Tell us about allergies or product preferences in advance."
	},
	{
		q: "Are environmentally friendly products available?",
		a: "Yes. Eco-friendly options are available upon request."
	},
	{
		q: "Do I need to be home during the cleaning?",
		a: "Not necessarily. Access arrangements can be discussed before your appointment."
	},
	{
		q: "How should I prepare?",
		a: "Pick up personal items, secure valuables, and provide clear access to the areas included in your service."
	},
	{
		q: "Can I add oven, refrigerator, or window cleaning?",
		a: "Yes. Additional services can be added when requested in advance. Pricing depends on condition and scope."
	},
	{
		q: "Do you clean commercial spaces?",
		a: "Yes. We create customized plans for offices and other commercial environments."
	},
	{
		q: "What areas do you serve?",
		a: "North Shore, South Shore, and surrounding Massachusetts areas. Contact us to confirm availability in your city."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "FAQ",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Questions, answered", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-primary",
				children: "before you book."
			})] }),
			lead: "If you don't find what you're looking for here, our team is one call away.",
			image: residential_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Good to know",
				title: "Frequently asked questions."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${index}`,
					className: "border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-6 text-left font-display text-lg leading-snug hover:no-underline sm:text-xl",
						children: faq.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-6 text-sm leading-relaxed text-muted-foreground",
						children: faq.a
					})]
				}, faq.q))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Still have a question?",
			lead: "Send us the details of your space and we'll get back to you with clear answers and a free estimate."
		})
	] });
}
//#endregion
export { Faq as component };
