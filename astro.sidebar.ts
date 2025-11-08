import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Top-level groups become tabs.
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
	// Start tab
	group('start', {
		items: [
			'home',
			group('start.welcome', {
				items: [
					'concepts/digitaltransformation',
					'concepts/aitransformation',
					'concepts/architecture',
					'concepts/traditional',
					'concepts/agile',
					'concepts/containers',
					'concepts/trends',
					'concepts/distributed',
					'concepts/fallacies',
					'concepts/lities',
					'c2c-course',
				],
			}),
			group('start.cloud', {
				items: [
					'cloud/intro',
					'cloud/datacenter',
					'cloud/services',
					'cloud/infra',
					group('start.cloud.components', {
						collapsed: true,
						items: [
							'cloud/security',
							'cloud/network',
							'cloud/compute',
							'cloud/storage',
							'cloud/database'
						]
					}),
					'tutorial/0-introduction',
				],
			}),
		],
	}),

	// // AI tab
	// group('ai', {
	// 	items: [
			
	// 	],
	// }),

	// // APIM tab
	// group('apim', {
	// 	items: [
	// 	],
	// }),

	// // Integrations tab
	// group('integrations', {
	// 	items: [
	// 	],
	// }),

	// // Patterns tab
	// group('patterns', {
	// 	items: [
	// 	],
	// }),
] satisfies StarlightUserConfig['sidebar'];
