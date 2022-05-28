export type TopBannerSettingJson = {
  settings: [
    {
      env: 'develop | production',
      banner: [
        {
          pattern: Pattern,
          beginDate: string,
          endDate: string,
          imgSrcList: ImgSrcObj,
        },
      ]
    }
  ]
}

export enum Pattern {
  pt1 = 1,
  pt2 = 2,
  pt3 = 3,
  pt4 = 4,
  pt5 = 5
}

export type PatternObj = {
  ptId: Pattern,
  settingSectionTitle: string,
  bannerCount: number,
}

export const patternsHashMap: PatternObj[] = [
  { ptId: Pattern.pt1, settingSectionTitle: 'Pattern1 BannerSetting', bannerCount: 1 },
  { ptId: Pattern.pt2, settingSectionTitle: 'Pattern2 BannerSetting', bannerCount: 2 },
  { ptId: Pattern.pt3, settingSectionTitle: 'Pattern3 BannerSetting', bannerCount: 1 },
  { ptId: Pattern.pt4, settingSectionTitle: 'Pattern4 BannerSetting', bannerCount: 4 },
  { ptId: Pattern.pt5, settingSectionTitle: 'Pattern5 BannerSetting', bannerCount: 3 },
]



export type ImgSrcObj = {
  src: string,
  transitionDestination: string,
}
