import { CssConcat } from './CssConcat'

describe('CssConcat', () => {
	it('should take multiple strings and concatenate them with a space between them', () =>{
		expect(CssConcat("This", "that", "TheOtherThing")).toBe("This that TheOtherThing");
	});
	it('should not take numbers', ()=> {
		expect(CssConcat("hi", 1, 5, "six")).toBe("hi six");
	});
	it('should not take numbers as strings', ()=> {
		expect(CssConcat("hi", "1", "5", "six")).toBe("hi six");
	});	
});