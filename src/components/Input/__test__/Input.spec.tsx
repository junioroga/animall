import { render } from '~/test/test-utils'

import { Input } from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    const rendered = render(<Input />)
    expect(rendered).toBeTruthy()
  })
})
