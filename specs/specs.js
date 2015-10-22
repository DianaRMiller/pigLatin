//For words that start with a vowel, add "ay" to the end.
describe('pigLatin', function() {
  it("adds ay to the word if it starts with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("does not add ay to the word if it starts with a vowel"), function() {
    expect(pigLatin("work")).to.equal("work");
  }
});
