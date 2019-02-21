'use strict'

let anyNumber = prompt('Enter any full number');
if (anyNumber === null) {
    alert('Come back soon!')
} else if (anyNumber === Number.isInteger(Number(anyNumber))) {
    alert('Thanks!')
} else {
    alert('Only full number!')
}