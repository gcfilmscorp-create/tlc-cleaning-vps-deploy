import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-Cge8Amps.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			hero: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0",
			ink: "bg-ink text-ink-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-ink/90",
			outlineInk: "border border-ink/25 bg-transparent text-ink hover:border-ink/60 hover:bg-ink/5",
			outlineLight: "border border-ink-foreground/35 bg-transparent text-ink-foreground hover:border-ink-foreground/70 hover:bg-ink-foreground/10"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			pill: "h-12 rounded-full px-7 text-[0.8125rem] font-semibold uppercase tracking-[0.14em]",
			pillLg: "h-14 rounded-full px-9 text-[0.8125rem] font-semibold uppercase tracking-[0.14em]"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var site = {
	name: "TLC Cleaning Co.",
	tagline: "Professional Cleaning. Peace of Mind.",
	phone: "(857) 392-9508",
	phoneHref: "tel:+18573929508",
	email: "info@mytlcco.com",
	area: "North Shore, South Shore, and surrounding Massachusetts communities",
	city: "Peabody, MA",
	since: 2015,
	hours: [
		{
			day: "Monday – Friday",
			value: "8:00 AM – 5:00 PM"
		},
		{
			day: "Saturday",
			value: "8:00 AM – 12:00 PM (by appointment)"
		},
		{
			day: "Sunday",
			value: "Closed"
		}
	],
	social: {
		facebook: "https://facebook.com/363601390648181",
		instagram: "https://instagram.com/mytlccleaningco"
	}
};
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/residential",
		label: "Residential"
	},
	{
		to: "/specialized-services",
		label: "Specialized"
	},
	{
		to: "/commercial",
		label: "Commercial"
	},
	{
		to: "/additional-services",
		label: "Add-Ons"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
//#endregion
export { site as i, cn as n, navLinks as r, Button as t };
