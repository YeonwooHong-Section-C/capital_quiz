# Refactoring list
- Make media queries more specific
- Issue where values stored in local storage are continuously overwritten when re-entering the page after navigating back or refreshing (highscores.js)

- Trial list
1. e.preventdefault fails because it's not an event - code runs as soon as the page loads -> Should it be executed by pressing the score view button?? Seems odd.
2. Filtering out if the most recent value matches the name and score using an if statement -> Error occurs when there is no data on initial execution during name retrieval.
3. Initially setting null values for name and score and declaring -> When the game ends, the data is printed along with it, but when starting the next game, the local storage history disappears, whether it is being redeclared as null or something else.
4. Adjusting the timing of sessionStorage usage, codeExecuted true, false to score screen and game end points / There was an error in the if statement pass. Whether to put ! or not, it was all false, causing the issue of continuous input of scores. 

```
if (!sessionStorage.getItem('codeExecuted')) {
    // code
    console.log('Code executed');

    // Set the flag in sessionStorage to indicate that the code has been executed
    sessionStorage.setItem('codeExecuted', true);
}
```