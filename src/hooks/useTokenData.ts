import { useState, useEffect } from "react";
import { IStakingToken, IStakingPlatform } from "../types/index";
import { useQuery } from "@tanstack/react-query";

const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=liquid-staking-tokens&order=market_cap_desc';


const mockPlatforms = {
    'staked-ether': [
        { name: 'Lido', fee: 0.1, minStake: 0.01, apy: 4.5 },
        { name: 'Coinbase', fee: 0.25, minStake: 0.1, apy: 4.3 },
        { name: 'Binance', fee: 0.15, minStake: 0.05, apy: 4.4 }
    ],
    'rocket-pool-eth': [
        { name: 'RocketPool', fee: 0.15, minStake: 0.01, apy: 4.8 },
        { name: 'Binance', fee: 0.2, minStake: 0.1, apy: 4.6 }
    ]
};

const fetchTokenData = async () => {
    const res = await fetch(COINGECKO_API)
    if (!res.ok) throw new Error('Failed to fetch tokens');
    const data = await res.json();
    // return res.json();
    console.log("hy" + data.map((token: any) => token.name))
    const transformedTokens: IStakingToken[] = data.map((token: any): IStakingToken => ({
        id: token.id,
        name: token.name,
        symbol: token.symbol.toUpperCase(),
        price: token.current_price,
        marketCap: token.market_cap,
        volume24h: token.total_volume,
        tvl: token.market_cap,
        apy: 4.5,
        ratio: 1,
        platforms: mockPlatforms[token.id] || [],
        image: token.image,
        priceChange24h: token.price_change_24h,
        priceChangePercentage24h: token.price_change_percentage_24h,
        marketCapRank: token.market_cap_rank,
        high24h: token.high_24h,
        low24h: token.low_24h,
        ath: token.ath,
        athChangePercentage: token.ath_change_percentage,
        athDate: token.ath_date,
        atl: token.atl,
        atlChangePercentage: token.atl_change_percentage,
        atlDate: token.atl_date,
    }));
    return transformedTokens;
}

export const useTokenData = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['tokens'],
        queryFn: fetchTokenData,
        staleTime: 1000 * 60 * 20, // 1 hour
        refetchOnWindowFocus: false,
    });
    return { tokens: data, loading: isLoading, error }


}