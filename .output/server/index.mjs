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
		"etag": "\"ca-1Ccj8CyMj7lrrA9EzhuUxVaBs4Y\"",
		"mtime": "2026-09-09T00:35:40.748Z",
		"size": 202,
		"path": "../public/robots.txt"
	},
	"/assets/about-lead-fix-20260909-BMELk0_m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"273c-yfRz0UylI9uMHBJlfqcaoBq/hOM\"",
		"mtime": "2026-09-24T22:26:45.146Z",
		"size": 10044,
		"path": "../public/assets/about-lead-fix-20260909-BMELk0_m.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"3e0-iUXwVK8iiO/2I7umjGpfSp6WiC0\"",
		"mtime": "2026-09-09T00:35:40.749Z",
		"size": 992,
		"path": "../public/sitemap.xml"
	},
	"/assets/additional-services-lead-fix-20260909-DWEOx_po.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"172e-jlFivP9sn2Ym4KfvT8qCQUWpWmQ\"",
		"mtime": "2026-09-24T22:26:45.154Z",
		"size": 5934,
		"path": "../public/assets/additional-services-lead-fix-20260909-DWEOx_po.js"
	},
	"/assets/arrow-up-right-lead-fix-20260909-Db9_llqj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11d-M+50wm5vGRpinjHdnNjoNfDy0/E\"",
		"mtime": "2026-09-24T22:26:45.154Z",
		"size": 285,
		"path": "../public/assets/arrow-up-right-lead-fix-20260909-Db9_llqj.js"
	},
	"/assets/AnimatedSection-lead-fix-20260909-BUZ8ohLV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"375-eJs9s9Fq1+HngcdUfelcGwKV3/8\"",
		"mtime": "2026-09-24T22:26:45.145Z",
		"size": 885,
		"path": "../public/assets/AnimatedSection-lead-fix-20260909-BUZ8ohLV.js"
	},
	"/assets/badge-check-lead-fix-20260909-B8k6D6tz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-SZkwE1ACgI0bDZjWBmutce2IBnY\"",
		"mtime": "2026-09-24T22:26:45.155Z",
		"size": 322,
		"path": "../public/assets/badge-check-lead-fix-20260909-B8k6D6tz.js"
	},
	"/assets/check-lead-fix-20260909-Bglfbz3e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-4jFIhgdoAwscLqxFkpaKQ7p3KuA\"",
		"mtime": "2026-09-24T22:26:45.156Z",
		"size": 130,
		"path": "../public/assets/check-lead-fix-20260909-Bglfbz3e.js"
	},
	"/assets/commercial-lead-fix-20260909-Cn2DVHvW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e98-i8vv4HMeQauL88Dz1u/Y4bNiwCY\"",
		"mtime": "2026-09-24T22:26:45.157Z",
		"size": 3736,
		"path": "../public/assets/commercial-lead-fix-20260909-Cn2DVHvW.js"
	},
	"/assets/commercial-DmhNc2lk.webp": {
		"type": "image/webp",
		"etag": "\"19a0e-BKPSR45+zQyrd+Ivh6yL2Xqatvw\"",
		"mtime": "2026-09-24T22:26:45.264Z",
		"size": 104974,
		"path": "../public/assets/commercial-DmhNc2lk.webp"
	},
	"/assets/contact-lead-fix-20260909-Clw95nDF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4863-mg6y9cJpr1tFmfLwcG+10YNIAyc\"",
		"mtime": "2026-09-24T22:26:45.158Z",
		"size": 18531,
		"path": "../public/assets/contact-lead-fix-20260909-Clw95nDF.js"
	},
	"/assets/cta-band-lead-fix-20260909-CPQZ-ZOL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"478-sYPmg7YJXiw/Zp9BwROfK7qBLQo\"",
		"mtime": "2026-09-24T22:26:45.171Z",
		"size": 1144,
		"path": "../public/assets/cta-band-lead-fix-20260909-CPQZ-ZOL.js"
	},
	"/assets/dist-lead-fix-20260909-DaMDN6sF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25c3-pvBB+bc0fYWfKuRxABnJldenQH8\"",
		"mtime": "2026-09-24T22:26:45.172Z",
		"size": 9667,
		"path": "../public/assets/dist-lead-fix-20260909-DaMDN6sF.js"
	},
	"/assets/faq-lead-fix-20260909-CrpL2jvW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd-gnOtrmAJMiwPAuDg4dNEFlauK2k\"",
		"mtime": "2026-09-24T22:26:45.174Z",
		"size": 205,
		"path": "../public/assets/faq-lead-fix-20260909-CrpL2jvW.js"
	},
	"/assets/free-estimate-lead-fix-20260909-rHmkcWqt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd62-rqsid3FqR+IOJwtGWcX4c1aR5lA\"",
		"mtime": "2026-09-24T22:26:45.175Z",
		"size": 56674,
		"path": "../public/assets/free-estimate-lead-fix-20260909-rHmkcWqt.js"
	},
	"/assets/hero-kitchen-lead-fix-20260909-Dqf9tC33.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-YBqyRya9XNnG4wNfgRlToSdsirg\"",
		"mtime": "2026-09-24T22:26:45.200Z",
		"size": 58,
		"path": "../public/assets/hero-kitchen-lead-fix-20260909-Dqf9tC33.js"
	},
	"/assets/hero-kitchen-_d02PDz6.webp": {
		"type": "image/webp",
		"etag": "\"164c0-jMnWYWtYobeKYGeJ6HC6Gu/+CUk\"",
		"mtime": "2026-09-24T22:26:45.265Z",
		"size": 91328,
		"path": "../public/assets/hero-kitchen-_d02PDz6.webp"
	},
	"/assets/page-sections-lead-fix-20260909-CG6c_ypE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf9-2OBPAFx2P5jlb4ySDzmKVeVSgr0\"",
		"mtime": "2026-09-24T22:26:45.201Z",
		"size": 3321,
		"path": "../public/assets/page-sections-lead-fix-20260909-CG6c_ypE.js"
	},
	"/assets/residential-DEePcMF4.webp": {
		"type": "image/webp",
		"etag": "\"1f216-uHRQkmwpWnUNp/KIAOOeItQVWIo\"",
		"mtime": "2026-09-24T22:26:45.265Z",
		"size": 127510,
		"path": "../public/assets/residential-DEePcMF4.webp"
	},
	"/assets/residential-lead-fix-20260909-D8_90r4U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-6FyNVqTqJKZ/NspREaFQ0Ac+1Hc\"",
		"mtime": "2026-09-24T22:26:45.203Z",
		"size": 57,
		"path": "../public/assets/residential-lead-fix-20260909-D8_90r4U.js"
	},
	"/assets/index-D6w-hwzW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59ee0-K5TY0/Cp2UX8/T73fuuD487/iyY\"",
		"mtime": "2026-09-24T22:26:44.987Z",
		"size": 368352,
		"path": "../public/assets/index-D6w-hwzW.js"
	},
	"/assets/residential-lead-fix-20260909-2gpzjFHE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130f-GUziXDFMoszCx7YUoZd3sf/Fghk\"",
		"mtime": "2026-09-24T22:26:45.202Z",
		"size": 4879,
		"path": "../public/assets/residential-lead-fix-20260909-2gpzjFHE.js"
	},
	"/assets/rose-julliana-portrait-C0Zn22LQ.webp": {
		"type": "image/webp",
		"etag": "\"3281c-vVG+i/qlKi6LHBZp/nPOdbNeKIs\"",
		"mtime": "2026-09-24T22:26:45.266Z",
		"size": 206876,
		"path": "../public/assets/rose-julliana-portrait-C0Zn22LQ.webp"
	},
	"/assets/rose-julliana-story-DGYLKzNV.webp": {
		"type": "image/webp",
		"etag": "\"15a7a-8SEt9RqsZ3fgOwWF1Oji70ev4C4\"",
		"mtime": "2026-09-24T22:26:45.267Z",
		"size": 88698,
		"path": "../public/assets/rose-julliana-story-DGYLKzNV.webp"
	},
	"/assets/routes-lead-fix-20260909-DMF8-Ec1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b17-pvNo8KCVmVBkl7cELE7Pmp5HVYU\"",
		"mtime": "2026-09-24T22:26:45.204Z",
		"size": 27415,
		"path": "../public/assets/routes-lead-fix-20260909-DMF8-Ec1.js"
	},
	"/assets/service-story-lead-fix-20260909-wEhigIc8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1161-r7+od53Q603EUvk2m3cJuDwRYTc\"",
		"mtime": "2026-09-24T22:26:45.216Z",
		"size": 4449,
		"path": "../public/assets/service-story-lead-fix-20260909-wEhigIc8.js"
	},
	"/assets/shield-check-lead-fix-20260909-C63j1NV6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146-vH2kHB6VWq8JJ2og6Q5CQoH3xro\"",
		"mtime": "2026-09-24T22:26:45.218Z",
		"size": 326,
		"path": "../public/assets/shield-check-lead-fix-20260909-C63j1NV6.js"
	},
	"/assets/site-lead-fix-20260909-DcGKvOSK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee3b-DHZbjEBNuBKDPbLB3DxuFTfDeZ8\"",
		"mtime": "2026-09-24T22:26:45.218Z",
		"size": 60987,
		"path": "../public/assets/site-lead-fix-20260909-DcGKvOSK.js"
	},
	"/assets/specialized-services-lead-fix-20260909-D8haW7jm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e5-5dZkQoAGSopY2bYZVhCT962ycsM\"",
		"mtime": "2026-09-24T22:26:45.258Z",
		"size": 4325,
		"path": "../public/assets/specialized-services-lead-fix-20260909-D8haW7jm.js"
	},
	"/assets/tlc-round-logo-_jaL7FRo.webp": {
		"type": "image/webp",
		"etag": "\"1f6c-QAzSnGtWvjCk8E7w+3cySUETmFg\"",
		"mtime": "2026-09-24T22:26:45.268Z",
		"size": 8044,
		"path": "../public/assets/tlc-round-logo-_jaL7FRo.webp"
	},
	"/assets/truck-lead-fix-20260909-Bm-v0OMx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e3-Tg205IXC7pcVnPdZR8N6fWESoGE\"",
		"mtime": "2026-09-24T22:26:45.262Z",
		"size": 995,
		"path": "../public/assets/truck-lead-fix-20260909-Bm-v0OMx.js"
	},
	"/assets/styles-CzZCPX0l.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d2e6-Auug2CBKhOrVqWv3iQnDhSjTFLo\"",
		"mtime": "2026-09-24T22:26:45.267Z",
		"size": 119526,
		"path": "../public/assets/styles-CzZCPX0l.css"
	},
	"/assets/useRouter-lead-fix-20260909-CGWhr_yp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"234e-6ctP3WgFm21qCkLBVU6mAZhNccE\"",
		"mtime": "2026-09-24T22:26:45.262Z",
		"size": 9038,
		"path": "../public/assets/useRouter-lead-fix-20260909-CGWhr_yp.js"
	},
	"/videos/commercial-cleaning-poster.webp": {
		"type": "image/webp",
		"etag": "\"ba20-+t/au19MTVRDsj+V6PFjUbwHO0o\"",
		"mtime": "2026-09-24T10:51:24.765Z",
		"size": 47648,
		"path": "../public/videos/commercial-cleaning-poster.webp"
	},
	"/videos/residential-cleaning-poster.webp": {
		"type": "image/webp",
		"etag": "\"7ef0-faBFqADXXuYmwm98Ak4aP5usijM\"",
		"mtime": "2026-09-24T10:51:24.868Z",
		"size": 32496,
		"path": "../public/videos/residential-cleaning-poster.webp"
	},
	"/images/imgi_21_tlc-cleaning-hero-home-02-1920w.webp": {
		"type": "image/webp",
		"etag": "\"906c-6Lg0ZvxBjqxWEAhizcGmXDl22sU\"",
		"mtime": "2026-09-09T22:04:39.649Z",
		"size": 36972,
		"path": "../public/images/imgi_21_tlc-cleaning-hero-home-02-1920w.webp"
	},
	"/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.webp": {
		"type": "image/webp",
		"etag": "\"2a108-RqopW4oIn8g2MiHOKC6kC64dyYE\"",
		"mtime": "2026-09-09T22:04:40.124Z",
		"size": 172296,
		"path": "../public/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.webp"
	},
	"/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c046-V9vtLYDQyJqxfMjvMEuuHUyR1uo\"",
		"mtime": "2026-08-05T12:32:49.012Z",
		"size": 376902,
		"path": "../public/images/imgi_23_tlc-cleaning-co-home-content-02-1920w.jpg"
	},
	"/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.webp": {
		"type": "image/webp",
		"etag": "\"442ee-6QCDOWE+oR9d1YvoTAuqPuIFPQg\"",
		"mtime": "2026-09-09T22:04:39.915Z",
		"size": 279278,
		"path": "../public/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.webp"
	},
	"/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.webp": {
		"type": "image/webp",
		"etag": "\"35ade-3QqQohKnmdiLokSsmRwUqHafMA4\"",
		"mtime": "2026-09-09T22:04:40.353Z",
		"size": 219870,
		"path": "../public/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.webp"
	},
	"/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"66ff4-0uvKDVNYGcpjyybb59ybe6eld90\"",
		"mtime": "2026-08-05T12:32:48.853Z",
		"size": 421876,
		"path": "../public/images/imgi_24_tlc-cleaning-co-home-content-03-1920w.jpg"
	},
	"/images/imgi_25_tlc-cleaning-content-home-03-1920w.webp": {
		"type": "image/webp",
		"etag": "\"1163e-NE6Unri0j54auEG/AP+rP8YOOjI\"",
		"mtime": "2026-09-09T22:04:40.516Z",
		"size": 71230,
		"path": "../public/images/imgi_25_tlc-cleaning-content-home-03-1920w.webp"
	},
	"/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.jpg": {
		"type": "image/jpeg",
		"etag": "\"83776-vQ+dU/bNjbviq39YS6MCoVDu388\"",
		"mtime": "2026-08-05T12:32:48.732Z",
		"size": 538486,
		"path": "../public/images/imgi_22_tlc-cleaning-co-home-content-01-1920w.jpg"
	},
	"/images/imgi_21_tlc-cleaning-hero-home-02-1920w.png": {
		"type": "image/png",
		"etag": "\"bd949-wVA1gYl5PosuByZpuEc7M7Zxq20\"",
		"mtime": "2026-08-05T12:32:50.855Z",
		"size": 776521,
		"path": "../public/images/imgi_21_tlc-cleaning-hero-home-02-1920w.png"
	},
	"/images/imgi_26_tlc-cleaning-content-home-04-1920w.webp": {
		"type": "image/webp",
		"etag": "\"16744-BlSI8cjN4DIpzsnI+AwcYiA2Wfw\"",
		"mtime": "2026-09-09T22:04:40.694Z",
		"size": 91972,
		"path": "../public/images/imgi_26_tlc-cleaning-content-home-04-1920w.webp"
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
	"/images/imgi_27_tlc-cleaning-content-home-05-1920w.webp": {
		"type": "image/webp",
		"etag": "\"6ba0-2il66s5Jht7A1bm/zrJ7zufD3s8\"",
		"mtime": "2026-09-09T22:04:40.843Z",
		"size": 27552,
		"path": "../public/images/imgi_27_tlc-cleaning-content-home-05-1920w.webp"
	},
	"/images/imgi_27_tlc-cleaning-content-home-05-1920w.png": {
		"type": "image/png",
		"etag": "\"5c9f1-VhtRtw6K9Gn44Wu14TQIlYZrgCs\"",
		"mtime": "2026-08-05T12:32:50.039Z",
		"size": 379377,
		"path": "../public/images/imgi_27_tlc-cleaning-content-home-05-1920w.png"
	},
	"/images/imgi_28_477232974_18049620209177391_600603970728610428_n-1920w.webp": {
		"type": "image/webp",
		"etag": "\"1c78a-C3eHvX3X6F+DxtVWvIAh88gkpbo\"",
		"mtime": "2026-09-09T22:04:41.016Z",
		"size": 116618,
		"path": "../public/images/imgi_28_477232974_18049620209177391_600603970728610428_n-1920w.webp"
	},
	"/images/imgi_32_tlc-cleaning-video-02-1920w.webp": {
		"type": "image/webp",
		"etag": "\"906c-6Lg0ZvxBjqxWEAhizcGmXDl22sU\"",
		"mtime": "2026-09-09T22:04:41.337Z",
		"size": 36972,
		"path": "../public/images/imgi_32_tlc-cleaning-video-02-1920w.webp"
	},
	"/images/imgi_30_tlc-cleaning-content-home-02-1920w.webp": {
		"type": "image/webp",
		"etag": "\"b156-0QV/MQCuLFKBMCtqGC7GHiYjDcE\"",
		"mtime": "2026-09-09T22:04:41.183Z",
		"size": 45398,
		"path": "../public/images/imgi_30_tlc-cleaning-content-home-02-1920w.webp"
	},
	"/images/imgi_34_tlc-cleaning-content-home-07.webp": {
		"type": "image/webp",
		"etag": "\"13642-Nfrw6Tm6d3KiodWLsj2kSN4M8XI\"",
		"mtime": "2026-09-09T22:04:41.553Z",
		"size": 79426,
		"path": "../public/images/imgi_34_tlc-cleaning-content-home-07.webp"
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
	"/images/imgi_35_tlc-cleaning-co-video.webp": {
		"type": "image/webp",
		"etag": "\"4dfde-cM6uJ40EMVsJ4vW/nIFcPDOnw5A\"",
		"mtime": "2026-09-09T22:04:41.838Z",
		"size": 319454,
		"path": "../public/images/imgi_35_tlc-cleaning-co-video.webp"
	},
	"/images/imgi_32_tlc-cleaning-video-02-1920w.png": {
		"type": "image/png",
		"etag": "\"bd949-wVA1gYl5PosuByZpuEc7M7Zxq20\"",
		"mtime": "2026-08-05T12:32:49.941Z",
		"size": 776521,
		"path": "../public/images/imgi_32_tlc-cleaning-video-02-1920w.png"
	},
	"/images/imgi_30_tlc-cleaning-content-home-02-1920w.png": {
		"type": "image/png",
		"etag": "\"1012b1-TZcprd9EHhX0zpy2PYc7Op5PqBk\"",
		"mtime": "2026-08-05T12:32:49.766Z",
		"size": 1053361,
		"path": "../public/images/imgi_30_tlc-cleaning-content-home-02-1920w.png"
	},
	"/videos/residential-cleaning.mp4": {
		"type": "video/mp4",
		"etag": "\"31d665-1Rr+21C/JJk/nav0EO0niOz+EHo\"",
		"mtime": "2026-09-24T10:51:17.654Z",
		"size": 3266149,
		"path": "../public/videos/residential-cleaning.mp4"
	},
	"/videos/commercial-cleaning.mp4": {
		"type": "video/mp4",
		"etag": "\"389a0d-RKanqVzKqG6Bidg6QpP9Wu09OVM\"",
		"mtime": "2026-09-24T10:51:00.788Z",
		"size": 3709453,
		"path": "../public/videos/commercial-cleaning.mp4"
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
