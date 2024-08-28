import { View as MockView, ViewProps } from 'react-native'

import { RouteProp } from '@react-navigation/native'

import { RootStackParamListHome } from '@/navigators/Home'
import { act, fireEvent, render } from '~/test/test-utils'

import { Videos } from '../Videos'
import { videosMock } from './mock'

jest.mock('react-native-webview', () => {
  const WebView = (props: ViewProps) => <MockView {...props} />

  return {
    WebView,
    default: WebView,
    __esModule: true,
  }
})

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

  it('render screen correctly', async () => {
    const rendered = setup()

    await act(async () => {
      expect(rendered).toBeTruthy()
    })
  })

  it('render videos and press on first video', async () => {
    const { getByTestId } = setup()

    const button = getByTestId('button-video-14130')

    await act(async () => {
      fireEvent.press(button)
    })

    expect(button).toBeTruthy()
  })
})
