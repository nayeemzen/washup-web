export const PENDING = 'PENDING';
export const PICKED_UP = 'PICKED_UP';
export const DROPPED_OFF = 'DROPPED_OFF';
export const BILLED = 'BILLED';
export const CANCELLED = 'CANCELED';

export const getHumanReadableStatus = (status) => {
  switch(status.toUpperCase()) {
    case PENDING:
      return 'Scheduled for pick up';
    case PICKED_UP:
      return 'Picked Up';
    case DROPPED_OFF:
      return 'Delivered';
    case BILLED:
      return 'Complete';
    case CANCELLED:
      return 'Cancelled';
  }
};