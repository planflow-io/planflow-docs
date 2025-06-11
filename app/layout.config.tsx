import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0139 30L2 16.0139L16.0139 2L30 16.0139L16.0139 30Z" fill="CurrentColor"/>
</svg>

				Planflow
			</>
		),
	},
	// see https://fumadocs.dev/docs/ui/navigation/links
	links: [],
};
