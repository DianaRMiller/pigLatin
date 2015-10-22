//For words that start with a vowel, add "ay" to the end.
describe('pigLatin', function() {
  it("is false if it does not start with a vowel", function() {
    expect(pigLatin("w")).to.equal(false);
  });
});
