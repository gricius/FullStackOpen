# 2.1: Course information step6

Let's finish the code for rendering course contents from exercises 1.1 - 1.5. Let's change the App component like so:
```jsx
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
```
Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:
```jsx
App
  Course
    Header
    Content
      Part
      Part
      ...
```
Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

The rendered page can, for example, look as follows:
<img src="https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png">

You don't need the sum of the exercises yet.

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.

Ensure that the console shows no errors!

# 2.2: Course information step7

Show also the sum of the exercises of the course.

<img src="https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png">

# 2.3*: Course information step8

If you haven't done so already, calculate the sum of exercises with the array method reduce.

# 2.4: Course information step9
Let's extend our application to allow for an arbitrary number of courses:
```jsx
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      // ...
    </div>
  )
}
```
The application can, for example, look like this:
<img src="https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png">


