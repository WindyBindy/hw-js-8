//1----------------------------------------------------------
function logItems(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`${i + 1} - ${array[i]}`)
	}
}
logItems(['Mango', 'Poly', 'Ajax'])
//2----------------------------------------------------------

function calculateEngravingPrice(message, pricePerWord) {
	const words = message.split(' ')
	return words.length * pricePerWord
}

const message = 'hello Nikita'
const price = 10

console.log(calculateEngravingPrice(message, price))
//3----------------------------------------------------------
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
//4----------------------------------------------------------
function formatString(string) {
	if (string.length <= 40) {
		return string
	} else {
		return string.slice(0, 40) + '...'
	}
}
console.log(
	formatString(
		'hello my name is nikita and i am twelwe years old i love playing on computer with my friends'
	)
)
//5----------------------------------------------------------
function checkForSpam(message) {
	const lowerCaseMessage = message.toLowerCase()
	return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')
}
console.log(checkForSpam('hello i will SPam today!'))
console.log(checkForSpam('hello my name is nikita'))
console.log(checkForSpam('The best shop saLe products!'))
//6----------------------------------------------------------
let input
const numbers = []
let total = 0

while (true) {
	input = prompt('Введи число:')

	if (input === null) {
		break
	}

	input = input.trim()
	const number = Number(input)

	if (input === '' || isNaN(number)) {
		alert('не чесло вы ввели')
		continue
	}

	numbers.push(number)
}

if (numbers.length > 0) {
	for (const num of numbers) {
		total += num
	}

	console.log(`вся сума равняется: ${total}`)
}
