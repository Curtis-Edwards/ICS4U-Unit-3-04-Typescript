/**
* Sample text.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-05-02
*/

import { createPrompt } from 'bun-promptx'

function hanoi(ndisks: number, startPeg: number, endPeg: number) {
    if (ndisks == 1) {
        console.log(`Move disk 1 from peg ${startPeg} to peg ${endPeg}`)
    } else {
        hanoi(ndisks - 1, startPeg, 6 - startPeg - endPeg)
        console.log(`Move disk ${ndisks} from peg ${startPeg} to peg ${endPeg}`)
        hanoi(ndisks - 1, 6 - startPeg - endPeg, endPeg)
    }
}

console.log("Towers of Hanoi program\n")
const numberOfDisksString = createPrompt("How many disks would you like in your tower (1->):  ")
const numberOfDisks = parseInt(numberOfDisksString.value)
hanoi(numberOfDisks, 1, 3)

console.log("\nDone.")


      
