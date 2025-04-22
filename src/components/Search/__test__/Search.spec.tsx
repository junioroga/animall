import { mocked } from 'jest-mock'

import { act, fireEvent, render } from '~/test/test-utils'

import { Search, SearchProps } from '../Search'

const mockSetSearch = jest.fn((value) => value)

const setup = (props: SearchProps) => {
  return render(<Search {...props} />)
}

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('Search', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('when input is filled', async () => {
    mocked(mockSetSearch).mockImplementationOnce(() => 'Naruto')
    const { getByTestId } = setup({
      search: 'Naruto',
      setSearch: mockSetSearch,
    })

    const input = getByTestId('test-input-search')

    await act(async () => {
      fireEvent.changeText(input, 'Naruto')
    })

    expect(input.props.value).toEqual('Naruto')
    expect(mockSetSearch).toHaveBeenCalledTimes(1)
  })
})
