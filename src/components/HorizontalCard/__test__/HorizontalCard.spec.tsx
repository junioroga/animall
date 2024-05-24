import React from 'react'

import { fireEvent, render } from '~/test/test-utils'

import HorizontalCard, { HorizontalCardProps } from '../HorizontalCard'
import { mockCard } from './mock'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}))

describe('HorizontalCard', () => {
  const setup = ({ item }: HorizontalCardProps) => {
    return render(<HorizontalCard item={item} />)
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

    const button = rendered.getByTestId('card-button-horizontal')

    fireEvent.press(button)
    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('AnimeDetails', {
      animeId: mockCard.id,
      title: mockCard.title || mockCard.alternative_titles.en,
      customId: mockCard.customId,
      image: mockCard.main_picture.medium,
    })
  })
})
