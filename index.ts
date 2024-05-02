/**
* Sample text.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-05-02
*/

import { createPrompt } from 'bun-promptx'

function hanoi(ndisks: number, startPeg: number = 1, endPeg: number = 3) {
    if (ndisks == 1) {
        console.log(`Move disk 1 from peg ${startpeg} to peg ${endpeg}`)
    } else {
        hanoi(ndisks - 1, startPeg, 6 - startPeg - endPeg)
        console.log(`Move disk ${ndisks} from peg ${startpeg} to peg ${endPeg}`)
        hanoi(ndisks - 1, 6 - startPeg - endPeg, endPeg)
    }
}

