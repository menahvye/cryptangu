export class Crypto {
    id: number | undefined;
    name: string | undefined;
    symbol: string | undefined;

  constructor() {
    this.id = 0;
    this.name = '';
    this.symbol = '';
  }




  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }

}