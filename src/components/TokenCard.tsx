import React from 'react';
import { ArrowUpRight, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { IStakingToken } from '../types';
import { CoinLogo } from './CoinLogo';
import { formatNumber } from '../utils/formatNumber';

interface TokenCardProps {
  token: IStakingToken;
}

export function TokenCard({ token }: TokenCardProps) {

  const formatCurrency = (value: number | null | undefined) => {
    if (value == null) return '$0';
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
  };

  const handleDecimal = (value: number | null | undefined) => {
    if (value == null) {
      return 0;
    } else {
      return value.toFixed(2);
    }
  }

  return (

    <div className="glow-effect bg-[#151530]/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          {/* <CoinLogo symbol={token.image} /> */}
          <img src={token.image} alt={token.name} className="w-12 h-12 rounded-full" />
          <div className='felx items-center gap-2'>
            <h3 className="text-lg font-semibold text-white">@{token.name}</h3>

            {
              token.marketCapRank && (
                <span className='text-xs rounded-full bg-blue-300 text-blue-800 px-3 py-0.5'>
                  #{token.marketCapRank}
                </span>
              )}
          </div>
          <p className="text-indigo-300/80">{token.symbol}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xl font-bold text-white">${token.price}</span>
          <div className="flex items-center text-sm">
            {token.priceChangePercentage24h <= 0 ? (
              <TrendingDown size={16} className="mr-1 text-red-600" />
            ) : (
              <TrendingUp size={16} className="mr-1 text-green-500" />
            )}
            <span className={`${token.priceChangePercentage24h <= 0 ? 'text-red-600' : 'text-green-500'}`}>
              {handleDecimal(token.priceChangePercentage24h)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#1C1C42]/30 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-indigo-300/80">TVL</p>
          <p className="font-semibold text-white">${token.tvl}</p>
        </div>
        <div className="bg-[#1C1C42]/30 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-indigo-300/80">Volume (24h)</p>
          <p className="font-semibold text-emerald-400">{token.volume24h}%</p>
        </div>
        <div className="bg-[#1C1C42]/30 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-indigo-300/80">Revenue(24h)</p>
          <p className="font-semibold text-white">${token.ath}</p>
          <div>
            P/F:{token.price}
          </div>
        </div>
        <div className="bg-[#1C1C42]/30 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-indigo-300/80">Fees(24h)</p>
          <p className="font-semibold text-white">%{token.apy}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 px-4 rounded-lg flex items-center justify-center hover:from-indigo-500 hover:to-purple-500 transition-all duration-300">
          <Wallet size={18} className="mr-2" />
          Stake
        </button>
        <button className="flex-1 border border-indigo-500/30 text-indigo-300 py-2.5 px-4 rounded-lg flex items-center justify-center hover:bg-indigo-500/10 transition-all duration-300">
          <ArrowUpRight size={18} className="mr-2" />
          Trade
        </button>
      </div>
    </div>
  );
}