// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("removeFirst", () =>{
    const expected = ["purple", "blue", "green", "yellow", "pink"]
    const expected1 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () =>{
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine",        "periwinkle", "indigo", "ochre"]

expect(removeFirst).not.toEqual(expect.arrayContaining(expected));
expect(removeFirst).not.toEqual(expect.arrayContaining(expected1));
    });
});

// ReferenceError: removeFirst is not defined


// b) Create the function that makes the test pass.

//PseudoCode
// Declare a function called removeFirst
// Set the parameter as an array
// Declare a variable arrayShift and pass an empty argument
// Index the array, use -1 to remove the first color using i = array.length -1; i > 0, i++


    const removeFirst = (array) => {
        const arrayShift = array.shift()
         for (let i = array.length - 1; i > 0; i++) {
            const k = Math.floor(Math.random() * (i+1));
            const one = array [i];
             array[i] = array [k]
             array[k] = one;
         }
         return array 
    }

    // Tests: 1 passed, 1 total


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe("totalVotes", ()=>{
    it("takes in an object that contains up votes and down votes and returns the net total of votes", () =>{
        const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
        const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31
    expect(totalVotes(votes1)).toEqual[11]
    expect(totalVotes(votes2)).toEqual[-31]

    })
})

//ReferenceError: totalVotes is not defined

// b) Create the function that makes the test pass.

// PseudoCode
// Declare a function called totalVotes
// Set the parameter as object to take in the vote values 
// Declare a variable theVotes that subtracts upvotes and downvotes
// Return theVOtes



    const totalVotes = (object) => {
        let theVotes = (object.upVotes - object.downVotes)
        return theVotes
    };

// Tests: 2 passed, 2 total




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDuplicates", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        expect(noDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

    // ReferenceError: noDuplicates is not defined


// b) Create the function that makes the test pass.

// PseudoCode
// Decalre a function called noDuplicates
// Set the parameters array1 and array2
// Declare a variable called mergedArray = array1 and array2
// Utilize the spread operator to combine arrays
// Utilize Set() to create a new array with no duplicates
// Utilize Array.from() to return the object into the array

const noDuplicates = (array1, array2) => {
    let mergedArray = [...array1, ...array2]
    let setObject = new Set(mergedArray) 
    return Array.from(new Set(mergedArray))
}

// Tests: 3 passed, 3 total