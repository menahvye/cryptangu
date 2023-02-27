export class Crypto {
  id: number | undefined;
  name: string | undefined;
  symbol: string | undefined;
  quote: {
    USD: {
      price: number | undefined;
    };
  };

  constructor() {
    this.id = 0;
    this.name = '';
    this.symbol = '';
    this.quote = {
      USD: {
        price: 0
      }
    };
  }

  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }
}