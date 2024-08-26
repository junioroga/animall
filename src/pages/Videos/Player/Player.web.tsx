import React from 'react'
import YouTube from 'react-youtube'

import { PlayerProps } from './types'

export const Player = ({ height, width, videoId, onReady }: PlayerProps) => (
  <YouTube
    videoId={videoId}
    opts={{
      height,
      width,
    }}
    onReady={onReady}
  />
)
