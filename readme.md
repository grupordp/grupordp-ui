# Monorepo Structure

This project utilizes a monorepo structure to manage multiple packages in a single repository. Below is an overview of the structure and purpose of each package.

## Directory Structure

\```
root/
│
└── packages/
    ├── docs/
    │   └── ... (Storybook configuration and stories)
    │
    └── ui/
        └── ... (React components and their associated files)
\```

## Packages

### `docs`

This package contains our Storybook setup, where we document and showcase our React components from the `ui` package. It serves as a living documentation for the components, ensuring they are both visually and functionally tested.

**Main Features:**

- Storybook-based component explorer.
- Documentation for each component, detailing props and usage.
- Visual regression testing for components.

### `ui`

This is our main package containing reusable React components. Each component is built to be reusable, accessible, and customizable.

**Main Features:**

- Collection of general-purpose React components.
- Fully typed with TypeScript.
- Styled with a utility-first CSS approach.

## Getting Started

1. Clone the repository:

\```bash
git clone <repository-url>
\```

2. Navigate to the root directory:

\```bash
cd <repository-name>
\```

3. Install dependencies:

\```bash
yarn install
\```

4. To run the Storybook:

\```bash
cd packages/docs
yarn storybook
\```

5. To work with the `ui` package:

\```bash
cd packages/ui
\```

## Contributing

If you'd like to contribute to any of the packages, please ensure to follow our contribution guidelines. Create a new branch for each feature or bugfix, and once your changes are ready, open a pull request against the main branch.

---

This `README.md` provides a basic introduction to the monorepo structure. Depending on your needs, you might want to expand on certain sections, add installation or usage instructions, include screenshots, or any other relevant information.
