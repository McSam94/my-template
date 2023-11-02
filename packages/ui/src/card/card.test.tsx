import * as React from 'react'
import { expect, test, describe } from 'vitest'
import { render } from '@testing-library/react'
import { Card } from './index'
import '@testing-library/jest-dom'

describe('Button components', () => {
	test('function::href', () => {
		const { getByRole } = render(
			<Card title="Click me" href="https://google.com">
				Click me
			</Card>,
		)

		const cardLink = getByRole('link')
		expect(cardLink.getAttribute('href')).toBe(
			`https://google.com?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`,
		)
	})
})
