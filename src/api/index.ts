import getCurrentPriceIn from './getCurrentPriceIn'

export interface Api {
  getCurrentPriceIn: typeof getCurrentPriceIn
}

export const api: Api = {
  getCurrentPriceIn
}
