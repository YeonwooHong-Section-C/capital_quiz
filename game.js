const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#scoreText');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: 'What is the capital of Canada',
    choice1: 'Toronto',
    choice2: 'Vancouver',
    choice3: 'Ottawa',
    choice4: 'Montreal',
    answer: 3,
  },
  {
    question: 'What is the capital of Brazil?',
    choice1: 'Rio de Janeiro',
    choice2: 'São Paulo',
    choice3: 'Brasília',
    choice4: 'Salvador',
    answer: 3,
  },
  {
    question: 'What is the capital of Indonesia',
    choice1: 'Jakarta',
    choice2: 'Padang',
    choice3: 'Medan',
    choice4: 'Yogyakarta',
    answer: 1,
  },
  {
    question: 'What is the capital of Uganda',
    choice1: 'Kampala',
    choice2: 'Hoima',
    choice3: 'Gulu',
    choice4: 'Jinja',
    answer: 1,
  },
  {
    question: 'What is the capital of poland',
    choice1: 'Kraków',
    choice2: 'Warsaw',
    choice3: 'Bydgoszcz',
    choice4: 'Gdańsk',
    answer: 2,
  }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    console.log(currentQuestion.answer, classToApply)
    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  console.log(score +=num)
  score += num
  scoreText.innerText = score
  console.log(score)
}

startGame()