
/*
 * Checks to see if any dice have been selected.
 * Rolls the dice.
 * Prepares the response.
 * Posts to the results terminal.
 */

/*
 * Decreases the total number of the selected dice to roll by one (as long as there is one or more dice to roll).
 */
function onDecrementClicked(obj) {
    console.log(obj.id + "Decrement Button Clicked");

    const id = obj.id;
    let die = "";

    switch(id) {
        case "d4-decrement":
            die = "d4-total";
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

    switch(id) {
        case "d4-increment":
            die = "d4-total";
            break;
    }

    const dieValue = parseInt(document.getElementById(die).value);
    document.getElementById(die).value = dieValue + 1;
}