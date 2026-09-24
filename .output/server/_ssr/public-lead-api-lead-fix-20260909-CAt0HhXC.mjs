import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-lead-api-lead-fix-20260909-CAt0HhXC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base text-foreground caret-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground caret-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var apiBaseUrl = (("https://api.mytlcco.com".trim() ?? "") || runtimeApiBaseUrl()).replace(/\/$/, "");
/**
* The public image is also built outside Vite (for example by a Docker
* release job), so it must still find the API when no VITE_* value was
* injected at build time. Explicit build configuration always wins.
*/
function runtimeApiBaseUrl() {
	if (typeof window === "undefined") return "";
	const hostname = window.location.hostname.toLowerCase();
	if (hostname === "mytlcco.com" || hostname === "www.mytlcco.com") return "https://api.mytlcco.com";
	if (hostname === "tlc-cleaning.46.202.178.171.nip.io") return "https://api-tlc-cleaning.46.202.178.171.nip.io";
	if (hostname === "localhost" || hostname === "127.0.0.1") return "http://localhost:4000";
	return "";
}
async function submitPublicLead(payload, idempotencyKey) {
	if (!(await fetch(`${apiBaseUrl}/v1/public/leads`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-idempotency-key": idempotencyKey
		},
		body: JSON.stringify(payload)
	})).ok) throw new Error("LEAD_SUBMISSION_FAILED");
}
function readAttribution(location, referrer) {
	const query = new URLSearchParams(location.search);
	return {
		landingPage: location.href.slice(0, 500),
		referrer: referrer.slice(0, 500) || void 0,
		utmSource: query.get("utm_source")?.slice(0, 120) || void 0,
		utmMedium: query.get("utm_medium")?.slice(0, 120) || void 0,
		utmCampaign: query.get("utm_campaign")?.slice(0, 180) || void 0
	};
}
//#endregion
export { submitPublicLead as a, readAttribution as i, Label as n, Textarea as r, Input as t };
