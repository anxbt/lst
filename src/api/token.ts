const API_ENDPOINT="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=liquid-staking-tokens&order=market_cap_desc"
import { IStakingToken } from "../types"
export const fetchTokens=async():Promise<IStakingToken[]>=>{
    try{
        const response=await fetch(API_ENDPOINT)
        if(!response.ok){
            throw new Error("Failed to fetch tokens")
        }
        const data=await response.json();
        //console.log(data)
        return data.map((token:IStakingToken)=>({   
            id:token.id,
            symbol:token.symbol,
            Name:token.name,
            image:token.image,
            currentPrice:token.current_price||null,
            marketCap:token.market_cap,
            marketCapRank:token.market_cap_rank,
            totalVolume:token.total_volume,
            high24h:token.high_24h,
            low24h:token.low_24h,
            priceChange24h:token.price_change_24h,
            priceChangePercentage24h:token.price_change_percentage_24h,
            marketCapChange24h:token.market_cap_change_24h,
            marketCapChangePercentage24h:token.market_cap_change_percentage_24h,
            circulatingSupply:token.circulating_supply,
            totalSupply:token.total_supply,
            maxSupply:token.max_supply,
            ath:token.ath,
            athChangePercentage:token.ath_change_percentage,
            athDate:token.ath_date,
            atl:token.atl,
            atlChangePercentage:token.atl_change_percentage,
            atlDate:token.atl_date,
            roi:token.roi,
            lastUpdated:token.last_updated

        }))

    }catch(error){
        console.error("Failed to fetch tokens",error)
        return []
    }
}