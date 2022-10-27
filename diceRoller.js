
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