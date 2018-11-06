
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