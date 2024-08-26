import { animeService } from '@/services'
import { Fields, RankingType } from '@/services/types'
import { animeDetailsMock, animeListMock, animeListRankingMock } from '~/test/mocks/animeListMock'

describe('animeService', () => {
  describe('getAll', () => {
    it('when return anime list', async () => {
      const animeList = await animeService.getAll({
        q: 'Hunter',
        fields: `${Fields.ID},${Fields.TITLE},${Fields.ALTERNATIVE_TITLES},${Fields.MAIN_PICTURE},${Fields.START_DATE},${Fields.END_DATE},${Fields.NUM_EPISODES},${Fields.MEAN}`,
        limit: 4,
        offset: 0,
      })

      expect(animeList.data[0].node.id).toEqual(animeListMock.data[0].node.id)
      expect(animeList.data[1].node.id).toEqual(animeListMock.data[1].node.id)
      expect(animeList.data[2].node.id).toEqual(animeListMock.data[2].node.id)
      expect(animeList.data[3].node.id).toEqual(animeListMock.data[3].node.id)
    })

    it('when return error with no params', async () => {
      const animeList = await animeService.getAll({} as any)
      expect(animeList).toEqual(401)
    })
  })

  describe('getDetails', () => {
    it('when return anime details', async () => {
      const animeDetails = await animeService.getDetails({
        animeId: 11061,
        fields: `${Fields.ID},${Fields.TITLE},${Fields.MAIN_PICTURE},${Fields.ALTERNATIVE_TITLES},${Fields.START_DATE},${Fields.END_DATE},${Fields.SYNOPSIS},${Fields.MEAN},${Fields.RANK},${Fields.POPULARITY},${Fields.NUM_LIST_USERS},${Fields.NUM_SCORING_USERS},${Fields.NSFW},${Fields.CREATED_AT},${Fields.UPDATED_AT},${Fields.MEDIA_TYPE},${Fields.STATUS},${Fields.GENRES},${Fields.MY_LIST_STATUS},${Fields.NUM_EPISODES},${Fields.START_SEASON},${Fields.BROADCAST},${Fields.SOURCE},${Fields.AVERAGE_EPISODE_DURATION},${Fields.RATING},${Fields.PICTURES},${Fields.VIDEOS},${Fields.BACKGROUND},${Fields.RELATED_ANIME},${Fields.RELATED_MANGA},${Fields.RECOMMENDATIONS},${Fields.STUDIOS},${Fields.STATISTICS}`,
      })

      expect(animeDetails.id).toEqual(animeDetailsMock.id)
    })

    it('when return error with no params', async () => {
      const animeDetails = await animeService.getDetails({} as any)
      expect(animeDetails).toEqual(401)
    })
  })

  describe('getRanking', () => {
    it('when return anime ranking list', async () => {
      const animeRankingList = await animeService.getRanking({
        ranking_type: RankingType.ALL,
        fields: `${Fields.ID},${Fields.TITLE},${Fields.ALTERNATIVE_TITLES},${Fields.MAIN_PICTURE},${Fields.MEAN},${Fields.START_DATE},${Fields.GENRES},${Fields.BROADCAST}`,
        limit: 4,
        offset: 0,
      })

      expect(animeRankingList.data[0].ranking.rank).toEqual(
        animeListRankingMock.data[0].ranking.rank
      )
      expect(animeRankingList.data[1].ranking.rank).toEqual(
        animeListRankingMock.data[1].ranking.rank
      )
      expect(animeRankingList.data[2].ranking.rank).toEqual(
        animeListRankingMock.data[2].ranking.rank
      )
      expect(animeRankingList.data[3].ranking.rank).toEqual(
        animeListRankingMock.data[3].ranking.rank
      )
    })

    it('when return error with no params', async () => {
      const animeRankingList = await animeService.getRanking({} as any)
      expect(animeRankingList).toEqual(401)
    })
  })
})
