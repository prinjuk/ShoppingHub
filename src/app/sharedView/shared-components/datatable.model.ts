export class StoreList {
 public name: string;
 public Id: number;
 public owner: string;
 public sales: number;

 constructor(name: string, Id: number, owner: string, sales: number) {
          this.name = name;
          this.Id = Id;
          this.owner = owner;
          this.sales = sales;
 }
}
