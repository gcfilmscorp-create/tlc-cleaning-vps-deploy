import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site, t as Button } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-lead-fix-20260909-BoEjIfIZ.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Come home to clean.", lead = "Tell us about your space and receive a free, no-obligation estimate from our team.", label = "Request your free estimate" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-8 py-14 md:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-3xl leading-tight sm:text-4xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-primary-foreground/80 md:text-base",
					children: lead
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					size: "pillLg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/free-estimate",
						children: label
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outlineInk",
					size: "pillLg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), site.phone]
					})
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
