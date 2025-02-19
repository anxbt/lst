// export interface StakingToken {
//   id: string;
//   name: string;
//   symbol: string;
//   price: number;
//   marketCap: number;
//   volume24h: number;
//   tvl: number;
//   apy: number;
//   ratio: number; // Ratio to underlying asset
// }

export interface PriceHistory {
  timestamp: number;
  price: number;
}


export interface IStakingToken{
  id: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume24h: number;
  tvl: number;
  apy: number;
  ratio: number;
  platforms: IStakingPlatform[];
  // New fields from CoinGecko
  image: string;
  priceChange24h: number;
  priceChangePercentage24h: number;
  marketCapRank: number;
  high24h: number;
  low24h: number;
  ath: number;
  athChangePercentage: number;
  athDate: string;
  atl: number;
  atlChangePercentage: number;
  atlDate: string;
}
export interface IStakingPlatform {
  name: string;
  fee: number;
  minStake: number;
  apy: number;
}

