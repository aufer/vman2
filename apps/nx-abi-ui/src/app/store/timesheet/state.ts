import { IWeeklySheet } from '../../../../../../libs/nx-abi-shared/src/lib/model/weekly-sheet';

export interface State {
  entity: IWeeklySheet;
  isLoading?: boolean;
  error?: string;
}

export const initialState: State = {
  entity: null,
  isLoading: false,
  error: null,
};
