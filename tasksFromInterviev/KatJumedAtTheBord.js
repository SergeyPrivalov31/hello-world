// Необходимо реализовать функцию,которая удалит в строке
// все повторяющиеся подряд символы таким образом, чтобы
// на выходе получилось:
// "Кошка запрыгнула на забор"

const sentence = "Кккоооошккаааа зззапрыыгнулаа   наааа зааабоооррррр";

function removeRepeats(iterable) {
	var unique = []
	unique[0] = iterable[0]
	for (var i = 1; i < iterable.length; i++) {
		if (iterable[i].toLowerCase() !== unique[unique.length - 1].toLowerCase()) {
			unique.push(iterable[i])
		}
	}
	return unique.join('');
}

console.log(removeRepeats(sentence));
console.log(removeRepeats(sentence) === "Кошка запрыгнула на забор");
