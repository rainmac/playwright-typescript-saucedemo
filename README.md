# Project Title
Playwright - TypeScritp - SauceDemo

## Description

A simple test automation for testing SauceDemo ( https://www.saucedemo.com/ ) using Playwright and TypeScript. This test automation uses Page Object Model (POM), injects user session cookie (uses standard_user access) to bypass the SauceDemo site login screen. It is configured to run in Gitlab CI on a push to main branch.

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Dependencies

List any prerequisites, libraries, or operating system versions needed before installing the program.

*   Node.js (v24.13.0)
*   Git

### Installation

Step-by-step instructions on how to install and set up your project locally.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rainmac/playwright-typescript-saucedemo.git
    cd playwright-typescript-saucedemo
    ```
2.  **Install dependencies (e.g., using npm):**
    ```bash
    npm install
    ```

### Executing Program

Instructions on how to run the tests once installed. Include code blocks for commands.

*   **To run the test suite in Chromium (Desktop):**
    ```bash
    npm run test
    ```
*   **To run the test suite in Safari (iPhone 12):**
    ```bash
    npm run test-mobile
    ```

## Authors

List the names and contact information of the contributors.

*   **Reiner Tolentino** - [https://github.com/rainmac](https://github.com/rainmac)