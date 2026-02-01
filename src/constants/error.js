import {
  STUDY_LIMITS,
  HABIT_LIMITS,
  EMOJI_LIMITS,
} from '../schemas/validation.constant.js';


// Study 에러 메세지
// Status Code: 400 Bad Request
export const STUDY_ERROR_MESSAGES = {
  NICKNAME_REQUIRED: `닉네임은 필수입니다.`,
  NICKNAME_INVALID: `닉네임은 ${STUDY_LIMITS.NICKNAME.MAX_LENGTH}자 이내여야 합니다.`,
  NICKNAME_FORMAT_INVALID: `닉네임에는 공백과 특수문자를 사용 할수 없습니다.`,

  TITLE_REQUIRED: `스터디 이름은 필수입니다.`,
  TITLE_INVALID: `스터디 이름은 ${STUDY_LIMITS.TITLE.MAX_LENGTH}자 이내여야 합니다.`,
  TITLE_FORMAT_INVALID: `스터디 이름에 사용할 수 없는 문자가 포함되어 있습니다.`,

  INTRODUCTION_REQUIRED: `소개글은 필수입니다.`,
  INTRODUCTION_INVALID: `소개글은 ${STUDY_LIMITS.INTRODUCTION.MAX_LENGTH}자 이내여야 합니다.`,

  PASSWORD_REQUIRED: `비밀번호는 필수입니다.`,
  PASSWORD_NO_SPACE: `비밀번호는 공백을 포함할 수 없습니다.`,
  PASSWORD_CONFIRM_MISMATCH: `입력하신 비밀번호가 서로 일치하지 않습니다.`,
  PASSWORD_INVALID: `비밀번호는 ${STUDY_LIMITS.PASSWORD.MIN_LENGTH}~${STUDY_LIMITS.PASSWORD.MAX_LENGTH}자 사이여야 합니다.`,

  BACKGROUND_INVALID: `허용되지 않은 배경 이미지 경로입니다.`,

  STUDY_NOT_FOUND: '스터디를 찾을 수 없습니다.',
  STUDY_INVALID: 'studyId는 26자 이내여야 합니다.',
   STUDY_FORMAT_INVALID: '허용되지 않는 studyId 형식입니다.',
};

export const HABIT_ERROR_MESSAGES = {
  HABIT_NAME_INVALID: `습관 이름은 ${HABIT_LIMITS.HABIT_NAME.MAX_LENGTH}자 이내여야 합니다.`,
};

export const EMOJI_ERROR_MESSAGES = {
  // TODO: 필요 에러메세지 추가
  EMOJI_LIMIT_EXCEEDED: '한 스터디에 등록 가능한 이모지 개수를 초과했습니다.', // 400
};
