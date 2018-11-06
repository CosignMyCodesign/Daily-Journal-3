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