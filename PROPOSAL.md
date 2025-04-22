# Project Description

## Nakameet

Nakameet is a full-stack CRUD application designed to help locals discover and share community events happening nearby — from concerts and open mics to bar crawls, volunteer opportunities, and more.
The platform empowers users to create, explore, and manage event listings. Events are sourced from the community, meaning anyone can contribute to building the calendar. This creates a dynamic, inclusive space for discovering what’s happening in your area.
Whether you're planning a small fundraiser or looking for something fun to do this weekend, this app brings the community closer through shared experiences.

## MVP (Minimum Viable Product) User Stories

1. Authentication
   - As a user, I want to create an account so I can post and manage my events.
   - As a user, I want to browse public events without logging in, but need to log in to create or edit posts.
2. User Interface
   - As a user, I want to create an event by entering details like title, date, time, location, category, description, and image.
   - As a user, I want to view a list of all upcoming events, filtered by category (e.g. free, music, service, nightlife).
   - As a user, I want to update/edit an event I created if details change.
   - As a user, I want to delete an event I created if it’s canceled.
   - As a user, I want to search and filter events by date, type, or neighborhood so I can find things I’m interested in.

## Stretch Goals (Future Enhancements)

- See who else is interested or going.
- Incorporate a RSVP option.
- Featured events or editor’s picks on the homepage.
- Display events on a map using Google Maps or Leaflet.js.
- Let admins approve flagged content or feature verified events.
- Let users bookmark events they want to attend.
- Notify users about upcoming events they’re interested in.

# Timeline - Daily Accountability

| Day       |     | Task                                                          | Blockers | Notes/ Thoughts |
| --------- | --- | ------------------------------------------------------------- | -------- | --------------- |
| Monday    |     | Create timeline, team guidelines, ERD, proposal, wirefram, US |          |                 |
| Tuesday   |     | Work on back-end/ Postman/ routes                             |          |                 |
| Wednesday |     | Work on front-end                                             |          |                 |
| Thursday  |     | Front-End completed                                           |          |                 |
| Friday    |     | Work on CSS, add one or two stretch goals, deploy app, Heroku |          |                 |
| Saturday  |     | Improve CSS, work with Alex during OO on errors               |          |                 |
| Monday    |     | Present Project to class                                      |          |                 |

---

## ERD

## ![ERD](ERD.png)

## WireFrame

## ![Landing Page](Landing-page.jpg)

## ![Event Page](event-page.jpg)

## ![Create Event](create-event.jpg)

## ![Log In](log-in.jpg)

## ![Sign Up](sign-up.jpg)

## Routes

| Method   | Path          | Description                               |
| -------- | ------------- | ----------------------------------------- |
| `POST`   | `/sign-in`    | Submits login credentials                 |
| `POST`   | `/sign-up`    | Submits new user data                     |
| `POST`   | `/signout`    | Handles user logout and redirect          |
| `GET`    | `/events`     | View all events                           |
| `POST`   | `/events`     | Submit new event to backend               |
| `GET`    | `/events/:id` | View specific event details               |
| `PUT`    | `/events/:id` | Submit updated event details              |
| `DELETE` | `/events/:id` | Delete event via UI (e.g., delete button) |
| `GET`    | `*`           | Fallback for undefined routes (404 page)  |

---

## Component Hierarchy

## ![Component Hierarchy](Component-hierarchy.jpg)
