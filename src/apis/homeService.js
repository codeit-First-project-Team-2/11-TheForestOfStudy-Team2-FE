import client from './client.js';
import { STUDY_SORT_OPTION } from '../constants/sort.js';

const STUDIES_PER_PAGE = 6;
const DEFAULT_CURRENT_PAGE = 1;

export const getStudyList = async ({
  page = DEFAULT_CURRENT_PAGE,
  limit = STUDIES_PER_PAGE,
  sort = STUDY_SORT_OPTION.LATEST,
  keyword,
}) => {
  const params = { page, limit };

  if (sort) params.sort = sort;
  if (keyword) params.keyword = keyword;

  return await client.get('/', { params });
};
