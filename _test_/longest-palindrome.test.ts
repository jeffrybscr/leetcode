import { longestPalindrome } from "../src/longest-palindrome";


describe("Length Of Longest Substring", () => {
  it.each([
    { s: "", result: "" },
    { s: "a", result: "a" },
    { s: "**", result: "" },
    { s: "babad", result: "aba" },
    { s: "cbbd", result: "bb" },
    { s: "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel", result: "sknks" },
    { s: "boqylncwfahjzvawrojyhqiymirlkfzkhtvmbjnbfjxzewqqqcfnximdnrxtrbafkimcqvuprgrjetrecqkltforcudmbpofcxqdcirnaciggflvsialdjtjnbrayeguklcbdbkouodxbmhgtaonzqftkebopghypjzfyqutytbcfejhddcrinopynrprohpbllxvhitazsjeyymkqkwuzfenhphqfzlnhenldbigzmriikqkgzvszztmvylzhbfjoksyvfdkvshjzdleeylqwsapapduxrfbwskpnhvmagkolzlhakvfbvcewvdihqceecqhidvwecvbfvkahlzlokgamvhnpkswbfrxudpapaswqlyeeldzjhsvkdfvyskojfbhzlyvmtzzsvzgkqkiirmzgibdlnehnlzfqhphnefzuwkqkmyyejszatihvxllbphorprnyponircddhjefcbtytuqyfzjpyhgpobektfqznoatghmbxdouokbdbclkugeyarbnjtjdlaisvlfggicanricdqxcfopbmducroftlkqcertejrgrpuvqcmikfabrtxrndmixnfcqqqwezxjfbnjbmvthkzfklrimyiqhyjorwavzjhafwcnlyqob", result: "boqylncwfahjzvawrojyhqiymirlkfzkhtvmbjnbfjxzewqqqcfnximdnrxtrbafkimcqvuprgrjetrecqkltforcudmbpofcxqdcirnaciggflvsialdjtjnbrayeguklcbdbkouodxbmhgtaonzqftkebopghypjzfyqutytbcfejhddcrinopynrprohpbllxvhitazsjeyymkqkwuzfenhphqfzlnhenldbigzmriikqkgzvszztmvylzhbfjoksyvfdkvshjzdleeylqwsapapduxrfbwskpnhvmagkolzlhakvfbvcewvdihqceecqhidvwecvbfvkahlzlokgamvhnpkswbfrxudpapaswqlyeeldzjhsvkdfvyskojfbhzlyvmtzzsvzgkqkiirmzgibdlnehnlzfqhphnefzuwkqkmyyejszatihvxllbphorprnyponircddhjefcbtytuqyfzjpyhgpobektfqznoatghmbxdouokbdbclkugeyarbnjtjdlaisvlfggicanricdqxcfopbmducroftlkqcertejrgrpuvqcmikfabrtxrndmixnfcqqqwezxjfbnjbmvthkzfklrimyiqhyjorwavzjhafwcnlyqob"}
  ])("should pass $s $result", async ({ s, result }) => {
    expect(longestPalindrome(s)).toStrictEqual(result);
  });
});
