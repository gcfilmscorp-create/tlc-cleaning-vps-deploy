import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as site, n as cn, t as Button } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { A as CircleCheck, F as Check, H as BadgeCheck, O as Clock3, P as ChevronDown, _ as LoaderCircle, j as ChevronUp, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section } from "./page-sections-lead-fix-20260909-iQ-k7Kxp.mjs";
import { t as hero_kitchen_default } from "./hero-kitchen-lead-fix-20260909-CnCra9cV.mjs";
import { a as submitPublicLead, i as readAttribution, n as Label, r as Textarea, t as Input } from "./public-lead-api-lead-fix-20260909-CAt0HhXC.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/free-estimate-lead-fix-20260909-BZh-M-I4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var serviceOptions = [
	"Residential Cleaning",
	"Deep Cleaning",
	"Move-In / Move-Out",
	"Post-Construction",
	"Commercial Cleaning",
	"Additional Services",
	"Special Project"
];
var frequencyOptions = [
	"One-time",
	"Weekly",
	"Biweekly",
	"Monthly",
	"Not sure yet"
];
var propertyOptions = [
	"House",
	"Apartment / Condo",
	"Office",
	"Retail",
	"Other"
];
function QuoteForm({ compact = false }) {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const idempotencyKey = (0, import_react.useRef)(null);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus("sending");
		const data = new FormData(event.currentTarget);
		idempotencyKey.current ??= `lead_${crypto.randomUUID()}`;
		try {
			await submitPublicLead(toLeadPayload(data), idempotencyKey.current);
			idempotencyKey.current = null;
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	};
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid place-items-center rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-soft)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-2xl",
				children: "Thank you for reaching out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: "Our team will review your request and get back to you with a customized estimate. Same-day estimates may be available."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outlineInk",
				size: "pill",
				className: "mt-7",
				onClick: () => setStatus("idle"),
				children: "Send another request"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		"aria-describedby": status === "error" ? "quote-form-error" : void 0,
		className: cn("rounded-2xl", compact ? "p-0" : "border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:p-8"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "website",
							children: "Website"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "website",
							name: "website",
							tabIndex: -1,
							autoComplete: "off"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						id: "name",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							placeholder: "Jane Doe",
							autoComplete: "name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone number",
						id: "phone",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							required: true,
							type: "tel",
							placeholder: "(857) 000-0000",
							autoComplete: "tel"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email address",
						id: "email",
						className: "sm:col-span-2",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							required: true,
							type: "email",
							placeholder: "you@email.com",
							autoComplete: "email"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Type of service",
						id: "service",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							name: "service",
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "service",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a service" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: serviceOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: option,
								children: option
							}, option)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred frequency",
						id: "frequency",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							name: "frequency",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "frequency",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a frequency" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: frequencyOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: option,
								children: option
							}, option)) })]
						})
					}),
					!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Service address / city",
							id: "address",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "address",
								name: "address",
								placeholder: "City, MA",
								autoComplete: "address-level2"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Property type",
							id: "property",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								name: "property",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "property",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a property type" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: propertyOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preferred date",
							id: "date",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "date",
								name: "date",
								type: "date"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Approx. square footage",
							id: "squareFeet",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "squareFeet",
								name: "squareFeet",
								type: "number",
								min: 0,
								max: 2e6,
								step: 1,
								placeholder: "1,500",
								inputMode: "numeric"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Bedrooms",
							id: "bedrooms",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "bedrooms",
								name: "bedrooms",
								type: "number",
								min: 0,
								placeholder: "3"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Bathrooms",
							id: "bathrooms",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "bathrooms",
								name: "bathrooms",
								type: "number",
								min: 0,
								placeholder: "2"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Additional details",
							id: "details",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "details",
								name: "details",
								rows: 4,
								placeholder: "Tell us about your space, priorities, pets, allergies, or add-on services."
							})
						})
					] }) : null
				]
			}),
			status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "quote-form-error",
				role: "alert",
				className: "mt-5 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive",
				children: "We couldn't send your request. Please try again, or call us at (857) 392-9508."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				variant: "hero",
				size: "pillLg",
				className: "mt-7 w-full",
				disabled: status === "sending",
				children: [status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, "Request my free estimate"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-xs leading-relaxed text-muted-foreground",
				children: "We respond during business hours. Same-day estimates may be available."
			})
		]
	});
}
function toLeadPayload(data) {
	const text = (name) => {
		const value = data.get(name);
		return typeof value === "string" && value.trim() ? value.trim() : void 0;
	};
	const number = (name) => {
		const value = text(name);
		return value === void 0 ? void 0 : Number(value);
	};
	return {
		name: text("name") ?? "",
		phone: text("phone") ?? "",
		email: text("email") ?? "",
		serviceInterest: text("service"),
		frequency: text("frequency"),
		preferredDate: text("date"),
		propertyType: text("property"),
		address: text("address"),
		state: "MA",
		bedrooms: number("bedrooms"),
		bathrooms: number("bathrooms"),
		squareFeet: number("squareFeet"),
		message: text("details"),
		website: text("website"),
		...readAttribution(window.location, document.referrer)
	};
}
function Field({ label, id, className, required = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
			htmlFor: id,
			className: "mb-2 block text-xs font-semibold tracking-wide text-foreground",
			children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "ml-0.5 text-primary-foreground",
				children: "*"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: " (required)"
			})] }) : null]
		}), children]
	});
}
function FreeEstimate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Free estimate",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A cleaner space", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-primary",
			children: "starts here."
		})] }),
		lead: "Tell us about your home, business, or special project. The more detail you share, the more accurate your customized estimate will be.",
		image: hero_kitchen_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-start gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:sticky lg:top-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Clear from the start"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl leading-tight sm:text-4xl",
					children: "An estimate shaped around you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted-foreground",
					children: "Every space is different. Share your priorities and our team will review the details before reaching out with the right service recommendation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustItem, {
							icon: Clock3,
							title: "Fast response",
							text: "Same-day estimates may be available."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustItem, {
							icon: BadgeCheck,
							title: "No obligation",
							text: "Clear guidance before you decide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustItem, {
							icon: ShieldCheck,
							title: "Trusted care",
							text: "Family-owned and fully insured."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl bg-ink p-6 text-ink-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "Prefer to call?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.phoneHref,
						className: "mt-3 block font-display text-2xl transition-colors hover:text-primary",
						children: site.phone
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})]
	}) })] });
}
function TrustItem({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-10 shrink-0 place-items-center rounded-full bg-lime-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs leading-relaxed text-muted-foreground",
			children: text
		})] })]
	});
}
//#endregion
export { FreeEstimate as component };
