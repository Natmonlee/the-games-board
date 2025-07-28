
# The Games Board - Frontend

A React app where the public can view, create, update, and delete blog posts.

## Live Demo

https://natmonlee.github.io/the-games-board/

The frontend is hosted on GitHub Pages and communicates with a backend hosted on an AWS EC2 instance using a PostgreSQL database.

## Tech Stack

- Vite
- React (with TypeScript)
- React Router (HashRouter)
- Material UI
- CSS

## Install and Run Locally

Download files and unzip or clone with command below

```bash
  git clone https://github.com/Natmonlee/the-games-board.git
```

Go to the project directory

```bash
  cd the-games-board
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run dev
```

## Potential Improvements

- Separate in-line CSS into dedicated stylesheet or CSS modules.
- Improve responsiveness across devices.
- Add better navigation (e.g. navbar, keyboard shortcuts).
- Show loading spinners during async operations.
- Add confirmation popup before deleting a post.
- Add features such as:
  Images, tags, comments, likes, view counts.
  Search or filter functionality.
- Display cleaner and more user-friendly error messages.
- Show character limits on inputs.
- Auto-refresh post list or add a manual refresh button.
- Dockerize the app for easier deployment.
- Implement front end testing.

## Reflections

- I focused on using semantic HTML elements to improve clarity and accessibility.
- I built the app with responsiveness in mind from the start, though it still has room for improvement.
- I initially planned to use Tailwind CSS, but due to time constraints and my unfamiliarity with it, I opted for vanilla CSS. I plan to revisit       Tailwind in the future.
- I used HashRouter instead of regular routing because GitHub Pages doesn't support client-side routing. Hash-based routing ensures direct links work without 404 errors.
- I added location-based switching to interact with live or local database.
- I reused components where possible — for example, the same form is used for both creating and editing posts by passing an optional pageId prop.
- I chose Material UI to handle styling for interactive components (like hover states and resizable text areas) more efficiently.
- I wasn’t entirely happy with the visual design — I ran out of time to polish the layout and style, but the functionality is complete.

## Acknowledgements

https://www.flaticon.com/free-icons/meeple
Meeple icons created by WhoCon - Flaticon