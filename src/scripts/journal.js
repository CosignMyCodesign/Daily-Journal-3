// Journal entries array of objects
const journalEntries = [
  {
    date: "07/24/2018",
    concept: "Array methods",
    entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
    mood: "Ok"
  },

  {
    date: "10/16/2018",
    concept: "Function syntax",
    entry: "We learned about 4 different ways to write functions today. They all made sense for the most part, however I will need to become more accustomed to the various forms of syntax and how/when to use each one appropriately",
    mood: "Happy"
  },

  {
    date: "10/18/2018",
    concept: "API's and JSON Server",
    entry: "We got our first look at utilizing APIs and JSON Servers. It was quite a bit to take in, but conceptually made sense. We also got our first look at Postman!",
    mood: "Accomplished"
  }
]


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
const renderJournalEntries = (entries) => {
  journalEntries.forEach((i) => {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(i)
  })
}

// Invoke the render function
renderJournalEntries(journalEntries)
