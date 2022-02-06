prompt("name");

var pos = 0; top,  two, choice, choices, chA, chB, chC, chD, correct = 0;
var questions =  [
            ["Which of the following is true about typeof operator in javascript (2mkss", "the type of is a unary operator that is placed before its single operand,",
              "its value is a string indicating the data type of the operend.", "both of the above", "none of the above", "B" ],
            ["Which of the following is the correct syntax to print a page using javascript (2mks)", "window.print()", "browser.print()", "navigator.print()", "document.print()", "C"],
            ["Which built in method returns the index within the calling string object of the first occurence of the specified value(2mks)", "getindex()", "location()", "indexof()", "one of the above", "D"],
            [" Which of the following function of number object formats a number with a specific number of digits to the right of the decimal?(2mks)", "toExponetial()", "tofixed()", "toPrecision()", "if", "B"],
            ["Which of the following function of boolean object returns the primitive value of the boolean object?(2mks)", "toSource()", "valueof()", "toString()", "None of the above", "A"],
            [" which of the following function of string object is used to match a regular expression against a string?(2mks)", "concat()", "match()", "search()", "replace()", "D"],
            ["; Which of the following function of string objects creates a string to be displaced as bold as if it were in a <b> tag?(2mks)", "anchor()", "big()", "blink()", "bold()", "A"],
            ["Which of the following function of array object joins all elements of an array into a string?(2mks)", "concat()", "join()", "pop()", "map()", "B"],
            ["Which of the following function of a string objects creates an html hypertext link that request another URL?", "link()", "sub()", "sup()", "small()", "C"],
            ["Which  of the following function of array object adds one or more elements to the font of an array and returns the new lengh of the array?(2mks)", "unshift()", "sort()", "splice()", "toString()", "B"],
            
            ];
for (var i = 0; i < questions.length; i++) {
    var responce = window.Document(questions[i].Document)
    if (responce === questions[i].correct) {
        score++ ;
        alert("correct!")
    } else {
        alert("wrong!")
    }
}
alert("you got" + correct + "/" + questions.length);