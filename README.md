# Lucid-Dreaming-Explainer-2.0

Lucid Dream Explainer website with added functionality.

This is an updates website that I made in Code Louisville webdev1. It is a simple website meant to teach people about lucid dreaming. I chose to create a clean and minimalistic design that is responsive to many device sizes. I have included a video, methods of lucid dreaming (displayed with expandable divs), and a public dream journal. There is also a field at the footer which allows users to input an email address. It will not actually sign you up for a newsletter, it just tells you if your email is valid.

# Features

	"Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app"
	"Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)"

getDream() function pulls data from my getpantry.cloud API basket that I have created using fetch. It loops through all the data in the JSON file and       displays the results (from newest to oldest) in #dreamlog on the page.

searchDream() function pulls the same data as the getDream() function, but it also uses the search term to find matching entries in the JSON file. Function will inform user if no results have been found or if no search term has been entered. This function is also case sensitive. resetDreams() resets the list to its default view. 

	"Post to an external API and show that it has saved/persisted"
	"Create a form and save the values (on click of Submit button) to an external file"
	"Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application"

postDream() first checks if the form for submitting a dream has been filled out on the dream journal. If filled out correctly, putDream() is called.
putDream() takes the current date, user's name, and user's dream and puts it into the object dreamLog and into an array under the variable "dreamData". It then updates in the JSON file   on the getpantry.cloud API basket using fetch. All items in the array are later accessed on the web page with the getDream() and searchDream() functions.

putDream() also makes the first letter of the users name capitalized. When a dream has been submitted, the user is alerted that a dream has been submitted and the page reloads automatically.
  
	"Analyze text and display information about it (ex: how many words in a paragraph)"

When the user enters their dream, it shows the word and character count in real time.
	
Other features includes expandable divs for the dream methods, and verifying that the email entered for the newsletter is actually an email address.
