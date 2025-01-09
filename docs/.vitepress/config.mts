import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "octaneswap",
	description: "Octaneswap docs",
	head: [
		["link", { rel: "icon", href: "https://www.octaneswap.xyz/favicon.ico" }],
	],
	cleanUrls: true,
	themeConfig: {
		search: {
			provider: "algolia",
			options: {
				appId: "...",
				apiKey: "...",
				indexName: "...",
			},
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Docs", link: "/docs/overview" },
			{ text: "Contracts", link: "/contracts/" },
		],

		// sidebar: [
		// 	{
		// 		text: "Examples",
		// 		items: [
		// 			{ text: "Markdown Examples", link: "/markdown-examples" },
		// 			{ text: "Runtime API Examples", link: "/api-examples" },
		// 		],
		// 	},
		// ],
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
