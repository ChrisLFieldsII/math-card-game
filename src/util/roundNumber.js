/** Rounds number to 2 decimal places. */
export default function roundNumber(num) {
    let numStr = num.toString()
    let decimalPos = numStr.indexOf('.')
    let stringToRound = numStr.slice(0, decimalPos+4)
    console.log('string to round: ',stringToRound)
    let numToRound = Number(stringToRound.charAt(stringToRound.length-2))
    console.log('num to round', numToRound)
    let roundDeterminer = Number(stringToRound.charAt(stringToRound.length-1))
    console.log('round determiner', roundDeterminer)
    if (roundDeterminer >= 5) numToRound++
    let roundedStr = stringToRound.slice(0, stringToRound.length-2).concat(numToRound)
    console.log('rounded string: ',roundedStr)
    return roundedStr
}
// 2.345; length=5; index: 0-4
