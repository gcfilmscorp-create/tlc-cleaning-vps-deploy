import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./site-lead-fix-20260909-UvA_aLA3.mjs";
import { M as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-story-lead-fix-20260909-BkpfUhy7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AmbientServiceVideo({ src, poster, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[26rem] rounded-[2rem] border border-border bg-card p-3 shadow-[var(--shadow-lift)] sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src,
					poster,
					"aria-label": title,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "metadata",
					disablePictureInPicture: true,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/35 to-transparent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-white/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TLC in action" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(202,235,52,0.16)]" })]
				})
			]
		})
	});
}
function ServiceTimeline({ eyebrow, title, lead, items }) {
	const timelineRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const timeline = timelineRef.current;
		if (!timeline) return;
		let frame = 0;
		const updateProgress = () => {
			frame = 0;
			const rect = timeline.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const start = viewportHeight * .78;
			const finish = viewportHeight * .3;
			const travel = Math.max(rect.height + start - finish, 1);
			const progress = Math.min(1, Math.max(0, (start - rect.top) / travel));
			timeline.style.setProperty("--timeline-progress", progress.toFixed(4));
		};
		const requestUpdate = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(updateProgress);
		};
		updateProgress();
		window.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);
		return () => {
			window.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground",
				children: lead
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: timelineRef,
		className: "relative mx-auto mt-12 max-w-5xl [--timeline-progress:0] sm:mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "absolute bottom-5 left-5 top-5 z-0 w-px md:left-1/2 md:-translate-x-1/2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 origin-top bg-primary shadow-[0_0_18px_color-mix(in_oklab,var(--color-primary)_58%,transparent)] motion-reduce:transition-none",
					style: { transform: "scaleY(var(--timeline-progress))" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-1/2 z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-background bg-primary shadow-[0_0_0_1px_var(--color-border),0_0_18px_var(--color-primary)] motion-reduce:hidden",
					style: { top: "calc(var(--timeline-progress) * 100%)" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-5 sm:space-y-7",
			children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("relative grid min-h-20 animate-rise grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-4 motion-reduce:animate-none md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)]"),
				style: { transitionDelay: `${120 + index * 90}ms` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("hidden md:block", index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineCard, {
							item,
							number: index + 1,
							align: index % 2 === 0 ? "right" : "left"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 col-start-1 row-start-1 grid size-10 place-items-center justify-self-center rounded-full border-[5px] border-background bg-primary text-primary-foreground shadow-[0_0_0_1px_var(--color-border)] md:col-start-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-3.5",
							strokeWidth: 2.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-start-2 row-start-1 md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineCard, {
							item,
							number: index + 1,
							align: "left"
						})
					})
				]
			}, item))
		})]
	})] });
}
function TimelineCard({ item, number, align }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] sm:px-6 sm:py-5", align === "right" ? "md:text-right" : "text-left"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
			children: ["Detail ", String(number).padStart(2, "0")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 font-display text-lg leading-snug text-foreground sm:text-xl",
			children: item
		})]
	});
}
//#endregion
export { ServiceTimeline as n, AmbientServiceVideo as t };
