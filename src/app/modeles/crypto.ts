export class Crypto {
    id: string | undefined;
    name: string | undefined;
    symbol: string | undefined;
    type: string | undefined;

  constructor() {
    this.id = '';
    this.name ='';
    this.symbol = '';
    this.type = '';
  }




  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }

}