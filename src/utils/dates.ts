const today = new Date();
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

export const firstDayFormatted = `${firstDay.getFullYear()}-${(
  firstDay.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}-${firstDay.getDate().toString().padStart(2, "0")}`;
export const lastDayFormatted = `${lastDay.getFullYear()}-${(
  lastDay.getMonth() + 1
)
  .toString()
  .padStart(2, "0")}-${lastDay.getDate().toString().padStart(2, "0")}`;

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};


const getFirstDayOfLastYear = () => {
  const currentYear = new Date().getFullYear();
  const firstDayOfLastYear = new Date(currentYear - 1, 0, 1);
  return `${firstDayOfLastYear.getFullYear()}-${(firstDayOfLastYear.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${firstDayOfLastYear.getDate().toString().padStart(2, '0')}`;
};

const getLastDayOfThisYear = () => {
  const currentYear = new Date().getFullYear();
  const lastDayOfThisYear = new Date(currentYear, 11, 31);
  return `${lastDayOfThisYear.getFullYear()}-${(lastDayOfThisYear.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${lastDayOfThisYear.getDate().toString().padStart(2, '0')}`;
};

export const firstDayLastYear = getFirstDayOfLastYear();
export const lastDayThisYear = getLastDayOfThisYear();


export function calculateDaysUntil(targetDate: string) {
  const today = new Date();
  const target = new Date(targetDate);
  
  const differenceMs = target.getTime() - today.getTime();
  
  const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  
  return differenceDays;
}