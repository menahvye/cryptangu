export class Crypto {
  id: number | undefined;
  name: string | undefined;
  symbol: string | undefined;
  slug: string | undefined;
  num_market_pairs: number | undefined;
  date_added: string | undefined;
  tags: string[] | undefined;
  max_supply: number | undefined;
  circulating_supply: number | undefined;
  total_supply: number | undefined;
  platform: any | undefined;
  cmc_rank: number | undefined;
  self_reported_circulating_supply: any | undefined;
  self_reported_market_cap: any | undefined;
  tvl_ratio: any | undefined;
  last_updated: string | undefined;
  quote: {
    USD: {
      price: number | undefined;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number | undefined;
      market_cap_dominance: number | undefined;
      fully_diluted_market_cap: number | undefined;
      tvl: any | undefined;
      last_updated: string | undefined;
    }
  };




  constructor() {
        this.id = 0;
        this.name = '';
        this.symbol = '';
        this.slug = '';
        this.num_market_pairs = 0;
        this.date_added = '';
        this.tags = [];
        this.max_supply = 0;
        this.circulating_supply = 0;
        this.total_supply = 0;
        this.platform = null;
        this.cmc_rank = 0;
        this.self_reported_circulating_supply = null;
        this.self_reported_market_cap = null;
        this.tvl_ratio = null;
        this.last_updated = '';
        this.quote = {
          USD: {
            price: 0,
            volume_24h: 0,
            volume_change_24h: 0,
            percent_change_1h: 0,
            percent_change_24h: 0,
            percent_change_7d: 0,
            percent_change_30d: 0,
            percent_change_60d: 0,
            percent_change_90d: 0,
            market_cap: 0,
            market_cap_dominance: 0,
            fully_diluted_market_cap: 0,
            tvl: null,
            last_updated: ''
          }
        }
      }
    

  loadFromJson(jsonElement: any) {
    Object.assign(this, jsonElement);
  }
}