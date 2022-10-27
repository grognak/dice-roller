
/*
 * Checks to see if any dice have been selected.
 * Rolls the dice.
 * Prepares the response.
 * Posts to the results terminal.
 */
function onRollClicked() {
    const d4Dice = rollDice(4, parseInt(document.getElementById("d4-total").value));
    const d6Dice = rollDice(6, parseInt(document.getElementById("d6-total").value));
    const d8Dice = rollDice(8, parseInt(document.getElementById("d8-total").value));
    const d10Dice = rollDice(10, parseInt(document.getElementById("d10-total").value));
    const dPercentileDice = rollDice(100, parseInt(document.getElementById("d%-total").value));
    const d12Dice = rollDice(12, parseInt(document.getElementById("d12-total").value));
    const d20Dice = rollDice(20, parseInt(document.getElementById("d20-total").value));

}

/*
 * Simulates rolling an n-sided die x times.
 *   param:  n  the number of sides on the die
 *   param:  x  the number of die to roll
 *   return:  array  the results of each roll (empty for no rolls)
 * 
 * This method handles one special case (a d% die) which rolls in intervals of 10.
 */
function rollDice(n , x) {
    console.log(`n: $n / x: $x`, n, x);

    const results = [];

    // base case - x=0
    if (x == 0) { return results; }

    // d% special case
    if (n == 100) {
        for (let i = 0; i < x; i++) {
            results.push((Math.floor(Math.random() * (10 - 1)) + 1) * 10);
        }
        console.log(results);
        return results;
    }

    for (let i = 0; i < x; i++) {
        results.push(Math.floor(Math.random() * (n - 1)) + 1);
    }

    console.log(results);
    return results;
}

/*
 * Decreases the total number of the selected dice to roll by one (as long as there is one or more dice to roll).
 */
function onDecrementClicked(obj) {
    console.log(obj.id + "Decrement Button Clicked");

    const id = obj.id;
    let die = "";

    switch (id) {
        case "d4-decrement":
            die = "d4-total";
            break;
        case "d6-decrement":
            die = "d6-total";
            break;
        case "d8-decrement":
            die = "d8-total";
            break;
        case "d10-decrement":
            die = "d10-total";
            break;
        case "d%-decrement":
            die = "d%-total";
            break;
        case "d12-decrement":
            die = "d12-total";
            break;
        case "d20-decrement":
            die = "d20-total";
            break;
    }

    const dieValue = parseInt(document.getElementById(die).value);
    if (dieValue > 0) {
        //we cannot roll a negative number of dice.
        document.getElementById(die).value = dieValue - 1;
    }
}

/*
 * Increases the total number of the selected dice to roll by one.
 */
function onIncrementClicked(obj) {
    console.log(obj.id + "Increment Button Clicked");

    const id = obj.id;
    let die = "";

    switch (id) {
        case "d4-increment":
            die = "d4-total";
            break;
        case "d6-increment":
            die = "d6-total";
            break;
        case "d8-increment":
            die = "d8-total";
            break;
        case "d10-increment":
            die = "d10-total";
            break;
        case "d%-increment":
            die = "d%-total";
            break;
        case "d12-increment":
            die = "d12-total";
            break;
        case "d20-increment":
            die = "d20-total";
            break;
    }

    const dieValue = parseInt(document.getElementById(die).value);
    document.getElementById(die).value = dieValue + 1;
}