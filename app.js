// WAY1:using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function(){

    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// WAY2：travelling the DOM
// ボタンをクリックした際に親要素を取得し、CSSを追加する
//　parentElement＊２で1番の親要素にたどり着ける

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//   btn.addEventListener('click',function(e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text')
//   })
// });
