import React from 'react'

import { fireEvent, render } from '~/test/test-utils'

import { VerticalCard, VerticalCardProps } from '../VerticalCard'
import { mockCard } from './mock'

const mockNavigate = jest.fn()
const mockPush = jest.fn()

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate, push: mockPush }),
}))

describe('VerticalCard', () => {
  const setup = ({ item, pushNavigation }: VerticalCardProps) => {
    return render(<VerticalCard item={item} pushNavigation={pushNavigation} />)
  }

  it('renders with default values', () => {
    const rendered = setup({ item: mockCard })

    expect(rendered.getByText(mockCard.title)).toBeTruthy()
  })

  it('renders with alternative titles', () => {
    mockCard.title = ''
    const rendered = setup({ item: mockCard })

    expect(rendered.getByText(mockCard.alternative_titles.en)).toBeTruthy()
  })

  it('pressing card button', () => {
    const rendered = setup({ item: mockCard })

    const button = rendered.getByTestId('card-button-vertical')

    fireEvent.press(button)
    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('AnimeDetails', {
      animeId: mockCard.id,
      title: mockCard.title || mockCard.alternative_titles.en,
    })
  })
})
