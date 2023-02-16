import { OplantoFormat } from './oplanto-format';
import { Step } from './step';

export class Protocol extends OplantoFormat {
  descriptionChannel!: string;
  licenseChannel!: string;
  editorsChannel!: string;
  shareWith!: Array<any>;
  isDraft!: boolean;
  files!: Array<string>;
  steps!: Array<Step>;
  activeStep!: number;
  editMode!: boolean;
}




