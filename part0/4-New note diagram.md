<script src="https://cdn.jsdelivr.net/npm/mermaid@10.4.0/dist/mermaid.min.js"></script>

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
