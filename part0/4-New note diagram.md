<h1>4-New note diagram.md</h1>
<p>the chain of events caused by opening the page https://studies.cs.helsinki.fi/exampleapp/notes is depicted as a sequence diagram<br>
The diagram was made as a GitHub Markdown-file using the Mermaid-syntax</p>

```mermaid

sequenceDiagram
    participant User
    participant WebApp
    participant Database

    User->>WebApp: Open web page
    User->>WebApp: Write note text
    User->>WebApp: Click submit button
    WebApp->>Database: Save new note
    Database-->>WebApp: Confirmation
    WebApp-->>User: Display success message
```
