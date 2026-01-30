import toast from 'react-hot-toast';

export const showToast = {
  success: (message) =>
    toast.success(message, {
      className: 'commonToast successToast',
      icon: '🎉',
    }),

  error: (message) =>
    toast.error(message, {
      className: 'commonToast errorToast',
      duration: 5000,
      icon: '🚨',
    }),

  //토스트 추가하려면 다음 양식에서 <> 부분 삭제 후 작성
  //<exampleName>: (message) =>
  //  toast.<exampleName>(message, {
  //    className:"commonToast <exampleClassName>",
  //    duration: <1000 (단위 ms, type: number)>,
  //    icon :<exampleIcon (type:string)>
  //}),

  //이후, 쓰려는 파일에 showToast.<exampleName>('테스트입니다.'); 로 호출.
};
