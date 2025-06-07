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
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.6868 29.549C16.8572 30.3786 15.5125 30.3792 14.682 29.5505L2.796 17.6881C1.96442 16.8582 1.96375 15.511 2.79451 14.6803L14.6805 2.79426C15.5113 1.9635 16.8584 1.96417 17.6883 2.79575L29.5507 14.6818C30.3795 15.5122 30.3788 16.857 29.5493 17.6866L17.6868 29.549Z"
						fill="white"
					/>
					<mask
						id="mask0_786_21878"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="2"
						y="2"
						width="29"
						height="29">
						<path
							d="M17.6868 29.549C16.8572 30.3786 15.5125 30.3792 14.682 29.5505L2.796 17.6881C1.96442 16.8582 1.96375 15.511 2.79451 14.6803L14.6805 2.79426C15.5113 1.9635 16.8584 1.96417 17.6883 2.79575L29.5507 14.6818C30.3795 15.5122 30.3788 16.857 29.5493 17.6866L17.6868 29.549Z"
							fill="#D9D9D9"
						/>
					</mask>
					<g mask="url(#mask0_786_21878)">
						<path
							opacity="0.9"
							d="M27.5752 2.17163V30.1716H29.3305L29.3306 2.17163L27.5752 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.8"
							d="M25.8204 2.17163L25.8203 30.1716H27.5757V2.17163L25.8204 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.6"
							d="M24.0831 2.17163L24.083 30.1716H25.8384L25.8385 2.17163L24.0831 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.45"
							d="M22.3447 2.17163V30.1716H24.1L24.1001 2.17163L22.3447 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.35"
							d="M20.6075 2.17163L20.6074 30.1716H22.3628L22.3629 2.17163L20.6075 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.3"
							d="M18.8682 2.17163V30.1716H20.6234L20.6235 2.17163L18.8682 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.25"
							d="M17.131 2.17163L17.1309 30.1716H18.8862V2.17163L17.131 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.2"
							d="M15.3937 2.17163L15.3936 30.1716H17.1489L17.149 2.17163L15.3937 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.15"
							d="M13.6562 2.17163V30.1716H15.4115L15.4116 2.17163L13.6562 2.17163Z"
							fill="CurrentColor"
						/>
						<path
							opacity="0.1"
							d="M11.9181 2.17163L11.918 30.1716H13.6733V2.17163L11.9181 2.17163Z"
							fill="CurrentColor"
						/>
					</g>
					<path
						d="M14.6809 2.79438C15.5116 1.9637 16.8579 1.96406 17.6879 2.79541L29.551 14.6814C30.3796 15.5118 30.3785 16.8568 29.5489 17.6863L17.6869 29.5484L17.526 29.6948C16.7473 30.3301 15.6233 30.3302 14.8438 29.6958L14.6819 29.5505L2.79593 17.6873C2.01647 16.9092 1.967 15.6767 2.64854 14.8412L2.79489 14.6803L14.6809 2.79438ZM16.7859 3.69638C16.454 3.36391 15.9152 3.36354 15.5829 3.69534L3.69587 15.5824C3.36405 15.9146 3.36443 16.4535 3.69691 16.7854L15.5829 28.6474C15.915 28.9789 16.453 28.9783 16.7848 28.6464L28.6469 16.7843C28.9788 16.4525 28.9795 15.9145 28.648 15.5824L16.7859 3.69638Z"
						fill="CurrentColor"
					/>
				</svg>
				Planflow
			</>
		),
	},
	// see https://fumadocs.dev/docs/ui/navigation/links
	links: [],
};
