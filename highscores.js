const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const mostRecentScore = localStorage.getItem('mostRecentScore')
const userName = localStorage.getItem('userName')

if (mostRecentScore != null) {
    const score = {
        score: mostRecentScore,
        name: userName
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))

    console.log(highScores)


    highScoresList.innerHTML = highScores.map(score => {
        return `<li class=high-score">${score.name} - ${score.score}</li>`
    }).join('')
}