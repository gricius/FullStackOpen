<h1>5-Single-page-app-diagram.md</h1>
<p>A diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa</p>

```mermaid

sequenceDiagram
  participant User
  participant NotesApp

  User->>NotesApp: Enters URL (https://studies.cs.helsinki.fi/exampleapp/spa)
  NotesApp-->>User: Loads Single-Page App

  User->>NotesApp: Interacts with the app
  NotesApp-->>User: Updates the app UI based on interactions

  User->>NotesApp: Creates a new note
  NotesApp->>NotesApp: Saves the note on the client-side
  NotesApp->>NotesApp: Sends API request to save note on the server
  NotesApp-->>User: Shows success message for note creation

  User->>NotesApp: Edits an existing note
  NotesApp->>NotesApp: Updates the note on the client-side
  NotesApp->>NotesApp: Sends API request to update note on the server
  NotesApp-->>User: Shows success message for note update

  User->>NotesApp: Deletes a note
  NotesApp->>NotesApp: Deletes the note on the client-side
  NotesApp->>NotesApp: Sends API request to delete note on the server
  NotesApp-->>User: Shows success message for note deletion

  User->>NotesApp: Leaves the app
  NotesApp-->>User: Navigates to a different page
```
