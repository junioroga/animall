import React from 'react'

import { act, fireEvent, render } from '~/test/test-utils'

import VerticalCard, { VerticalCardProps } from '../VerticalCard'
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

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with default values', async () => {
    const { getByText } = setup({ item: mockCard })

    await act(async () => {
      expect(getByText(mockCard.title)).toBeTruthy()
    })
  })

  it('pressing card button', async () => {
    const { getByTestId } = setup({ item: mockCard })

    const button = getByTestId('card-button-vertical')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('AnimeDetails', {
      animeId: mockCard.id,
      title: mockCard.title || mockCard.alternative_titles.en,
      customId: mockCard.customId,
      image: mockCard.main_picture.medium,
    })
  })

  it('navigating without title and image', async () => {
    const { getByTestId } = setup({
      item: {
        ...mockCard,
        title: '',
        alternative_titles: {
          ...mockCard.alternative_titles,
          en: '',
        },
        main_picture: {
          ...mockCard.main_picture,
          medium: '',
        },
      },
    })

    const button = getByTestId('card-button-vertical')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('AnimeDetails', {
      animeId: mockCard.id,
      title: '',
      customId: mockCard.customId,
      image: '',
    })
  })

  it('pressing card button with push navigation', async () => {
    const { getByTestId } = setup({ item: mockCard, pushNavigation: true })

    const button = getByTestId('card-button-vertical')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(mockPush).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith('AnimeDetails', {
      animeId: mockCard.id,
      title: mockCard.title || mockCard.alternative_titles.en,
      customId: mockCard.customId,
      image: mockCard.main_picture.medium,
    })
  })
})
