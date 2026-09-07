import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site } from "./site-Cge8Amps.mjs";
import { S as Clock, _ as Instagram, b as Facebook, p as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section } from "./page-sections-FreG-wJI.mjs";
import { t as hero_kitchen_default } from "./hero-kitchen-niZSBDvX.mjs";
import { t as QuoteForm } from "./quote-form-CX-KlKXg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-O8PoIPAo.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A cleaner space", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-primary",
			children: "starts here."
		})] }),
		lead: "Tell us about your home, business, or special project. Our team will review your needs and help you choose the right cleaning service.",
		image: hero_kitchen_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Contact information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-lime-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow block text-muted-foreground",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.phoneHref,
									className: "mt-1.5 block text-base font-medium transition-colors hover:text-primary",
									children: site.phone
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-lime-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow block text-muted-foreground",
									children: "Service area"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 block leading-relaxed text-muted-foreground",
									children: site.area
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-lime-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow block text-muted-foreground",
									children: "Hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 block space-y-1 text-muted-foreground",
									children: site.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: h.day
											}),
											" — ",
											h.value
										]
									}, h.day))
								})]
							})]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-muted-foreground",
					children: "Follow along"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.social.facebook,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Facebook",
						className: "grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:bg-lime-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.social.instagram,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram",
						className: "grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:bg-lime-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-ink p-7 text-ink-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-snug",
						children: "Professional Cleaning. Peace of Mind."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink-muted",
						children: [
							"Family-owned, woman-led, and fully insured — serving Massachusetts since",
							" ",
							site.since,
							"."
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Request your free estimate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
				children: "The more detail you share, the more accurate your estimate will be."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
			})
		] })]
	}) })] });
}
//#endregion
export { Contact as component };
