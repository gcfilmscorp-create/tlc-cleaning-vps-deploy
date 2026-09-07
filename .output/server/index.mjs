globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"18bc-IXEzKsfLrnir41u1WgglmzWwS4o\"",
		"mtime": "2026-08-05T11:36:01.888Z",
		"size": 6332,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-05T11:36:01.895Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/additional-services-yIkqVbOM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1694-X6sSXEziPsOL7GpNq5y+nDs2J0I\"",
		"mtime": "2026-09-07T11:51:13.682Z",
		"size": 5780,
		"path": "../public/assets/additional-services-yIkqVbOM.js"
	},
	"/assets/about-Ai44ED--.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb6-cVQ+j4YbJSB+QIOZTYaiX9PsSrY\"",
		"mtime": "2026-09-07T11:51:13.680Z",
		"size": 3254,
		"path": "../public/assets/about-Ai44ED--.js"
	},
	"/assets/contact-BqRLJmv2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8a-z+pEIEWCvlV+9LPQVJUAfA+L00A\"",
		"mtime": "2026-09-07T11:51:13.685Z",
		"size": 3978,
		"path": "../public/assets/contact-BqRLJmv2.js"
	},
	"/assets/commercial-Do1pviO9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d2e-gbadSlniRpvHHfOF3RHlSqpEQlk\"",
		"mtime": "2026-09-07T11:51:13.684Z",
		"size": 3374,
		"path": "../public/assets/commercial-Do1pviO9.js"
	},
	"/assets/hero-kitchen-BgU5Io0S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-c26J6LhoA1mZUyK/XES+axucG7A\"",
		"mtime": "2026-09-07T11:51:13.693Z",
		"size": 57,
		"path": "../public/assets/hero-kitchen-BgU5Io0S.js"
	},
	"/assets/dist-B_UGFlxM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbd-XrO9UrKqBVCcRomE6uM4Y6fvT/w\"",
		"mtime": "2026-09-07T11:51:13.688Z",
		"size": 7357,
		"path": "../public/assets/dist-B_UGFlxM.js"
	},
	"/assets/commercial-DQeFzXrM.jpg": {
		"type": "image/jpeg",
		"etag": "\"25cb9-OzM9jF2DGg0csbv8//YUFRAzdL4\"",
		"mtime": "2026-09-07T11:51:13.768Z",
		"size": 154809,
		"path": "../public/assets/commercial-DQeFzXrM.jpg"
	},
	"/assets/faq-CwKvHUjp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25b6-f+mfSiRoR/S+YbWhOW/Pnw3lxqQ\"",
		"mtime": "2026-09-07T11:51:13.691Z",
		"size": 9654,
		"path": "../public/assets/faq-CwKvHUjp.js"
	},
	"/assets/page-sections-ClRR6bbH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c98-GiMAlCuiJ4sBQsNc2BWX9e4irmE\"",
		"mtime": "2026-09-07T11:51:13.694Z",
		"size": 3224,
		"path": "../public/assets/page-sections-ClRR6bbH.js"
	},
	"/assets/residential-DLG-dmAD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11a0-gVovnoBYpn9IRoL1nPGJTh6+W/E\"",
		"mtime": "2026-09-07T11:51:13.716Z",
		"size": 4512,
		"path": "../public/assets/residential-DLG-dmAD.js"
	},
	"/assets/quote-form-CgYs9tKe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d293-thedR7VC6jQqyYxNVf6hHZWcqEQ\"",
		"mtime": "2026-09-07T11:51:13.694Z",
		"size": 53907,
		"path": "../public/assets/quote-form-CgYs9tKe.js"
	},
	"/assets/residential-D_Woa9la.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38-9VRdUcV6D8SMd0+xMb0UIFNvr74\"",
		"mtime": "2026-09-07T11:51:13.718Z",
		"size": 56,
		"path": "../public/assets/residential-D_Woa9la.js"
	},
	"/assets/routes-BuflLmBE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3311-NEdAJODpi42j9rBdVAIyGqRPdwg\"",
		"mtime": "2026-09-07T11:51:13.719Z",
		"size": 13073,
		"path": "../public/assets/routes-BuflLmBE.js"
	},
	"/assets/hero-kitchen-DhYpoEHt.jpg": {
		"type": "image/jpeg",
		"etag": "\"27128-9HEtOkf3l/zpE/A/k53ZzSMfvqQ\"",
		"mtime": "2026-09-07T11:51:13.769Z",
		"size": 160040,
		"path": "../public/assets/hero-kitchen-DhYpoEHt.jpg"
	},
	"/assets/cta-band-D5IOeeC1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"408-zhOjsOrIEvb3i1QE2cZyqMcgKNk\"",
		"mtime": "2026-09-07T11:51:13.687Z",
		"size": 1032,
		"path": "../public/assets/cta-band-D5IOeeC1.js"
	},
	"/assets/residential-Y81u4jS_.jpg": {
		"type": "image/jpeg",
		"etag": "\"29288-tXSC6zG+8az63/pS6qKbMj1cTxs\"",
		"mtime": "2026-09-07T11:51:13.770Z",
		"size": 168584,
		"path": "../public/assets/residential-Y81u4jS_.jpg"
	},
	"/assets/index-CqqgRxxP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59096-cbWlU5tn+wtEYwPP/9oSZheFugo\"",
		"mtime": "2026-09-07T11:51:13.523Z",
		"size": 364694,
		"path": "../public/assets/index-CqqgRxxP.js"
	},
	"/assets/site-DhC9ZWvg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1123b-7ILs280ZUIvl1TX1S0/VMbYkyUY\"",
		"mtime": "2026-09-07T11:51:13.722Z",
		"size": 70203,
		"path": "../public/assets/site-DhC9ZWvg.js"
	},
	"/assets/specialized-services-Df-2qQvN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1072-I68qYekU1642q37nkgqGXHLo+Ck\"",
		"mtime": "2026-09-07T11:51:13.763Z",
		"size": 4210,
		"path": "../public/assets/specialized-services-Df-2qQvN.js"
	},
	"/assets/sparkles-ggdpOzOk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2-khzbx4mLBWZgYqLtNC1m0nTqxmw\"",
		"mtime": "2026-09-07T11:51:13.763Z",
		"size": 482,
		"path": "../public/assets/sparkles-ggdpOzOk.js"
	},
	"/assets/styles-DzXqlZ9q.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1869b-EwnNyUjZQk6cFKZuI+PJ19twf3k\"",
		"mtime": "2026-09-07T11:51:13.770Z",
		"size": 99995,
		"path": "../public/assets/styles-DzXqlZ9q.css"
	},
	"/assets/truck-DjeEN8-6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e0-ITTK/9yQ7eo+pcLtw+kYZi/YBxc\"",
		"mtime": "2026-09-07T11:51:13.767Z",
		"size": 736,
		"path": "../public/assets/truck-DjeEN8-6.js"
	},
	"/assets/tlc-round-logo-DiQtNTpR.png": {
		"type": "image/png",
		"etag": "\"72c0-IEhBqAGGEcnzKReJxpeMN6TTd+Q\"",
		"mtime": "2026-09-07T11:51:13.771Z",
		"size": 29376,
		"path": "../public/assets/tlc-round-logo-DiQtNTpR.png"
	},
	"/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c046-V9vtLYDQyJqxfMjvMEuuHUyR1uo\"",
		"mtime": "2026-08-05T12:32:49.012Z",
		"size": 376902,
		"path": "../public/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.jpg"
	},
	"/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"66ff4-0uvKDVNYGcpjyybb59ybe6eld90\"",
		"mtime": "2026-08-05T12:32:48.853Z",
		"size": 421876,
		"path": "../public/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.jpg"
	},
	"/images/imgi_27_tlc-cleaning-content-home-05-1920w.png": {
		"type": "image/png",
		"etag": "\"5c9f1-VhtRtw6K9Gn44Wu14TQIlYZrgCs\"",
		"mtime": "2026-08-05T12:32:50.039Z",
		"size": 379377,
		"path": "../public/images/imgi_27_tlc-cleaning-content-home-05-1920w.png"
	},
	"/images/imgi_28_477232974_18049620209177391_600603970728610428_n-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"3fbb2-Ht9SOSQfsMsM+llhIK8Bklo/XAE\"",
		"mtime": "2026-08-05T12:32:49.140Z",
		"size": 261042,
		"path": "../public/images/imgi_28_477232974_18049620209177391_600603970728610428_n-1920w.jpg"
	},
	"/images/imgi_35_tlc-cleaning-co-video.jpg": {
		"type": "image/jpeg",
		"etag": "\"772ae-v0lbPPTTzxE+CSuZWKqpY2Pfl78\"",
		"mtime": "2026-08-05T12:32:48.556Z",
		"size": 488110,
		"path": "../public/images/imgi_35_tlc-cleaning-co-video.jpg"
	},
	"/images/imgi_21_tlc-cleaning-hero-home-02-1920w.png": {
		"type": "image/png",
		"etag": "\"bd949-wVA1gYl5PosuByZpuEc7M7Zxq20\"",
		"mtime": "2026-08-05T12:32:50.855Z",
		"size": 776521,
		"path": "../public/images/imgi_21_tlc-cleaning-hero-home-02-1920w.png"
	},
	"/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"83776-vQ+dU/bNjbviq39YS6MCoVDu388\"",
		"mtime": "2026-08-05T12:32:48.732Z",
		"size": 538486,
		"path": "../public/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.jpg"
	},
	"/images/imgi_32_tlc-cleaning-video-02-1920w.png": {
		"type": "image/png",
		"etag": "\"bd949-wVA1gYl5PosuByZpuEc7M7Zxq20\"",
		"mtime": "2026-08-05T12:32:49.941Z",
		"size": 776521,
		"path": "../public/images/imgi_32_tlc-cleaning-video-02-1920w.png"
	},
	"/images/imgi_25_tlc-cleaning-content-home-03-1920w.png": {
		"type": "image/png",
		"etag": "\"13a9d6-vx+nkkkeIe3wwsQ/PHzdsLRtOl4\"",
		"mtime": "2026-08-05T12:32:50.244Z",
		"size": 1288662,
		"path": "../public/images/imgi_25_tlc-cleaning-content-home-03-1920w.png"
	},
	"/images/imgi_26_tlc-cleaning-content-home-04-1920w.png": {
		"type": "image/png",
		"etag": "\"17b235-5/fEwn7pC0t+JzpMXMejghp/fWM\"",
		"mtime": "2026-08-05T12:32:50.569Z",
		"size": 1552949,
		"path": "../public/images/imgi_26_tlc-cleaning-content-home-04-1920w.png"
	},
	"/images/imgi_30_tlc-cleaning-content-home-02-1920w.png": {
		"type": "image/png",
		"etag": "\"1012b1-TZcprd9EHhX0zpy2PYc7Op5PqBk\"",
		"mtime": "2026-08-05T12:32:49.766Z",
		"size": 1053361,
		"path": "../public/images/imgi_30_tlc-cleaning-content-home-02-1920w.png"
	},
	"/images/imgi_34_tlc-cleaning-content-home-07.png": {
		"type": "image/png",
		"etag": "\"2e4d89-OXz453OwxYNwSGxo1JOLTT3HRpU\"",
		"mtime": "2026-08-05T12:32:49.582Z",
		"size": 3034505,
		"path": "../public/images/imgi_34_tlc-cleaning-content-home-07.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_1ztAhF = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_1ztAhF
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
