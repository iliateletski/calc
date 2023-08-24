export const roundNumber = num => {
	const str = `${num}`
	const index = str.indexOf('.')
	if (index === -1) return str
	const subStr = str.slice(index + 1)
	if (subStr.length > 2) return str.slice(0, index + 3)
	else return str
}
