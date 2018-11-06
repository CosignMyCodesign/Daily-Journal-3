/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries)


// CHALLENGE
// Change the code in both src/scripts/entriesDOM.js and src/scripts/entryComponent.js so that the functions in each one becomes a method on an object, just like the code for API does above. Use Object.create.

// When you are done, there should be three objects defined in your application.

// 1. One object that has a method for API access
// 2. One object that has a method for building a component
// 3. One object that has a method rendering the components to the DOM
// Refactor: Once the objects are defined, refactor your code to use the methods on those objects where needed.