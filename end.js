const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveName = e => {
    e.preventDefault()

    localStorage.setItem('userName', username.value)
    window.location.assign('game.html')
}