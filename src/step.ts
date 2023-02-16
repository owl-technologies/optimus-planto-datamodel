import { OplantoFormat } from './oplanto-format';
import { QA } from './qa';

export class Step extends OplantoFormat {
    order!: number;
    name!: string;
    desciprion: any;
    files!: Array<string>;
    qa!: Array<QA>;
  }