export type PlayerProps = {
  height: number
  width: number
  videoId: string
  onReady: () => void
  onFullScreenChange: (isFullScreen: boolean) => void
}
