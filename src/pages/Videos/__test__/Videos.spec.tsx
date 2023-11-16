import { RouteProp } from '@react-navigation/native'

import { RootStackParamListHome } from '@navigators/Home'
import { fireEvent, render } from '@test/test-utils'

import { Videos } from '../Videos'
import { videosMock } from './mock'

describe('Videos', () => {
  const setup = () => {
    const navigation = jest.requireActual('@react-navigation/native')
    const route = {
      params: {
        videos: videosMock,
        pressedVideo: videosMock[0],
      },
    } as RouteProp<RootStackParamListHome, 'Videos'>

    return render(<Videos route={route} navigation={navigation} />)
  }

  it('render screen correctly', () => {
    const rendered = setup()

    expect(rendered).toBeTruthy()
  })

  it('render videos and press on first video', () => {
    const { getByTestId } = setup()

    const button = getByTestId('button-video-14130')

    fireEvent.press(button)

    expect(button).toBeTruthy()
  })
})
