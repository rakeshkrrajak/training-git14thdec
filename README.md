# Node.js Application with GitHub Actions

A simple Node.js application demonstrating automated testing and linting with GitHub Actions CI/CD pipeline configured to run on pull requests.

## 📋 Overview - 

This repository contains a basic Node.js application with:
- Simple greeting functionality
- Automated testing with Jest
- Code quality checks with ESLint
- CI/CD pipeline using GitHub Actions
- Pull request validation workflow

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.x or 20.x recommended)
- npm (comes with Node.js)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd training-git14thdec
```

2. Install dependencies:
```bash
npm install
```

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── pr-check.yml      # GitHub Actions workflow for PR checks
├── index.js                   # Main application file
├── index.test.js              # Jest tests for the application
├── jest.config.js             # Jest configuration
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore patterns
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## 🔧 Available Scripts

### `npm start`
Runs the application. Executes the main greeting function and displays output.

```bash
npm start
```

### `npm test`
Runs the Jest test suite to verify application functionality.

```bash
npm test
```

### `npm run lint`
Runs ESLint to check code quality and style.

```bash
npm run lint
```

## 📝 Code Overview

### Main Application (`index.js`)
Contains a `greet()` function that returns personalized greeting messages. The main function demonstrates basic console output.

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
```

### Tests (`index.test.js`)
Jest-based unit tests that validate the greeting functionality:
- Verifies greeting message format
- Tests with different input values

### Configuration Files

- **`.eslintrc.js`**: ESLint rules for code quality (ES2021, Node environment)
- **`jest.config.js`**: Jest testing configuration with coverage settings
- **`.gitignore`**: Excludes node_modules, coverage reports, logs, and IDE files

## 🔄 GitHub Actions CI/CD

### Pull Request Workflow (`.github/workflows/pr-check.yml`)

Automatically runs on every pull request to `main` or `master` branches:

**Workflow Steps:**
1. ✅ Checks out the code
2. ✅ Sets up Node.js (tests on versions 18.x and 20.x)
3. ✅ Installs dependencies
4. ✅ Runs ESLint for code quality
5. ✅ Executes Jest tests
6. ✅ Verifies build process

**Matrix Strategy:** Tests run in parallel on multiple Node.js versions to ensure compatibility.

### How It Works

When you create a pull request:
- GitHub Actions automatically triggers
- Runs linting and tests on Node.js 18.x and 20.x
- Displays results in the PR checks section
- Prevents merging if checks fail (configurable)

## 🧪 Testing

The project uses Jest for testing. Tests cover:
- Basic greeting functionality
- Message formatting
- Different input scenarios

Run tests with coverage report:
```bash
npm test -- --coverage
```

## 🛠️ Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "Description of changes"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

4. Create a pull request on GitHub
5. GitHub Actions will automatically run checks
6. After approval and passing checks, merge your PR's

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
6. Ensure all CI checks pass



## 👥 For New Team Members

### Quick Start Checklist
- [ ] Clone the repository.
- [ ] Run `npm install`
- [ ] Run `npm test` to verify setup
- [ ] Run `npm start` to see the application in action
- [ ] Review the code in `index.js`
- [ ] Check the workflow file in `.github/workflows/pr-check.yml`
- [ ] Create a test branch and PR to see GitHub Actions in action

### Key Points to Remember
- Always create feature branches, never commit directly to main
- Write tests for new functionality
- Ensure `npm test` and `npm run lint` pass before pushing
- Pull requests require passing CI checks
- Code is automatically validated on Node.js 18.x and 20.x

---

**Note:** This project serves as a template for Node.js applications with automated CI/CD workflows.