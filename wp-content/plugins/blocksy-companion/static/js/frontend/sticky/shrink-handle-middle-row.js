import {
	getRowInitialHeight,
	getRowStickyHeight,
	computeLinearScale,
	clamp,
} from './shrink-utils'

export const shrinkHandleMiddleRow = ({
	stickyContainer,
	containerInitialHeight,
	startPosition,
}) => {
	let containerStickyHeight = Array.from(
		stickyContainer.querySelectorAll('[data-row]')
	).reduce((sum, el, index) => sum + getRowStickyHeight(el), 0)

	if (
		containerStickyHeight === containerInitialHeight ||
		!stickyContainer.querySelector('[data-row*="middle"]')
	) {
		return
	}

	;[stickyContainer.querySelector('[data-row*="middle"]')].map((row) => {
		let rowInitialHeight = getRowInitialHeight(row)
		let rowStickyHeight = getRowStickyHeight(row)

		if (rowInitialHeight !== rowStickyHeight) {
			row.style.setProperty(
				'--shrinkHeight',
				`${computeLinearScale(
					[
						startPosition,
						startPosition +
							Math.abs(rowInitialHeight - rowStickyHeight),
					],
					[rowInitialHeight, rowStickyHeight],
					clamp(
						startPosition,

						startPosition +
							Math.abs(rowInitialHeight - rowStickyHeight),

						scrollY
					)
				)}px`
			)
		}
	})
}
