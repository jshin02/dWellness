# dWellness: An application to "check-in" at places you visit

This application allows a user to maintain a log of places they visit with check-ins for each time they visit, where they are encouraged to dwell on their time spent by evaluating their wellness each time they visit. Afterwards, users will have an index of places that provide a snapshot of how each place affects their Wellness.
The categories users will evaluate are Health, Work, Play and Love.
The scoring of each section is defined as follows:
- Health: Wellness in Mind, Body and Spirit
  - Ex: Fatigue, Energy, Balance
- Work: Self-Improvement and Growth
  - Ex: Work, Passions, Skills and Interests
- Play: Joy
  - Ex: How much joy was added by this experience?
- Love: Connection, Affection and Intimacy
  - Ex: Did this experience make you feel important?
  - Ex: Did this experience make you feel loved?

Note: The evaluation of places was inspired by the book "Designing Your Life" by Bill Burnett & Dave Evans.
More about the book can be found [here](https://designingyour.life/the-book/)

## Important Links

- [API Repo](https://github.com/jshin02/dWellness_api)
- [Deployed API](https://git.heroku.com/damp-shore-57998.git)
- [Deployed Client](https://jshin02.github.io/dWellness/)

## Planning Story

The intention is to create the interactivity of each CRUD request made to the API.
First I will present the index when the user logs in, then operate on each CRUD request per place they add in.
Next, I will design the user authentication experience.
Next, I will work on the second resource (called "notes") and the display and interaction with those CRUD requests.
Next, I will work on data interaction between the two resources.
Finally, I will find a way to incorporate a 3rd party resource.

### User Stories

- As a user, I want to make a note each time I visit a place so I can see my visits there over time.
- As a user, I want to make a not of "places to visit" or "familiar places".
- As a user, I want to evaluate where I've taken the most notes so that I can reflect on where I'm spending the most time.
- As a user, I want to rate the value I derived in one of the four aforementioned categories.
- As a user, I want to set a reminder to return to a place within a time frame.
- As a user, I want to note if a place should be revisited, and filter by that categorization.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- Handlebars

### Unsolved Problems

- Still need to improve how users can update places
- Still need to improve how users can update notes

- Would like to eventually integrate a 3rd party API
- Would like to eventually prepopulate a form that needs to be updated.
- Would like to eventually create a data visual of all the scores users provide through their notes.

## Images

---

#### Wireframe:
![wireframe](https://imgur.com/zIbBGin)
