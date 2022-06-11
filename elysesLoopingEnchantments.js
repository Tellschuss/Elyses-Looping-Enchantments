// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
 export function cardTypeCheck(stack, card) {
    let sum = 0;
     stack.forEach((cardType) => {
       if (cardType === card){
         return sum++
       }
     });
     return sum;
   }
   
   /**
    * Determine how many cards are odd or even
    *
    * @param {number[]} stack
    * @param {boolean} type the type of value to check for - odd or even
    * @returns {number} number of cards that are either odd or even (depending on `type`)
    */
   export function determineOddEvenCards(stack, type) {
     let count = 0;
     for (let card of stack)
       // For type, even is true (1) and odd is false (0)
       // For % 2, even is false (even % 2 == 0) and odd is true (odd % 2 == 1)
       // To compare, if the type and % 2 values are different, it is a card of that type
       if (card % 2 != type) count++;
     return count;
   }
   