const filterZipCode = (value: string) => {
  const numbers = value.replace(/[^\d-]/g, "");
  return `${numbers.slice(0, 5)}-${numbers.slice(-3)}`;
};

export default filterZipCode;
