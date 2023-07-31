<h1>4-New note diagram.md</h1>

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
