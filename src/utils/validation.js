export const isButtonDisabled = (formValidation) => {
  const entries = Object.entries(formValidation);
  return !(
    entries.map((data) => data).filter((value) => value[1]).length ===
    entries.length
  );
};
