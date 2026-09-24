import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site, n as cn, t as Button } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, D as Clock, G as ArrowRight, P as ChevronDown, T as Facebook, W as ArrowUpRight, _ as LoaderCircle, b as Instagram, f as MessageSquareText, g as MapPin, m as MessageCircleQuestionMark, u as Phone } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as PageHero, r as Section } from "./page-sections-lead-fix-20260909-iQ-k7Kxp.mjs";
import { t as hero_kitchen_default } from "./hero-kitchen-lead-fix-20260909-CnCra9cV.mjs";
import { a as submitPublicLead, i as readAttribution, n as Label, r as Textarea, t as Input } from "./public-lead-api-lead-fix-20260909-CAt0HhXC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-lead-fix-20260909-r673qBWy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const idempotencyKey = (0, import_react.useRef)(null);
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const value = (name) => String(data.get(name) ?? "").trim();
		idempotencyKey.current ??= `contact_${crypto.randomUUID()}`;
		setStatus("sending");
		try {
			await submitPublicLead({
				name: value("name"),
				phone: value("phone"),
				email: "",
				serviceInterest: "General Contact",
				message: value("message"),
				state: "MA",
				website: value("website") || void 0,
				...readAttribution(window.location, document.referrer)
			}, idempotencyKey.current);
			form.reset();
			idempotencyKey.current = null;
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	};
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-[30rem] place-items-center rounded-[2rem] border border-border bg-card p-8 text-center shadow-[var(--shadow-lift)] sm:p-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-16 place-items-center rounded-full bg-lime-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-7 text-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-7 text-muted-foreground",
				children: "Message received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl",
				children: "Thank you for contacting us."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "A member of the TLC team will review your message and call you back during business hours."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outlineInk",
				size: "pill",
				className: "mt-8",
				onClick: () => setStatus("idle"),
				children: "Send another message"
			})
		] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		"aria-describedby": status === "error" ? "contact-form-error" : void 0,
		className: "relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:p-9 lg:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute -right-20 -top-24 size-64 rounded-full bg-lime-soft/70 blur-3xl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-11 place-items-center rounded-full bg-ink text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-7 text-muted-foreground",
					children: "Send us a message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl sm:text-4xl",
					children: "How can we help?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground",
					children: "Share your question and the best number to reach you. We'll respond with clear, personal guidance — no complicated forms."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "contact-website",
								children: "Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "contact-website",
								name: "website",
								tabIndex: -1,
								autoComplete: "off"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactField, {
							label: "Full name",
							id: "contact-name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "contact-name",
								name: "name",
								required: true,
								minLength: 2,
								maxLength: 120,
								placeholder: "Jane Doe",
								autoComplete: "name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactField, {
							label: "Phone number",
							id: "contact-phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "contact-phone",
								name: "phone",
								required: true,
								minLength: 7,
								maxLength: 30,
								type: "tel",
								inputMode: "tel",
								placeholder: "(857) 000-0000",
								autoComplete: "tel"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactField, {
							label: "Your message",
							id: "contact-message",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "contact-message",
								name: "message",
								required: true,
								minLength: 10,
								maxLength: 4e3,
								rows: 7,
								placeholder: "Tell us how we can help...",
								className: "min-h-40 resize-y"
							})
						})
					]
				}),
				status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "contact-form-error",
					role: "alert",
					className: "mt-5 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive",
					children: "We couldn't send your message. Please try again, or call us at (857) 392-9508."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					variant: "hero",
					size: "pillLg",
					className: "mt-7 w-full sm:w-auto",
					disabled: status === "sending",
					children: [
						status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null,
						"Send my message",
						status !== "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs leading-relaxed text-muted-foreground",
					children: "We respond during business hours. Your information is kept private."
				})
			]
		})]
	});
}
function ContactField({ label, id, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
			htmlFor: id,
			className: "mb-2 block text-xs font-semibold tracking-wide",
			children: [
				label,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "ml-0.5 text-primary-foreground",
					children: "*"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: " (required)"
				})
			]
		}), children]
	});
}
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
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "sand",
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "faq",
			className: "scroll-mt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-11 place-items-center rounded-full bg-ink text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Good to know",
					title: "Answers before you book.",
					lead: "The essentials, explained clearly. If your question is not here, send us a message above and our team will help."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full space-y-3",
					children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${index}`,
						className: "rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)] sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "py-5 text-left font-display text-lg leading-snug hover:no-underline sm:text-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 font-sans text-[0.625rem] font-semibold tracking-[0.16em] text-muted-foreground",
									children: String(index + 1).padStart(2, "0")
								}), faq.q]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-5 pl-9 text-sm leading-relaxed text-muted-foreground",
							children: faq.a
						})]
					}, faq.q))
				})]
			})
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's talk about", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-primary",
				children: "your space."
			})] }),
			lead: "A thoughtful answer starts with a real conversation. Send us your question and our team will personally help you find the right next step.",
			image: hero_kitchen_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				size: "pillLg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/free-estimate",
					children: ["Need pricing? Get a free estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:sticky lg:top-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Direct, personal care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl leading-tight sm:text-4xl",
						children: "We're easy to reach."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground",
						children: "Whether you have a quick question or need help choosing a service, you'll hear from a real member of our family-led team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-full bg-lime-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow block text-muted-foreground",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: site.phoneHref,
										className: "mt-1.5 block text-base font-medium transition-colors hover:text-primary-foreground",
										children: site.phone
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-full bg-lime-soft",
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
									className: "grid size-11 shrink-0 place-items-center rounded-full bg-lime-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow block text-muted-foreground",
										children: "Hours"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1.5 block space-y-1 text-muted-foreground",
										children: site.hours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground",
													children: hour.day
												}),
												" — ",
												hour.value
											]
										}, hour.day))
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-3 border-t border-border pt-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow mr-2 text-muted-foreground",
								children: "Follow along"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: site.social.facebook,
								label: "Facebook",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: site.social.instagram,
								label: "Instagram",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
	] });
}
function SocialLink({ href, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "grid size-10 place-items-center rounded-full border border-border transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-lime-soft",
		children
	});
}
//#endregion
export { Contact as component };
