
// Regular expression to match strings where each word starts with an uppercase letter.

var pattern = /^(?:[A-Z][^\s]*\s?)+$/;

// Returns true:
pattern.test("Fred Smith");
