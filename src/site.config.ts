import type { SiteConfig } from "@/data/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Ông Edit",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Ông Edit",
	// Meta property used as the default description meta property
	description: "Ông này edit video",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "vi",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "vi",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/astro-theme-cactus.netlify.app/webmention",
		pingback: "https://webmention.io/astro-theme-cactus.netlify.app/xmlrpc",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Posts",
		path: "/posts/",
	},
	{
		title: "Use",
		path: "https://ongedit.github.io/use",
	},
	{
		title: "Portfolio",
		path: "https://ongedit.github.io/portfolio",
	},
	{
		title: "Buy Me a Coffee",
		path: "https://ko-fi.com/ongedit",
	},
];
