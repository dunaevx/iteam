// Получаем форму и кнопку отправки
const form = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-button');

// Обработчик отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы
  showResults(); // Показываем результаты теста
});

// Функция, которая показывает результаты теста
function showResults() {
  // Получаем ответы пользователя
  const userAnswers = {
    question1: form.question1.value,
    question2: form.question2.value,
    question3: form.question3.value
  };

  // Получаем правильные ответы
  const correctAnswers = {
    question1: 'a',
    question2: 'a',
    question3: 'b'
  };

  // Считаем количество правильных ответов
  let numCorrect = 0;
  for (let key in userAnswers) {
    if (userAnswers[key] === correctAnswers[key]) {
      numCorrect++;
    }
  }

  // Создаем HTML-элементы для отображения результатов
  const resultsContainer = document.getElementById('results');
  const score = document.createElement('p');
  score.textContent = `Вы ответили правильно на ${numCorrect} вопросов из 3-х.`;
  resultsContainer.appendChild(score);
}
