function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum+= numbers_list[i];
    }
    var average = sum / numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade <= 60 && grade<70) {
        return 'D';
    }
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade >= 80 && grade < 90) {
        return 'B';
    }
    else if(grade > 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num > 1) {
        return num + " " + noun + "s";
    } else
        return num + " " + noun;
}

function longestWord(sentence) {
    splitSentence = sentence.split(" ");
    currLongestWord = " ";
    currLongestLength = 0;
    for (var i=0; i<splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
        if (tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
    var array = word.split("");
    if (array.reverse().join("") === word) {
        return 'yes';
    }
    return 'no';
}


function letterCounter(phrase, letter) {
    var currCount=0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter) {
            currCount++;
    }
}
    return currCount;
}

function longestPalindrome(sentence) {
    var word = longestWord(sentence);
    if (palindrome(word) === "yes") {
        return word + " is a palindrome";
    } 
    return word + " is not a palindrome";
}

    // if (longest word in sentence is a palindrome) {
    //     return longest + " is a palindrome";
    // }
    // else {
    //     return longest + " is not a palindrome";
    // }

function areAnagrams (sentence1, sentence2) {
    // if (sentence1 and sentence2 are anagrams)
    //     return 'yes'
    // else
    //     return 'no'
    var string1 = sentence1.toLowerCase().split("").sort().join("").trim();
    var string2 = sentence2.toLowerCase().split("").sort().join("").trim();
    if (string1 === string2) {
        return 'yes';
    }
    return 'no';
}