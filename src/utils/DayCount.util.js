export function getStudyDayCount(createdDate) {
  const startDate = new Date(createdDate);
  const today = new Date();

  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInMs = today - startDate;

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return Math.floor(diffInDays) + 1;
}
