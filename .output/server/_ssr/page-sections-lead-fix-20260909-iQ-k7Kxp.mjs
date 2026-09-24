import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-sections-lead-fix-20260909-iQ-k7Kxp.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lead, image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink text-ink-foreground",
		children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			"aria-hidden": true,
			decoding: "async",
			className: "absolute inset-0 size-full object-cover opacity-25"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-24 top-1/2 hidden size-[30rem] -translate-y-1/2 rounded-full border border-ink-foreground/10 lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-12 rounded-full border border-ink-foreground/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-28 rounded-full bg-primary/10 blur-2xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative py-16 md:py-24 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-8 flex items-center gap-1.5 text-xs text-ink-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "transition-colors hover:text-primary",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink-foreground/90",
							children: eyebrow
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-3xl text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
					children: title
				}),
				lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg",
					children: lead
				}) : null,
				children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9 flex flex-wrap gap-3",
					children
				}) : null
			]
		})]
	});
}
function Section({ children, className, tone = "paper" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("py-16 md:py-20 lg:py-24", {
			paper: "bg-background text-foreground",
			sand: "bg-sand text-foreground",
			lime: "bg-lime-soft text-foreground",
			ink: "bg-ink text-ink-foreground"
		}[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children
		})
	});
}
function SectionHeading({ eyebrow, title, lead, align = "left", light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("eyebrow", light ? "text-primary" : "text-muted-foreground"),
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-5 text-base leading-relaxed", light ? "text-ink-muted" : "text-muted-foreground"),
				children: lead
			}) : null
		]
	});
}
function CheckList({ items, light = false, columns = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("grid gap-3.5", columns === 2 && "sm:grid-cols-2 sm:gap-x-8"),
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-sm leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 grid size-4 shrink-0 place-items-center rounded-full bg-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 10 10",
					className: "size-2.5",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M1.5 5.2 3.9 7.5 8.5 2.6",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.8",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						className: "text-primary-foreground"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: light ? "text-ink-muted" : "text-muted-foreground",
				children: item
			})]
		}, item))
	});
}
//#endregion
export { SectionHeading as i, PageHero as n, Section as r, CheckList as t };
