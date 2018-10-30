
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

// This creates my HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => {
  return ` 
    <div id="journalEntry">
      <h2>${journalEntry.concept}</h2>
      <h3>${journalEntry.date}</h3>
      <p>${journalEntry.entry}</p>
      <p>${journalEntry.mood}</p>
    </div>
  `
}

/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/

// This function iterates over and inserts my entries into the DOM
const renderJournalEntries = (parsedEntries) => {
  parsedEntries.forEach(entry => {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entry)
  })
}

// Invoke the render function
// renderJournalEntries(parsedEntries)
