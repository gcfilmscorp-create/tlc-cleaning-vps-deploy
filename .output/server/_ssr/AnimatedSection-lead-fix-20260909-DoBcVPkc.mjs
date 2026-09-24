import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnimatedSection-lead-fix-20260909-DoBcVPkc.js
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
//#endregion
export { AnimatedSection as t };
