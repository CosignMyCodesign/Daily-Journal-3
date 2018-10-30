fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
      // What should happen when we finally have the array?
        renderJournalEntries(parsedEntries)
       
    })