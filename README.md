Here’s a `README.md` template for your minimalist TV page project, created using React, TypeScript, and SOLID principles:

---

# Minimalist TV Page

A minimalist TV page application where users can browse through a list of movies and preview selected movie details. This project is built with **React** and **TypeScript**, adhering to **SOLID** design principles for maintainability and scalability.

## Features

- **Movie List**: Displays a list of movies fetched from an external API.
- **Movie Preview**: Shows detailed information about the selected movie, including description, rating, and trailer (if available).
- **Responsive Design**: Optimized for different screen sizes, providing a seamless user experience on both mobile and desktop.
- **SOLID Principles**: The code is structured following SOLID design principles to ensure separation of concerns, maintainability, and ease of future enhancements.
- **TypeScript**: Strongly typed for better developer experience and fewer runtime errors.

## Technologies Used

- **React**: JavaScript library for building the UI.
- **TypeScript**: Enhances code quality with static typing.
- **CSS Modules** or **Styled Components** (optional): For modular and scoped styling.
- **API Integration**: Fetches movie data from a movie database API (such as TMDb or a custom API).

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- npm (comes with Node.js)

## Getting Started

Follow the steps below to get the project up and running locally:

### 1. Clone the repository

```bash
git clone https://github.com/hrant0107/test-tv-app.git
cd test-tv-app
```

### 2. Install dependencies

```bash
npm install
```

This command will install all necessary dependencies as listed in `package.json`.

### 3. Run the development server

```bash
npm run dev
```

This will start the app in development mode on [http://localhost:5173](http://localhost:5173). The app will reload automatically if you make any changes to the code.

### 4. Build for production

To build the app for production and deploy to github pages:

```bash
npm run deploy
```

The production build will be optimized and stored in the `build` directory, ready for deployment.

## SOLID Principles in Action

This project follows SOLID design principles for a better, maintainable architecture:

- **S**ingle Responsibility Principle: Each component, hook, or service has a clear and well-defined responsibility.
- **O**pen/Closed Principle: The app is designed to allow easy extensions of functionality without modifying existing code.
- **L**iskov Substitution Principle: The code uses interfaces and abstract types to ensure components can be swapped or extended without breaking the system.
- **I**nterface Segregation Principle: Smaller interfaces are defined to avoid bloated interfaces that force components to implement unused methods.
- **D**ependency Inversion Principle: Dependencies between components are managed via dependency injection and abstract classes, reducing direct coupling.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run deploy`: Builds the app for production and deploy it to github pages.
