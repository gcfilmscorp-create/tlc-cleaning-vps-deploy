import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as site, n as cn, r as navLinks, t as Button } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowUp, C as Facebook, T as Clock, h as MapPin, m as Menu, t as X, u as Phone, y as Instagram } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-lead-fix-20260909-0fK3JSVq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DeF5lzy5.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var tlc_round_logo_default = "/assets/tlc-round-logo-_jaL7FRo.webp";
/** Preserves the original circular seal with a readable responsive wordmark. */
function BrandMark({ className, emblemClassName, tone = "light" }) {
	const textTone = tone === "light" ? "text-foreground" : "text-ink-foreground";
	const subTone = tone === "light" ? "text-muted-foreground" : "text-ink-muted";
	const dividerTone = tone === "light" ? "text-foreground/45" : "text-ink-foreground/45";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex min-w-0 items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: tlc_round_logo_default,
			alt: "",
			"aria-hidden": "true",
			width: 215,
			height: 215,
			className: cn("size-11 shrink-0 rounded-full bg-[#fbfcec] object-cover ring-1 ring-primary/35 lg:size-12", emblemClassName)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("flex items-baseline gap-1 whitespace-nowrap font-brand text-[1.04rem] leading-none tracking-[-0.035em] sm:text-[1.16rem]", textTone),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-brand text-[0.78em] font-medium tracking-[-0.05em]",
						children: "TLC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: dividerTone,
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cleaning" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: dividerTone,
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Co." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("eyebrow mt-1 block text-[0.53rem]", subTone),
				children: "Tender · Love · Care"
			})]
		})]
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden bg-ink text-ink-foreground lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex h-9 items-center justify-between text-[0.72rem] tracking-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-ink-muted",
					children: ["Serving the ", site.area]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink-muted",
						children: "Mon–Fri 8:00–17:00 · Sat by appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "inline-flex items-center gap-2 font-semibold transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), site.phone]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-b border-transparent bg-background/85 backdrop-blur-xl transition-all duration-300", scrolled && "border-border shadow-[var(--shadow-soft)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "min-w-0",
					"aria-label": "TLC Cleaning Co. home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-0.5 xl:flex",
							children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: item.to === "/" },
								activeProps: { className: "text-foreground bg-lime-soft" },
								inactiveProps: { className: "text-muted-foreground" },
								className: "rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors hover:text-foreground",
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							size: "pill",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/free-estimate",
								children: "Free Estimate"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outlineInk",
							size: "icon",
							className: "rounded-full md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								"aria-label": `Call ${site.phone}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outlineInk",
									size: "icon",
									className: "rounded-full xl:hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Open menu"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
								side: "right",
								className: "w-full border-l-0 bg-ink p-0 sm:max-w-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-full flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-ink-foreground/10 px-6 py-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {
												tone: "dark",
												emblemClassName: "size-10"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													variant: "outlineLight",
													size: "icon",
													className: "rounded-full",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "sr-only",
														children: "Close"
													})]
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
											className: "flex-1 overflow-y-auto px-6 py-4",
											children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.to,
												onClick: () => setOpen(false),
												activeOptions: { exact: item.to === "/" },
												activeProps: { className: "text-primary" },
												inactiveProps: { className: "text-ink-foreground/80" },
												className: "block border-b border-ink-foreground/10 py-4 font-display text-2xl transition-colors hover:text-primary",
												children: item.label
											}, item.to))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 border-t border-ink-foreground/10 px-6 py-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "hero",
												size: "pill",
												className: "w-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/free-estimate",
													onClick: () => setOpen(false),
													children: "Request a free estimate"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "outlineLight",
												size: "pill",
												className: "w-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: site.phoneHref,
													children: site.phone
												})
											})]
										})
									]
								})
							})]
						})
					]
				})]
			})
		})]
	});
}
var services = [
	{
		to: "/residential",
		label: "Residential Cleaning"
	},
	{
		to: "/commercial",
		label: "Commercial Cleaning"
	},
	{
		to: "/specialized-services",
		label: "Deep Cleaning"
	},
	{
		to: "/specialized-services",
		label: "Move-In / Move-Out"
	},
	{
		to: "/specialized-services",
		label: "Post-Construction"
	},
	{
		to: "/additional-services",
		label: "Additional Services"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { tone: "dark" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm leading-relaxed text-ink-muted",
							children: [
								"Professional residential and commercial cleaning across the ",
								site.area,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.social.facebook,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "grid size-10 place-items-center rounded-full border border-ink-foreground/20 transition-colors hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.social.instagram,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "grid size-10 place-items-center rounded-full border border-ink-foreground/20 transition-colors hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-primary",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-ink-muted transition-colors hover:text-primary",
						children: item.label
					}) }, item.label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-primary",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-ink-muted transition-colors hover:text-primary",
						children: item.label
					}) }, item.label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-primary",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4 text-sm text-ink-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								className: "transition-colors hover:text-primary",
								children: site.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.area })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "space-y-1",
								children: site.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-ink-foreground/90",
											children: [h.day, ":"]
										}),
										" ",
										h.value
									]
								}, h.day))
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "uppercase tracking-[0.18em]",
					children: site.tagline
				})]
			})
		})]
	});
}
function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	const [showBackToTop, setShowBackToTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const progress = window.scrollY / (documentHeight - windowHeight) * 100;
			setScrollProgress(Math.min(100, Math.max(0, progress)));
			setShowBackToTop(progress >= 80);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 right-0 z-[100] h-1 bg-border/30 backdrop-blur-sm",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full transition-all duration-150 ease-out", "bg-gradient-to-r from-primary via-primary to-lime-soft", "shadow-[0_0_12px_rgba(199,221,99,0.5)]", "relative overflow-hidden"),
			style: { width: `${scrollProgress}%` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0", "bg-gradient-to-r from-transparent via-white/40 to-transparent", "animate-shimmer"),
				style: {
					backgroundSize: "200% 100%",
					animation: "shimmer 3s infinite linear"
				}
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: scrollToTop,
		className: cn("fixed bottom-6 right-6 z-50", "flex items-center justify-center", "w-14 h-14 rounded-full", "bg-gradient-to-br from-primary via-primary to-lime-soft", "text-primary-foreground", "shadow-lg hover:shadow-[0_8px_30px_rgba(199,221,99,0.4)]", "transition-all duration-300", "hover:scale-110 hover:brightness-110", "group", "backdrop-blur-sm", "border-2 border-white/20", showBackToTop ? "opacity-100 translate-y-0 animate-bounce-in" : "opacity-0 translate-y-8 pointer-events-none"),
		"aria-label": "Voltar ao topo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: cn("w-6 h-6 transition-transform duration-300", "group-hover:-translate-y-1 group-hover:scale-110", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute inset-0 w-full h-full -rotate-90",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "28",
				r: "25",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.5",
				strokeOpacity: "0.15"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "28",
				r: "25",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.5",
				strokeDasharray: `${2 * Math.PI * 25}`,
				strokeDashoffset: `${2 * Math.PI * 25 * (1 - scrollProgress / 100)}`,
				className: "transition-all duration-150 ease-out drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]",
				strokeLinecap: "round"
			})]
		})]
	})] });
}
var canonicalOrigin = "https://mytlcco.com";
var defaultSocialImage = `${canonicalOrigin}/images/imgi_21_tlc-cleaning-hero-home-02-1920w.webp`;
function canonicalLinks(pathname) {
	return [{
		rel: "canonical",
		href: `${canonicalOrigin}${pathname === "/" ? "" : pathname}`
	}];
}
/**
* Shared metadata keeps every public route consistent for search engines and
* social previews while allowing each page to keep its approved copy.
*/
function pageSeo({ path, title, description, ogDescription, image }) {
	const normalizedPath = path === "/" ? "" : path;
	const url = `${canonicalOrigin}${normalizedPath}`;
	const socialDescription = ogDescription ?? description;
	const socialImage = image ? image.startsWith("http") ? image : `${canonicalOrigin}${image.startsWith("/") ? "" : "/"}${image}` : defaultSocialImage;
	return {
		links: canonicalLinks(path),
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: socialDescription
			},
			{
				property: "og:image",
				content: socialImage
			},
			{
				property: "og:image:alt",
				content: `${title} | TLC Cleaning Co.`
			},
			{
				property: "og:site_name",
				content: "TLC Cleaning Co."
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: socialDescription
			},
			{
				name: "twitter:image",
				content: socialImage
			},
			{ "script:ld+json": {
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "LocalBusiness",
						"@id": `${canonicalOrigin}/#business`,
						name: "TLC Cleaning Co.",
						url: canonicalOrigin,
						telephone: "+1-857-392-9508",
						image: defaultSocialImage,
						priceRange: "$$",
						areaServed: [
							"North Shore",
							"South Shore",
							"Massachusetts"
						]
					},
					{
						"@type": "WebPage",
						"@id": `${url}#webpage`,
						url,
						name: title,
						description,
						isPartOf: { "@id": `${canonicalOrigin}/#website` },
						about: { "@id": `${canonicalOrigin}/#business` },
						primaryImageOfPage: {
							"@type": "ImageObject",
							url: socialImage
						}
					},
					{
						"@type": "BreadcrumbList",
						itemListElement: [{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: canonicalOrigin
						}, ...normalizedPath ? [{
							"@type": "ListItem",
							position: 2,
							name: title.replace(/\s+—.*$/, ""),
							item: url
						}] : []]
					}
				]
			} }
		]
	};
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl",
					children: "This page isn't here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved. Let's get you back to a clean start."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:brightness-105",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-xs font-semibold uppercase tracking-[0.14em] text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TLC Cleaning Co. — Professional Cleaning. Peace of Mind." },
			{
				name: "description",
				content: "Residential and commercial cleaning across the North Shore, South Shore, and surrounding Massachusetts communities."
			},
			{
				name: "author",
				content: "TLC Cleaning Co."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: canonicalOrigin
			},
			{
				property: "og:title",
				content: "TLC Cleaning Co. — Professional Cleaning. Peace of Mind."
			},
			{
				property: "og:description",
				content: "Residential and commercial cleaning across the North Shore, South Shore, and surrounding Massachusetts communities."
			},
			{
				property: "og:image",
				content: defaultSocialImage
			},
			{
				property: "og:image:alt",
				content: "TLC Cleaning Co. professional cleaning service"
			},
			{
				property: "og:site_name",
				content: "TLC Cleaning Co."
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "TLC Cleaning Co. — Professional Cleaning. Peace of Mind."
			},
			{
				name: "twitter:description",
				content: "Residential and commercial cleaning across the North Shore, South Shore, and surrounding Massachusetts communities."
			},
			{
				name: "twitter:image",
				content: defaultSocialImage
			},
			{
				name: "theme-color",
				content: "#c7dd63"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
	}, [location.pathname, location.search]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col overflow-x-clip",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-lead-fix-20260909-NQvHKD0t.mjs");
var Route$8 = createFileRoute("/")({
	head: () => pageSeo({
		path: "/",
		title: "TLC Cleaning Co. — Professional Cleaning. Peace of Mind.",
		description: "Dependable residential and commercial cleaning in Massachusetts. Family-owned, fully insured, 15+ years of experience. Request a free estimate today.",
		ogDescription: "Residential and commercial cleaning across the North Shore, South Shore, and surrounding Massachusetts communities."
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-lead-fix-20260909-BZjPY4Pm.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => pageSeo({
		path: "/about",
		title: "Our Story — Rose & Julliana | TLC Cleaning Co.",
		description: "Meet Rose and Julliana, the mother-and-daughter team behind TLC Cleaning Co., and discover how more than 15 years of personal care became a professionally managed cleaning company.",
		ogDescription: "A family story built one home, one relationship, and one carefully trained team at a time.",
		image: "/images/imgi_28_477232974_18049620209177391_600603970728610428_n-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./additional-services-lead-fix-20260909-B2Id-mNT.mjs");
var Route$6 = createFileRoute("/additional-services")({
	head: () => pageSeo({
		path: "/additional-services",
		title: "Add-On Cleaning Services & Service Types — TLC Cleaning Co.",
		description: "Oven, refrigerator, cabinet, window, blind, and fixture cleaning plus laundry folding and custom special projects across Massachusetts.",
		ogDescription: "Extra care for the details that need it. Add-on services and custom projects.",
		image: "/images/imgi_25_tlc-cleaning-content-home-03-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./commercial-lead-fix-20260909-DF2_YEaL.mjs");
var Route$5 = createFileRoute("/commercial")({
	head: () => pageSeo({
		path: "/commercial",
		title: "Commercial Cleaning for Massachusetts Businesses — TLC Cleaning Co.",
		description: "Reliable commercial cleaning plans tailored to your facility, schedule, and priorities. Daily, weekly, biweekly, or monthly service.",
		ogDescription: "A cleaner business makes a stronger impression. Flexible commercial cleaning plans.",
		image: "/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-lead-fix-20260909-r673qBWy.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => pageSeo({
		path: "/contact",
		title: "Contact TLC Cleaning Co. — Massachusetts",
		description: "Contact TLC Cleaning Co. with a question about residential or commercial cleaning in Massachusetts. Call (857) 392-9508 or send us a message.",
		ogDescription: "Questions about your space or our services? The TLC team is here to help.",
		image: "/images/imgi_30_tlc-cleaning-content-home-02-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./faq-lead-fix-20260909-BUfHj-xh.mjs");
var Route$3 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./free-estimate-lead-fix-20260909-BZh-M-I4.mjs");
var Route$2 = createFileRoute("/free-estimate")({
	head: () => pageSeo({
		path: "/free-estimate",
		title: "Request a Free Cleaning Estimate — TLC Cleaning Co.",
		description: "Tell us about your home, business, or special project and receive a free, customized cleaning estimate from TLC Cleaning Co.",
		ogDescription: "A cleaner space starts here. Request your free, no-obligation estimate.",
		image: "/images/imgi_30_tlc-cleaning-content-home-02-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./residential-lead-fix-20260909-ChCy0nAB.mjs");
var Route$1 = createFileRoute("/residential")({
	head: () => pageSeo({
		path: "/residential",
		title: "Residential Cleaning in Massachusetts — TLC Cleaning Co.",
		description: "Reliable residential cleaning designed around your home, your priorities, and your schedule. Weekly, biweekly, and monthly plans available.",
		ogDescription: "A cleaner home and a lighter routine. Personalized residential cleaning in Massachusetts.",
		image: "/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./specialized-services-lead-fix-20260909-Bt9xswn1.mjs");
var Route = createFileRoute("/specialized-services")({
	head: () => pageSeo({
		path: "/specialized-services",
		title: "Deep, Move-Out & Post-Construction Cleaning — TLC Cleaning Co.",
		description: "Specialized residential cleaning: deep cleaning, move-in / move-out cleaning, and post-construction final cleanup across Massachusetts.",
		ogDescription: "Deep cleaning, move-in / move-out, and post-construction cleanup for spaces that need more than the basics.",
		image: "/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.webp"
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	AdditionalServicesRoute: Route$6.update({
		id: "/additional-services",
		path: "/additional-services",
		getParentRoute: () => Route$9
	}),
	CommercialRoute: Route$5.update({
		id: "/commercial",
		path: "/commercial",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	FaqRoute: Route$3.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$9
	}),
	FreeEstimateRoute: Route$2.update({
		id: "/free-estimate",
		path: "/free-estimate",
		getParentRoute: () => Route$9
	}),
	ResidentialRoute: Route$1.update({
		id: "/residential",
		path: "/residential",
		getParentRoute: () => Route$9
	}),
	SpecializedServicesRoute: Route.update({
		id: "/specialized-services",
		path: "/specialized-services",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: false,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
