// Book 3 way of doing it

// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(parsedEntries => {
//       // What should happen when we finally have the array?
//         renderJournalEntries(parsedEntries)
       
//     })




// What book 4 is telling me to put here

const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
  }
}

// This can also be written like this (key:value syntax)

// const API = {
//   getJournalEntries: function () {
//       return fetch("http://localhost:3000/entries")
//           .then(response => response.json())
//   }
// }