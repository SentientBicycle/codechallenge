/**
 * Utility to consolidate and return classNames
 * from an arbitrary amount of inputs
 */

export const CssConcat = (...classes) => {
	// takes out all non strings
	const filteredClasses = classes.filter(word => {
		return typeof word === "string";
	});

	// removes all strings that start with a number or numbered strings
	const refilteredClasses = filteredClasses.filter(word => {
		return isNaN(word.charAt(0));
	});
	const newString = refilteredClasses.join(" ");
	return newString;
};
