import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "octaneswap",
	description: "Octaneswap docs",

	// https://analytics.google.com/analytics/web/
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		[
			"script",
			{
				async: "",
				src: "https://www.googletagmanager.com/gtag/js?id=G-KJVLVXECK1",
			},
		],
		[
			"script",
			{},
			`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KJVLVXECK1');`,
		],
	],
	cleanUrls: true,
	themeConfig: {
		logo: { src: "/logo.png", width: 24, height: 24 },
		search: {
			provider: "algolia",
			options: {
				appId: "VVL2WGP79Z",
				apiKey: "25b49646673de8d7ade9e4b7ff1f3e09",
				indexName: "octaneswap",
			},
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Docs", link: "/docs/overview" },
			{ text: "Contracts", link: "/contracts/" },
		],
		sidebar: {
			"/docs/": [
				{
					text: "Introduction",
					items: [
						{ text: "Overview", link: "/docs/overview" },
						{ text: "Protocol Mechanism", link: "/docs/mechanism" },
					],
				},
				{
					text: "Getting Started",
					items: [
						{
							text: "Connect Wallet",
							link: "/docs/getting-started/connect-wallet",
						},
						{ text: "Bridge Assets", link: "/docs/getting-started/bridge" },
						{ text: "Get Test Tokens", link: "/docs/getting-started/faucet" },
					],
				},
				{
					text: "Protocol",
					items: [
						{ text: "Understanding CLMM", link: "/docs/protocol/clmm" },
						{ text: "How to Swap", link: "/docs/protocol/swap" },
						{ text: "Providing Liquidity", link: "/docs/protocol/liquidity" },
						{ text: "Fee Tiers", link: "/docs/protocol/fees" },
						{ text: "Farming/Staking", link: "/docs/protocol/farming-staking" },
					],
				},
				{
					text: "Games",
					items: [
						{ text: "Prediction Overview", link: "/docs/games/prediction" },
						{ text: "How to Play", link: "/docs/games/how-to-play" },
					],
				},
				{
					text: "Campaigns",
					items: [
						{ text: "Telegram Mini App", link: "/docs/campaigns/telegram-app" },
						{ text: "Tasks & Rewards", link: "/docs/campaigns/tasks" },
						{
							text: "Contribution Program",
							link: "/docs/campaigns/contribute",
						},
					],
				},
			],

			"/contracts/": [
				{
					text: "Smart Contracts",
					items: [
						{ text: "Overview", link: "/contracts/" },
						{ text: "Deployed Addresses", link: "/contracts/addresses" },
					],
				},
				{
					text: "Core",
					items: [
						{ text: "Factory", link: "/contracts/core/factory" },
						{ text: "Pool Deployer", link: "/contracts/core/pool-deployer" },
						{ text: "Pool", link: "/contracts/core/pool" },
					],
				},
				{
					text: "Periphery",
					items: [
						{
							text: "Position Manager",
							link: "/contracts/periphery/position-manager",
						},
						{ text: "Smart Router", link: "/contracts/periphery/smart-router" },
						{ text: "Quoter", link: "/contracts/periphery/quoter" },
					],
				},
				{
					text: "Earn/Reward Protocol",
					items: [
						{ text: "Farming", link: "/contracts/earn/farming" },
						{ text: "Staking", link: "/contracts/earn/staking" },
					],
				},
				{
					text: "Games",
					items: [{ text: "Games", link: "/contracts/games/prediction" }],
				},
				{
					text: "security",
					items: [
						{
							text: "Security Considerations",
							link: "/contracts/security/audits",
						},
					],
				},
			],
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
			{ icon: "twitter", link: "https://x.com/octaneswap" },
		],
	},
});
