import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { animeService } from '@services'
import { Fields } from '@services/types'

type AnimeDetailsHookProps = {
  animeId: number
}

export const useAnimeDetails = ({ animeId }: AnimeDetailsHookProps) => {
  const getDetailsAnime = async ({ queryKey }: QueryFunctionContext) => {
    const [, { animeId }] = queryKey as [string, { animeId: number }]
    const data = await animeService.getDetails({
      animeId,
      fields: `${Fields.ID},${Fields.TITLE},${Fields.MAIN_PICTURE},${Fields.ALTERNATIVE_TITLES},${Fields.START_DATE},${Fields.END_DATE},${Fields.SYNOPSIS},${Fields.MEAN},${Fields.RANK},${Fields.POPULARITY},${Fields.NUM_LIST_USERS},${Fields.NUM_SCORING_USERS},${Fields.NSFW},${Fields.CREATED_AT},${Fields.UPDATED_AT},${Fields.MEDIA_TYPE},${Fields.STATUS},${Fields.GENRES},${Fields.MY_LIST_STATUS},${Fields.NUM_EPISODES},${Fields.START_SEASON},${Fields.BROADCAST},${Fields.SOURCE},${Fields.AVERAGE_EPISODE_DURATION},${Fields.RATING},${Fields.PICTURES},${Fields.VIDEOS},${Fields.BACKGROUND},${Fields.RELATED_ANIME},${Fields.RELATED_MANGA},${Fields.RECOMMENDATIONS},${Fields.STUDIOS},${Fields.STATISTICS}`,
    })

    return data
  }

  return useQuery({
    queryKey: ['anime-details', { animeId }],
    queryFn: getDetailsAnime,
    staleTime: Infinity,
  })
}
