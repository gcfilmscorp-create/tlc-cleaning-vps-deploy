import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site, n as cn, t as Button } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { t as AnimatedSection } from "./AnimatedSection-lead-fix-20260909-DoBcVPkc.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ClipboardCheck, H as ArrowRight, I as Building2, S as Hammer, V as ArrowUpRight, _ as Leaf, a as SlidersHorizontal, b as Images, d as MessageSquare, i as Truck, l as Play, n as Wrench, r as Users, s as ShieldCheck, u as Phone, x as House, y as Instagram, z as BadgeCheck } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./cta-band-lead-fix-20260909-BoEjIfIZ.mjs";
import { i as SectionHeading, r as Section } from "./page-sections-lead-fix-20260909-iQ-k7Kxp.mjs";
import { t as residential_default } from "./residential-lead-fix-20260909-C3SAEcv5.mjs";
import { t as hero_kitchen_default } from "./hero-kitchen-lead-fix-20260909-CnCra9cV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-lead-fix-20260909-NQvHKD0t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var FEED_URL = "https://feeds.behold.so/hZ8Rvr6NHV0xEsiL7exj";
function formatFollowers(value) {
	if (!value) return "Our community";
	return `${new Intl.NumberFormat("en-US").format(value)} followers`;
}
function postLabel(post) {
	if (post.mediaType === "VIDEO") return "Reel";
	if (post.mediaType === "CAROUSEL_ALBUM") return "Gallery";
	return "Post";
}
function postImage(post) {
	return post.sizes?.large?.mediaUrl || post.sizes?.medium?.mediaUrl || post.thumbnailUrl || post.mediaUrl;
}
function LoadingGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-4 overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-3",
		"aria-hidden": true,
		children: Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[4/5] w-[78vw] max-w-[21rem] shrink-0 animate-pulse rounded-[1.65rem] bg-foreground/10 sm:w-auto sm:max-w-none" }, index))
	});
}
function InstagramFeed() {
	const [feed, setFeed] = (0, import_react.useState)(null);
	const [failed, setFailed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		async function loadFeed() {
			try {
				const response = await fetch(FEED_URL, { signal: controller.signal });
				if (!response.ok) throw new Error("Instagram feed unavailable");
				const data = await response.json();
				if (!Array.isArray(data.posts)) throw new Error("Invalid Instagram feed");
				setFeed(data);
			} catch (error) {
				if (error.name !== "AbortError") setFailed(true);
			}
		}
		loadFeed();
		return () => controller.abort();
	}, []);
	const posts = feed?.posts.filter((post) => !post.visibility || post.visibility === "visible").slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "sand",
		className: "overflow-hidden border-y border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					animation: "fade-in-up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Follow along",
						title: "A little more TLC, every day.",
						lead: "See the spaces we care for, the details our teams notice, and everyday moments from TLC Cleaning Co."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
					animation: "fade-in-left",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.social.instagram,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex max-w-sm items-center gap-3 rounded-full border border-border bg-card p-2 pr-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-lift)]",
						"aria-label": "Open TLC Cleaning Co. on Instagram",
						children: [
							feed?.profilePictureUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: feed.profilePictureUrl,
								alt: "TLC Cleaning Co. Instagram profile",
								width: 52,
								height: 52,
								loading: "lazy",
								decoding: "async",
								className: "size-12 rounded-full border border-border object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 shrink-0 place-items-center rounded-full bg-ink text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-sm font-semibold text-foreground",
									children: ["@", feed?.username || "mytlccleaningco"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-xs text-muted-foreground",
									children: formatFollowers(feed?.followersCount)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedSection, {
				animation: "fade-in-up",
				delay: 150,
				className: "mt-10 md:mt-12",
				children: [
					!feed && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingGrid, {}) : null,
					posts?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3",
						children: posts.map((post, index) => {
							const Icon = post.mediaType === "VIDEO" ? Play : Images;
							const caption = post.prunedCaption || post.caption || "A recent moment from TLC Cleaning Co.";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: post.permalink,
								target: "_blank",
								rel: "noreferrer",
								className: "group relative aspect-[4/5] w-[78vw] max-w-[21rem] shrink-0 snap-center overflow-hidden rounded-[1.65rem] bg-ink shadow-[var(--shadow-soft)] sm:w-auto sm:max-w-none",
								"aria-label": `View Instagram ${postLabel(post).toLowerCase()}: ${caption}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: postImage(post),
										alt: "",
										"aria-hidden": true,
										width: post.sizes?.large?.width || post.sizes?.medium?.width || 600,
										height: post.sizes?.large?.height || post.sizes?.medium?.height || 750,
										loading: "lazy",
										decoding: "async",
										className: "size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-ink/10 transition-colors duration-300 group-hover:from-ink/95" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/65 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-3.5",
											fill: post.mediaType === "VIDEO" ? "currentColor" : "none"
										}), postLabel(post)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute inset-x-5 bottom-5 text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-clamp-2 text-sm leading-relaxed text-white/90",
											children: caption
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-3 inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary",
											children: ["View on Instagram", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr-only",
										children: [
											"Post ",
											index + 1,
											" of ",
											posts.length
										]
									})
								]
							}, post.id);
						})
					}) : null,
					failed || feed && !posts?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card px-6 py-10 text-center shadow-[var(--shadow-soft)] sm:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "mx-auto size-7 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl",
								children: "The latest from TLC is on Instagram."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
								children: "Our live gallery is taking a moment to load. Visit our profile to see recent work and behind-the-scenes moments."
							})
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSection, {
				animation: "fade-in-up",
				delay: 200,
				className: "mt-9 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outlineInk",
					size: "pill",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.social.instagram,
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {}), "Follow @mytlccleaningco"]
					})
				})
			})
		]
	});
}
var rose_julliana_story_default = "/assets/rose-julliana-story-DGYLKzNV.webp";
var services = [
	{
		icon: House,
		title: "Residential Cleaning",
		copy: "Consistent, detail-focused care that keeps your home fresh, comfortable, and ready to enjoy.",
		to: "/residential"
	},
	{
		icon: ClipboardCheck,
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
		icon: BadgeCheck,
		title: "Detail-obsessed",
		copy: "Experienced professionals who care about the details."
	},
	{
		icon: Users,
		title: "Homes & businesses",
		copy: "Flexible options for every type of space."
	},
	{
		icon: SlidersHorizontal,
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
					fetchPriority: "high",
					decoding: "async",
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
									to: "/free-estimate",
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-3xl border border-ink-foreground/10 bg-background/95 p-3 text-foreground shadow-[var(--shadow-lift)] backdrop-blur sm:p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "relative overflow-hidden rounded-[1.25rem]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: rose_julliana_story_default,
										alt: "Rose and Julliana, the mother-and-daughter owners of TLC Cleaning Co.",
										width: 1536,
										height: 1024,
										fetchPriority: "high",
										decoding: "async",
										className: "aspect-[3/2] w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/75 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
										className: "absolute bottom-4 left-4 text-ink-foreground sm:bottom-5 sm:left-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl leading-none",
											children: "Rose & Julliana"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground/75",
											children: "The family behind TLC"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-4 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-muted-foreground",
										children: "Mother & Daughter Owned & Operated"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl leading-tight text-foreground sm:text-[1.7rem]",
										children: "Cleaned with care. Backed by our family."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-[1.7] text-muted-foreground",
										children: "For over 15 years, TLC Cleaning has been built on trust, consistency, and genuine care for every home we serve. Our teams are personally selected, screened, and trained by us to uphold the standards our family built this company on."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-5 grid gap-2 border-t border-border pt-5 text-[0.67rem] font-semibold uppercase leading-relaxed tracking-[0.1em] text-foreground sm:grid-cols-3 sm:gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-primary" }), "Fully insured"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-primary" }), "Trained teams"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-primary" }), "Quality guaranteed"]
											})
										]
									})
								]
							})]
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
					decoding: "async",
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramFeed, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
