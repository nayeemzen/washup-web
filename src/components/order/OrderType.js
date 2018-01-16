import Enum from '../common/Enum';

const OrderType = Enum.of([
  'DRY_CLEAN',
  'WASH_AND_FOLD'
]);

export const DRY_CLEAN = {
  type: OrderType.DRY_CLEAN,
  name: 'Dry Clean'
};

export const WASH_AND_FOLD = {
  type: OrderType.WASH_AND_FOLD,
  name: 'Wash & Fold'
};