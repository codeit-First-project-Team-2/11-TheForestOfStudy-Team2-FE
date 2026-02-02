import toast from 'react-hot-toast';

export const showToast = {
  success: (message) =>
    toast.success(message, {
      icon: '🎉',
      style: {
        padding: ' 14px 18px',
        backgroundColor: 'var(--green-green_E1EDDE, #e1edde)',
        color: 'var(--green-green_text_578246, #578246)',
      },
    }),

  error: (message) =>
    toast.error(message, {
      duration: 5000,
      icon: '🚨',
      style: {
        backgroundColor: 'var(--pink-pink_FDE0E9, #fde0e9)',
        color: 'var(--red-red_F50E0E, #f50e0e)',
      },
    }),

  //토스트 추가하려면 다음 양식에서 <> 부분 삭제 후 작성
  //<exampleName>: (message) =>
  //  toast.<exampleName>(message, {
  //    duration: <1000 (단위 ms, type: number)>,
  //    icon: <exampleIcon (type:string)>,
  //    style: {}
  //}),

  //이후, 쓰려는 파일에 showToast.<exampleName>('테스트입니다.'); 로 호출.
};
