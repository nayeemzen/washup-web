import Enum from '../common/Enum';

export const OrderType = Enum.of([
  "DRY_CLEAN",
  "WASH_AND_FOLD",
]);

export const DRY_CLEAN = OrderType.DRY_CLEAN;
export const WASH_AND_FOLD = OrderType.WASH_AND_FOLD;