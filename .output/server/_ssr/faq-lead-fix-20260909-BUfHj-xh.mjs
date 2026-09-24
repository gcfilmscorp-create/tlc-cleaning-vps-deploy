import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-lead-fix-20260909-BUfHj-xh.js
var import_jsx_runtime = require_jsx_runtime();
function LegacyFaqRedirect() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/contact",
		hash: "faq",
		replace: true
	});
}
//#endregion
export { LegacyFaqRedirect as component };
