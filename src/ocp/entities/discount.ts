export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }

}

export class FiftyPercentDescount extends Discount {
  protected readonly discount = 0.5;

}

export class TenPercentDescount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDescount extends Discount { }
