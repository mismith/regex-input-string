export default class RegexInputString {
	constructor(input = '', flags = '') {
		if (typeof input !== 'string') throw new Error(`'input' must be a string`);
		if (typeof flags !== 'string') throw new Error(`'flags' must be a string`);

		// parse input
		let match = /^\/(.+)\/([a-zA-Z]*)$/.exec(input), // determine is using regex syntax
			pattern = match ? match[1] : input.replace(/\\/g, '\\\\').replace(/[\(\)\[\]\{\}\|\.\?\*\+\-\^\$\!\/]/g, '\\$&'); // process special characters

		// merge flags from regex syntax
		if (match && match[2]) {
			let flagsArray = flags.split(''),
				matchArray = match[2].split('');

			matchArray.forEach(flag => {
				if (flagsArray.indexOf(flag) < 0) flagsArray.push(flag);
			});

			flags = flagsArray.join('');
		}

		return new RegExp(pattern, flags);
	}
}