import YoutubePlayer from 'react-native-youtube-iframe'

import { PlayerProps } from './types'

export const Player = ({ height, width, videoId, onReady, onFullScreenChange }: PlayerProps) => (
  <YoutubePlayer
    height={height}
    width={width}
    videoId={videoId}
    onReady={onReady}
    onFullScreenChange={onFullScreenChange}
  />
)
