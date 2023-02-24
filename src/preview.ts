import { OplantoFormat } from './oplanto-format';

export class Preview extends OplantoFormat {
    id!: number;
    author!: number;
    coauthors!: Array<number>;
    protocolCID!: string;
    name!: string;
    productionType!: Array<string>;
    protocolType!: string;
    categories!: Array<string>;
    tags!: Array<string>;
    materials!: Array<string>;
    requires!: Array<string>;
    license!: string;
    licenseType!: string;
    price: any;
    description!: string; // CID of the description delta
    cover: any | undefined; // CID of the cover image
    images!: Array<any>; // CID array of the images
    version!: number;
    commentChannel!: string;
    cryptowallet!: string;
    lastUpdate!: number;
    photoUrl!: string;

    private _rating!: number;

    get rating(): number {
      return this._rating;
    }
  
    set rating(rating: number) {
      if (rating >= 0 && rating <= 5) {
        this._rating = rating;
      } else {
        throw new Error("Rating must be between 0 and 5.");
      }
    }
  }