export const completePersonalDetails = (personalDetails) => {
  return {
    type: 'COMPLETE_PERSONAL_DETAILS',
    personalDetails: personalDetails
  };
};

export const completeLocationDetails = (locationDetails) => {
  return {
    type: 'COMPLETE_LOCATION_DETAILS',
    locationDetails: locationDetails
  };
};