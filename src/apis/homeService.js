import client from './client.js';
import { STUDY_SORT_OPTION } from '../constants/sort.js';

const STUDIES_PER_PAGE = 6;
const DEFAULT_CURRENT_PAGE = 1;

//page = type: number
//limit = type: number
//sort = type: string
//keyword = type: string

export const getStudyList = async ({
  page = DEFAULT_CURRENT_PAGE,
  limit = STUDIES_PER_PAGE,
  sort = STUDY_SORT_OPTION.LATEST,
  keyword,
}) => {
  //쿼리 파라미터 설정
  const params = { page, limit };

  if (sort) params.sort = sort;
  if (keyword) params.keyword = keyword;

  //지금 if 문에서 return 문 대신 값지정만.

  //api 리턴값
  return await client.get('/', { params });
};
