const getFormattedDate = (dateUTC: string) => {
  const fdate = new Date(dateUTC);
  let options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(fdate);
};

export default getFormattedDate;
