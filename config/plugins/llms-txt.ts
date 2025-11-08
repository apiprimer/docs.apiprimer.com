import starlightLlmsTxt from 'starlight-llms-txt';

/** Starlight plugin that sets up `starlight-llms-txt` with configuration for the Astro docs. */
export const starlightPluginLlmsTxt = () =>
	starlightLlmsTxt({
		// Basic information about the docs and Astro to display in the main `llms.txt` entry file.
		projectName: 'API Primer',
		description: 'API Primer is your go-to source for API management news and tutorials',
		details: [
			'- Provide clear, concise, and up-to-date documentation to help users get the most out of API Primer.',
			'- Includes practical guides, how-tos, and reference materials to support developers at all levels.',
			'- Get the latest news and trends in API management to stay informed and ahead of the curve.',
			'- Courses and tutorials designed to help you master API management concepts and best practices.',
		].join('\n'),
		optionalLinks: [
			{
				label: 'API Primer Blog',
				url: 'https://apiprimer.com/blog/articles',
				description: 'the latest news about api management',
			},
		],

		// Create custom subsets of docs to break things up.
		customSets: [
			{
				label: 'Digital Transformation Concepts',
				description: 'Basic concepts and overviews of digital transformation',
				paths: ['en/concepts/**'],
			},
			{
				label: 'Cloud Fundamentals',
				description: 'Learning the basics of cloud computing and services',
				paths: ['en/cloud/**'],
			},
			{
				label: 'Build in cloud',
				description: 'a step-by-step guide to building in cloud with AWS',
				paths: ['en/tutorial/**'],
			},
			{
				label: 'API Management Concepts',
				description: 'Learn the core concepts of API management',
				paths: ['en/apim/**'],
			},
			{
				label: 'AI',
				description: 'Learn how AI is transforming the world',
				paths: ['en/ai/**'],
			},
			{
				label: 'Integrations',
				description:
					'Learn the integration concepts in the digital',
				paths: ['en/integration/**'],
			},
			{
				label: 'Patterns',
				description:
					'Learn the design patterns in API management',
				paths: ['en/patterns/**'],
			},
		],

		// Control the order of pages in output files.
		promote: [
			'en/concepts/digitaltransformation',
			'en/cloud',
			'en/ai',
			'en/integrations',
			'en/apim',
			'en/patterns',
		],

		// Exclude pages from the abridged `llms-small.txt` file designed for smaller context windows.
		exclude: [
			// Landing page doesn’t really include any helpful content on its own, so it is excluded.
			'en/home',
		],
	});
