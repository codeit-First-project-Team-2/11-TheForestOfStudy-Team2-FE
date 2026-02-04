import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  createStudy,
  getStudyDetail,
  patchStudy,
} from '../../apis/studyService.js';

// import { STUDY_VALIDATION } from '../../constants/validation.js';
import { showToast } from '@/utils/toast.util';

const initialForm = {
  nickname: '',
  title: '',
  introduction: '',
  background: '',
  password: '',
  passwordConfirm: '',
};

const useCreateStudy = ({ mode, studyId }) => {
  const navigate = useNavigate();
  const isEdit = mode === 'edit';

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // edit 모드 → 기존 스터디 정보 불러오기
  useEffect(() => {
    if (!isEdit || !studyId) return;

    const fetchStudy = async () => {
      try {
        const data = await getStudyDetail(studyId);

        setForm({
          nickname: data.nickname,
          title: data.title,
          introduction: data.introduction,
          background: data.background,
          password: '',
          passwordConfirm: '',
        });
      } catch (error) {
        console.error(error);
        showToast.error('스터디 정보를 불러오지 못했습니다');
        navigate('/');
      }
    };

    fetchStudy();
  }, [isEdit, studyId, navigate]);

  // 🔹 input handler
  const handleChange = (key) => (e) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: undefined,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    // if (!STUDY_VALIDATION.nickname.validate(form.nickname)) {
    //   nextErrors.nickname = STUDY_VALIDATION.nickname.message;
    // }

    // if (!STUDY_VALIDATION.title.validate(form.title)) {
    //   nextErrors.title = STUDY_VALIDATION.title.message;
    // }

    // if (!STUDY_VALIDATION.introduction.validate(form.introduction)) {
    //   nextErrors.introduction = STUDY_VALIDATION.introduction.message;
    // }

    if (!isEdit) {
      // if (!STUDY_VALIDATION.password.validate(form.password)) {
      //   nextErrors.password = STUDY_VALIDATION.password.message;
      // }

      if (form.password !== form.passwordConfirm) {
        nextErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsLoading(true);

    try {
      const payload = {
        nickname: form.nickname,
        title: form.title,
        introduction: form.introduction,
        background: form.background,
        password: form.password,
      };

      if (isEdit) {
        await patchStudy({
          studyId,
          ...payload,
        });

        showToast.success('스터디가 수정되었습니다');
        navigate(`/study/${studyId}`);
      } else {
        const data = await createStudy(payload);

        showToast.success('스터디가 생성되었습니다');
        navigate(`/study/${data.id}`);
      }
    } catch (error) {
      console.error(error);
      showToast.error('스터디 저장 중 오류가 발생했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    setForm, // 배경 선택용
  };
};

export default useCreateStudy;
