import { setTransparencyFor } from '../sticky'

import { shrinkHandleLogo } from './shrink-handle-logo'
import { shrinkHandleMiddleRow } from './shrink-handle-middle-row'

import { getRowInitialHeight } from './shrink-utils'

export const computeShrink = ({
	stickyContainer,
	isSticky,
	startPosition,
	stickyComponents,
}) => {
	let containerInitialHeight = Array.from(
		stickyContainer.querySelectorAll('[data-row]')
	).reduce((sum, el) => sum + el.getBoundingClientRect().height, 0)

	if (startPosition === 0 && window.scrollY === 0) {
		stickyContainer.dataset.sticky = ['fixed', ...stickyComponents].join(
			':'
		)

		stickyContainer.parentNode.style.setProperty(
			'--minHeight',
			`${containerInitialHeight}px`
		)
	}

	if (isSticky) {
		if (stickyComponents.indexOf('yes') > -1) {
			return
		}

		setTransparencyFor(stickyContainer, 'no')

		stickyContainer.parentNode.style.setProperty(
			'--minHeight',
			`${containerInitialHeight}px`
		)

		stickyContainer.dataset.sticky = ['yes', ...stickyComponents].join(':')

		shrinkHandleLogo({ stickyContainer, startPosition })
		shrinkHandleMiddleRow({
			stickyContainer,
			containerInitialHeight,
			startPosition,
		})

		document.body.style.setProperty(
			'--headerStickyHeightAnimated',
			`${parseInt(stickyContainer.getBoundingClientRect().height)}px`
		)
	} else {
		let containerInitialHeight = Array.from(
			stickyContainer.querySelectorAll('[data-row]')
		).reduce((sum, el) => {
			return sum + getRowInitialHeight(el)
		}, 0)

		document.body.removeAttribute('style')

		Array.from(stickyContainer.querySelectorAll('[data-row]')).map((row) =>
			row.removeAttribute('style')
		)

		Array.from(
			stickyContainer.querySelectorAll(
				'[data-row*="middle"] .site-logo-container'
			)
		).map((el) => el.removeAttribute('style'))

		setTransparencyFor(stickyContainer, 'yes')

		stickyContainer.parentNode.style.setProperty(
			'--minHeight',
			`${containerInitialHeight}px`
		)

		if (startPosition === 0 && window.scrollY === 0) {
			stickyContainer.dataset.sticky = [
				'fixed',
				...stickyComponents,
			].join(':')
		} else {
			stickyContainer.parentNode.removeAttribute('style')
			stickyContainer.dataset.sticky = stickyComponents.join(':')
		}
	}
}
