# 2.18* Data for countries, step1
At https://studies.cs.helsinki.fi/restcountries/ you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
<img src='https://fullstackopen.com/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/5a190/19b1.png'>
If there are ten or fewer countries, but more than one, then all countries matching the query are shown:
<img src='https://fullstackopen.com/static/1d4ebf199806ccfe0df529c08e2a0c6d/5a190/19b2.png'>
NB: It is enough that your application works for most countries. Some countries, like Sudan, can be hard to support since the name of the country is part of the name of another country, South Sudan. You don't need to worry about these edge cases.
# 2.19*: Data for countries, step2
Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:
<img src='https://fullstackopen.com/static/b8986829d36bd14bbbd6270e0e8d2edf/5a190/19b4.png'>
In this exercise, it is also enough that your application works for most countries. Countries whose name appears in the name of another country, like Sudan, can be ignored.

# 2.20*: Data for countries, step3
Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is https://openweathermap.org. Note that it might take some minutes until a generated API key is valid.
<img src='https://fullstackopen.com/static/5b436dff5ae7a4e1f6e15c7ba95a29be/5a190/19x.png'>
If you use Open weather map, here is the description for how to get weather icons.

NB: In some browsers (such as Firefox) the chosen API might send an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with http://. This issue can be fixed by completing the exercise using Chrome.

NB: You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an environment variable to save the key.

Assuming the api-key is t0p53cr3t4p1k3yv4lu3, when the application is started like so:
```jsx
VITE_SOME_KEY=54l41n3n4v41m34rv0 npm start3 npm start // For Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm start) // For Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm start // For Windows cmd.exe
```
you can access the value of the key from the process.env object:

```jsx
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startup
```
Note that you will need to restart the server to apply the changes.