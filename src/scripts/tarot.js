export {_tarotQuestion, _tarotReset};

/* form.addEventListener('submit', function (e) {
  // 입력 비활성화
  // (랜덤)카드 뽑기
  // 해당 카드 정보 출력
  // 리셋 버튼 (누르면 카드정보 지우고 입력창 활성화 및 포커스) 생성
}); */

function _tarotQuestion(){
  let form = document.getElementById('tarot-form');
  let question = form.getElementById('tarot-question');
  
  if (!question.value) {
    alert('질문을 입력해주세요.');
    question.focus();
  }
  else if (!question.value.endsWith('?')) {
    alert('질문은 일반적으로 물음표로 끝나지요? :)');
    question.focus();
  }
  else {
    question.setAttribute('readonly');
    let answer = document.getElementById('tarot-answer');
    answer.innerHTML = `뽑은 카드는 <strong>${Math.random() > 0.5 ? '정' : '역'}방향</strong>의 <strong>${Math.floor(Math.random()*64)}번 카드</strong> 입니다.`;
  }

  return false;
}

function _tarotReset() {
  if (confirm('다시 하시겠습니까?')) {
    let answer = document.getElementById('tarot-answer');
    answer.innerHTML = '';

    let question = document.getElementById('tarot-question');
    question.value = '';
    question.removeAttribute('readonly');
    question.focus();
  }

  return false;
}