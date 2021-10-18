import {
	getRowInitialHeight,
	getRowStickyHeight,
	computeLinearScale,
	clamp,
} from './shrink-utils'

export const shrinkHandleLogo = ({ stickyContainer, startPosition }) => {
	;[...stickyContainer.querySelectorAll('[data-row*="middle"]')].map(
		(row) => {
			if (!row.querySelector('[data-id="logo"] .site-logo-container')) {
				return
			}

			const logo = row.querySelector(
				'[data-id="logo"] .site-logo-container'
			)

			let initialHeight = parseFloat(
				getComputedStyle(logo).getPropertyValue('--maxHeight') || 50
			)

			const stickyShrink = parseFloat(
				getComputedStyle(logo)
					.getPropertyValue('--logoStickyShrink')
					.toString()
					.replace(',', '.') || 1
			)

			const stickyHeight = initialHeight * stickyShrink

			if (stickyShrink === 1) {
				return
			}

			let rowInitialHeight = getRowInitialHeight(row)
			let rowStickyHeight = getRowStickyHeight(row)

			logo.style.setProperty(
				'--logo-shrink-height',
				computeLinearScale(
					[
						startPosition,
						startPosition +
							Math.abs(
								rowInitialHeight === rowStickyHeight
									? initialHeight - stickyHeight
									: rowInitialHeight - rowStickyHeight
							),
					],
					[1, stickyShrink],
					clamp(
						startPosition,
						startPosition +
							Math.abs(
								rowInitialHeight === rowStickyHeight
									? initialHeight - stickyHeight
									: rowInitialHeight - rowStickyHeight
							),

						scrollY
					)
				)
			)
		}
	)
}
