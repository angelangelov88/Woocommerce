import { setTransparencyFor } from '../sticky'

let prevScrollY = window.scrollY

export const computeAutoHide = ({
	startPosition,
	stickyContainer,
	isSticky,
	stickyComponents,
}) => {
	let containerInitialHeight = Array.from(
		stickyContainer.querySelectorAll('[data-row]')
	).reduce((sum, el) => sum + el.getBoundingClientRect().height, 0)

	if (window.scrollY < startPosition) {
		prevScrollY = window.scrollY
	}

	if (isSticky && window.scrollY - prevScrollY === 0) {
		document.body.style.setProperty('--headerStickyHeightAnimated', `0px`)
	}

	if (isSticky && window.scrollY - prevScrollY < -5) {
		if (stickyContainer.dataset.sticky.indexOf('yes') === -1) {
			stickyContainer.dataset.sticky = [
				'yes-start',
				...stickyComponents,
			].join(':')

			requestAnimationFrame(() => {
				stickyContainer.dataset.sticky = stickyContainer.dataset.sticky.replace(
					'yes-start',
					'yes-end'
				)

				setTimeout(() => {
					stickyContainer.dataset.sticky = stickyContainer.dataset.sticky.replace(
						'yes-end',
						'yes'
					)
				}, 200)
			})
		}

		setTransparencyFor(stickyContainer, 'no')
		document.body.removeAttribute('style')

		stickyContainer.parentNode.style.setProperty(
			'--minHeight',
			`${containerInitialHeight}px`
		)
	} else {
		if (!isSticky) {
			stickyContainer.dataset.sticky = stickyComponents
				.filter((c) => c !== 'yes-end')
				.join(':')

			stickyContainer.parentNode.removeAttribute('style')

			Array.from(
				stickyContainer.querySelectorAll('[data-row]')
			).map((row) => row.removeAttribute('style'))
			setTransparencyFor(stickyContainer, 'yes')

			document.body.style.setProperty(
				'--headerStickyHeightAnimated',
				`0px`
			)

			prevScrollY = window.scrollY
			return
		}

		if (
			stickyContainer.dataset.sticky.indexOf('yes-hide') === -1 &&
			stickyContainer.dataset.sticky.indexOf('yes:') > -1 &&
			window.scrollY - prevScrollY > 5
		) {
			stickyContainer.dataset.sticky = [
				'yes-hide-start',
				...stickyComponents,
			].join(':')

			document.body.style.setProperty(
				'--headerStickyHeightAnimated',
				`0px`
			)

			requestAnimationFrame(() => {
				stickyContainer.dataset.sticky = stickyContainer.dataset.sticky.replace(
					'yes-hide-start',
					'yes-hide-end'
				)

				setTimeout(() => {
					stickyContainer.dataset.sticky = stickyComponents.join(':')

					stickyContainer.parentNode.removeAttribute('style')

					Array.from(
						stickyContainer.querySelectorAll('[data-row]')
					).map((row) => row.removeAttribute('style'))
					setTransparencyFor(stickyContainer, 'yes')
				}, 200)
			})
		}
	}

	prevScrollY = window.scrollY
}
