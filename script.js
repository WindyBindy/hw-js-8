//1
function logItems(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`${i + 1} - ${array[i]}`)
	}
}
logItems(['Mango', 'Poly', 'Ajax'])
//2

function calculateEngravingPrice(message, pricePerWord) {
	const words = message.split(' ')
	return words.length * pricePerWord
}

const message = 'hello Nikita'
const price = 10

console.log(calculateEngravingPrice(message, price))
//3
function findLongestWord(string) {
	const words = string.split(' ')
	let longestWord = ''

	for (let word of words) {
		if (word.length > longestWord.length) {
			longestWord = word
		}
	}

	return longestWord
}
console.log(findLongestWord('hello my name in adfasdf'))
