export async function getTodayHabits(params) {
  const { studyId, date } = params;

  return {
    studyId,
    date: date ?? "2026-01-23",
    habits: [],
  };
}
