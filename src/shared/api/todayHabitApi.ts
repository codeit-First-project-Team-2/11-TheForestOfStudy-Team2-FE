import type {
  GetTodayHabitsParams,
  GetTodayHabitsResponse,
} from "../types/todayHabit";

export async function getTodayHabits(
  params: GetTodayHabitsParams,
): Promise<GetTodayHabitsResponse> {
  const { studyId, date } = params;

  TODO:
  return {
    studyId,
    date: date ?? "2026-01-23",
    habits: [],
  };
}

