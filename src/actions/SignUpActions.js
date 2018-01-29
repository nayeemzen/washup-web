export const completeStep = (step, data) => {
  return {
    type: 'COMPLETE_STEP',
    step: step,
    data: data
  };
};

export const undoStep = (step) => {
  return {
    type: 'UNDO_STEP',
    step: step
  };
};