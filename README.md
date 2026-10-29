# React Practice

Small React exercises and projects for learning the fundamentals of React, Vite,
component composition, state, effects, props, routing, TypeScript, and Tailwind
CSS.

Each folder is an independent Vite application. There is no root-level
`package.json`; install dependencies and run commands from the project you want
to explore.

## Projects

| Project | What it covers | Stack |
| --- | --- | --- |
| [`custom-react-app`](./custom-react-app/) | A minimal look at how a React-like element can be rendered into the DOM with a custom `customRender` function. | Plain JavaScript |
| [`chai-aur-react`](./chai-aur-react/) | React and JSX basics, importing components, and passing/rendering simple values. | React, Vite, JavaScript |
| [`counter-01`](./counter-01/) | Local state with `useState`, event handlers, functional state updates, and React's batched updates. | React, Vite, JavaScript |
| [`project-01`](./project-01/) | Fetching data in `useEffect`, loading state, and splitting fetched users into reusable card components. | React, Vite, JavaScript |
| [`project-02`](./project-02/) | Fetching products on demand, conditional loading text, and rendering API results in TypeScript. | React, Vite, TypeScript |
| [`react-assignment`](./react-assignment/) | A small React assignment starter for practicing component and state fundamentals. | React, Vite, JavaScript |
| [`routing-practice`](./routing-practice/) | File-based routes with home and about pages using TanStack Router. | React, Vite, TanStack Router |
| [`tailwindProps-02`](./tailwindProps-02/) | Passing props to a reusable card component and styling a UI with Tailwind CSS utility classes. | React, Vite, Tailwind CSS |

## Getting started

### Prerequisites

- Node.js and npm, or [Bun](https://bun.sh/)
- A recent browser

### Run a project

Change into the project directory, install its dependencies, and start the
development server:

```bash
cd counter-01
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`. Replace
`counter-01` with any project directory from the table above. The
`custom-react-app` folder is a plain JavaScript example and does not have npm
scripts; open [`custom-react-app/index.html`](./custom-react-app/index.html) in
a browser or serve that folder with a static file server.

When using Bun, the equivalent commands are:

```bash
bun install
bun run dev
```

Run the commands from the selected project directory.

## Available scripts

The Vite projects expose the following scripts:

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

`project-02` also runs the TypeScript compiler as part of its build command.

## Suggested learning path

1. Start with [`custom-react-app`](./custom-react-app/) to see the basic
   relationship between an element description and DOM output.
2. Continue with [`chai-aur-react`](./chai-aur-react/) for JSX and components.
3. Use [`counter-01`](./counter-01/) to practice state and event-driven
   rendering.
4. Explore [`project-01`](./project-01/) and [`project-02`](./project-02/) for
   asynchronous data fetching and API-driven UI.
5. Compare [`tailwindProps-02`](./tailwindProps-02/) for reusable components,
   props, and utility-first styling.
6. Finish with [`routing-practice`](./routing-practice/) for multi-page
   navigation and [`react-assignment`](./react-assignment/) for independent
   practice.

## Notes

- The data-fetching projects use public API endpoints, so their displayed data
  depends on network availability and the response from those services.
- Each project has its own dependency lockfile and configuration. Keep changes
  scoped to the project being practiced.
- The project READMEs are Vite-generated starter documentation; this root
  README serves as the index for the complete practice repository.