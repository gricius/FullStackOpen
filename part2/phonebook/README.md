# 2.6: The Phonebook Step1

Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.

Let us start by implementing the addition of a person to the phonebook.

You can use the code below as a starting point for the App component of your application:

```jsx
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
```
# 2.7: The Phonebook Step2

Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task. Keep in mind how object equality works in Javascript.

Issue a warning with the alert command when such an action is attempted:
<img src='https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/5a190/11e.png'>


# 2.8: The Phonebook Step3
Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler):
```jsx
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
```
At this point, the application could look something like this. The image also displays the application's state with the help of React developer tools:

<img src="https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png'>

2.9*: The Phonebook Step4
Implement a search field that can be used to filter the list of people by name:

<img src="https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png:>

You can implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is case insensitive, meaning that the search term arto also returns results that contain Arto with an uppercase A.


