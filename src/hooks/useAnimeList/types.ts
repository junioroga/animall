export interface AnimeData {
  node: {
    id: number
    title: string
    main_picture: {
      medium: string
      large: string
    }
    start_date: string
    end_date: string
    num_episodes: number
    mean: number
  }
}

export interface Response {
  data: {
    data: AnimeData[]
    paging: {
      next: string
      previous: string
    }
  }
}
