import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site, n as cn, t as Button } from "./site-Cge8Amps.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowRight, a as Star, c as ShieldCheck, d as MessageSquare, h as Leaf, i as Truck, j as Building2, n as Wrench, o as Sparkles, r as Users, u as Phone, v as House, y as Hammer } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./cta-band-Ld_v2DxU.mjs";
import { i as SectionHeading, r as Section } from "./page-sections-FreG-wJI.mjs";
import { t as residential_default } from "./residential-DmegbB5c.mjs";
import { t as hero_kitchen_default } from "./hero-kitchen-niZSBDvX.mjs";
import { t as QuoteForm } from "./quote-form-CX-KlKXg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Nc4wPzNK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useIntersectionObserver(options = {}) {
	const { threshold = .1, rootMargin = "0px", triggerOnce = true } = options;
	const [isIntersecting, setIsIntersecting] = (0, import_react.useState)(false);
	const [hasIntersected, setHasIntersected] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new IntersectionObserver(([entry]) => {
			const isElementIntersecting = entry.isIntersecting;
			setIsIntersecting(isElementIntersecting);
			if (isElementIntersecting && !hasIntersected) {
				setHasIntersected(true);
				if (triggerOnce) observer.unobserve(element);
			}
		}, {
			threshold,
			rootMargin
		});
		observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, [
		threshold,
		rootMargin,
		triggerOnce,
		hasIntersected
	]);
	return {
		ref,
		isIntersecting,
		hasIntersected
	};
}
function AnimatedSection({ children, animation = "fade-in-up", delay = 0, threshold = .1, as: Component = "div", className, ...props }) {
	const { ref, hasIntersected } = useIntersectionObserver({
		threshold,
		triggerOnce: true
	});
	const animationClass = animation ? `animate-${animation}` : "";
	const delayClass = delay > 0 ? `delay-${delay}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: cn(hasIntersected ? animationClass : "opacity-0", hasIntersected && delayClass, className),
		...props,
		children
	});
}
function PhoneButton({ className, phone = "(978) 594-5554" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `tel:${phone.replace(/[^0-9]/g, "")}`,
		className: cn("group relative inline-flex items-center justify-center", "w-14 h-14 rounded-full", "bg-primary text-primary-foreground", "shadow-lg hover:shadow-xl transition-all duration-300", "md:w-auto md:h-auto md:px-6 md:py-3 md:rounded-lg", "md:animate-none", className),
		"aria-label": "Call TLC Cleaning",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute inset-0 rounded-full", "animate-sonar-pulse", "md:hidden"),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 md:mr-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden md:inline font-medium",
				children: phone
			})
		]
	});
}
var services = [
	{
		icon: House,
		title: "Residential Cleaning",
		copy: "Consistent, detail-focused care that keeps your home fresh, comfortable, and ready to enjoy.",
		to: "/residential"
	},
	{
		icon: Sparkles,
		title: "Deep Cleaning",
		copy: "A more intensive top-to-bottom service for spaces that need extra time and attention.",
		to: "/specialized-services"
	},
	{
		icon: Truck,
		title: "Move-In / Move-Out",
		copy: "A fresh start for your next chapter without adding cleaning to your moving checklist.",
		to: "/specialized-services"
	},
	{
		icon: Hammer,
		title: "Post-Construction",
		copy: "Detailed final cleanup that prepares a renovated or newly completed space for use.",
		to: "/specialized-services"
	},
	{
		icon: Building2,
		title: "Commercial Cleaning",
		copy: "Reliable plans that help businesses maintain a clean, healthy, professional environment.",
		to: "/commercial"
	},
	{
		icon: Wrench,
		title: "Additional Services",
		copy: "Custom add-ons for appliances, windows, cabinets, blinds, fixtures, and special projects.",
		to: "/additional-services"
	}
];
var reasons = [
	{
		icon: Star,
		title: "Detail-obsessed",
		copy: "Experienced professionals who care about the details."
	},
	{
		icon: Users,
		title: "Homes & businesses",
		copy: "Flexible options for every type of space."
	},
	{
		icon: Sparkles,
		title: "Made for you",
		copy: "Customized cleaning plans based on your priorities."
	},
	{
		icon: Leaf,
		title: "Eco options",
		copy: "Environmentally friendly products available on request."
	},
	{
		icon: MessageSquare,
		title: "Clear communication",
		copy: "Dependable service and honest updates."
	},
	{
		icon: ShieldCheck,
		title: "Local & family-owned",
		copy: "A woman-led company serving Massachusetts."
	}
];
var steps = [
	{
		n: "01",
		title: "Tell us about your space",
		copy: "Complete the quote form or call our team."
	},
	{
		n: "02",
		title: "Receive a customized estimate",
		copy: "We recommend the right service based on your needs."
	},
	{
		n: "03",
		title: "Choose a convenient schedule",
		copy: "Select a one-time or recurring plan that fits your routine."
	},
	{
		n: "04",
		title: "Enjoy the TLC difference",
		copy: "Come back to a space that feels fresh, clean, and cared for."
	}
];
var trustBar = [
	"Over 15 Years of Experience",
	"Family-Owned",
	"Fully Insured",
	"Satisfaction Guaranteed"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-ink text-ink-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_kitchen_default,
					alt: "Bright, immaculately clean kitchen with marble counter",
					width: 1600,
					height: 1200,
					className: "absolute inset-0 size-full object-cover opacity-40 animate-scale-in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-ink/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page relative grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
							animation: "fade-in-up",
							as: "p",
							className: "eyebrow text-primary",
							children: "Residential & Commercial Cleaning in Massachusetts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
							animation: "fade-in-up",
							delay: 100,
							as: "h1",
							className: "mt-6 text-balance text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.25rem]",
							children: ["Professional Cleaning.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-primary",
								children: "Peace of Mind."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
							animation: "fade-in-up",
							delay: 200,
							as: "p",
							className: "mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg",
							children: "Enjoy a cleaner, fresher space without giving up your valuable time. TLC Cleaning Co. provides dependable residential and commercial cleaning with careful attention to every detail."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
							animation: "fade-in-up",
							delay: 300,
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								size: "pillLg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Request a free estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outlineLight",
								size: "pillLg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.phoneHref,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), site.phone]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
							animation: "fade-in-up",
							delay: 400,
							as: "ul",
							className: "mt-11 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-foreground/15 pt-7 text-xs text-ink-muted sm:flex sm:flex-wrap sm:gap-x-8",
							children: trustBar.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-primary" }), item]
							}, item))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
						animation: "fade-in-left",
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-ink-foreground/10 bg-background/95 p-7 shadow-[var(--shadow-lift)] backdrop-blur sm:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-muted-foreground",
									children: "Free, same-day estimate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-2xl text-foreground",
									children: "Get your quote"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { compact: true })
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed bottom-6 right-6 z-50 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneButton, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
				animation: "fade-in-right",
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: residential_default,
					alt: "Serene, freshly cleaned living room",
					width: 1200,
					height: 912,
					loading: "lazy",
					className: "aspect-4/3 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-7 py-5 text-primary-foreground shadow-[var(--shadow-glow)] sm:block animate-scale-in delay-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl leading-none",
						children: "15+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-2",
						children: "Years of care"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					animation: "fade-in-left",
					as: "div",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Why it matters",
						title: "A cleaner space changes everything.",
						lead: "A clean home is more than something you see. It is the feeling of walking into a fresh room, relaxing at the end of a long day, and knowing every detail has been handled with care."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					animation: "fade-in-left",
					delay: 100,
					as: "p",
					className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "At TLC Cleaning Co., we make professional cleaning simple and dependable. Whether you need ongoing service, a detailed deep clean, help during a move, post-construction cleanup, or cleaning for your business, our team creates a plan around your space and your schedule."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					animation: "fade-in-left",
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outlineInk",
						size: "pill",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							children: ["About TLC", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				})
			] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "sand",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
				animation: "fade-in-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our services",
					title: "Cleaning built around your space.",
					lead: "Six core services, each tailored to the way you live or work.",
					align: "center"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					animation: "fade-in-up",
					delay: (index + 1) * 100,
					as: "div",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: service.to,
						className: "group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-lift)] h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-xl bg-lime-soft text-foreground transition-colors group-hover:bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: service.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground",
								children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })]
							})
						]
					})
				}, service.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
				animation: "fade-in-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why clients choose TLC",
					title: "Care you can measure in details.",
					light: true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3",
				children: reasons.map((reason, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
					animation: "fade-in-up",
					delay: (index + 1) * 100,
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full border border-ink-foreground/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(reason.icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg text-ink-foreground",
							children: reason.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink-muted",
							children: reason.copy
						})]
					})]
				}, reason.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
			animation: "fade-in-up",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How it works",
				title: "Four simple steps.",
				align: "center"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
			children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
				animation: "fade-in-up",
				delay: (index + 1) * 100,
				as: "li",
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-5xl leading-none text-primary",
						children: step.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 rule-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
						children: step.copy
					})
				]
			}, step.n))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
