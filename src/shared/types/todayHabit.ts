export type ISODateString = string;
export type ISODateTimeString = string; 

export type TodayHabitItem = {
  id: string;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  completedAt: ISODateTimeString | null;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
};

export type GetTodayHabitsParams = {
  studyId: string;
  date: ISODateString;
};

export type GetTodayHabitsResponse = {
  studyId: string;
  date: ISODateString;
  habits: TodayHabitItem[];
};

export type CreateHabitParams = {
  studyId: string;
};

export type CreateHabitBody = {
  title: string;
  startDate?: ISODateString;
  endDate?: ISODateString | null;
};

export type CreateHabitResponse = {
  id: string;
  studyId: string;
  title: string;
  isActive: boolean;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
};

export type ToggleHabitParams = {
  habitId: string;
  date?: ISODateString;
};

export type ToggleHabitResponse = {
  habitId: string;
  date: ISODateString;
  isCompleted: boolean;
  completedAt: ISODateTimeString | null;
  updatedAt: ISODateTimeString;
};

export type UpdateHabitParams = {
  habitId: string;
};

export type UpdateHabitBody = {
  title: string;
};

export type UpdateHabitResponse = {
  id: string;
  title: string;
  updateAt: ISODateTimeString;
};

export type EndHabitParams ={
  habitId: string;
};

export type EndHabitResponse = {
  habitId: string;
  isActive: boolean;
  endedAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
};