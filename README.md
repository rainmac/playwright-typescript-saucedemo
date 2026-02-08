
# Framework Choice
I choose Playwright/TypeScript for this project because of it's speed and reliability. It's support for parallel test execution and the built-in auto-waiting for elements removes the need for artificial timeouts, significantly reducing flaky tests. 
<br/>
<br/>
# SauceDemo Test Plan
## Project Overview
**Application Under Test:** SauceDemo (Swag Labs) — a demo e-commerce web application featuring user authentication, product listing, cart management, and checkout.<br/>
**URL:** https://www.saucedemo.com/ <br/>
**Purpose:** Validate core user journeys and ensure the system delivers reliable functionality across key workflows. <br/>

---

## Test Objectives
- Confirm inventory listing contains "Sauce Labs Backpack" item. 
- Test **cart operations** by adding "Sauce Labs Backpack". 
- Validate **checkout flow** from cart to order completion.

---

## Scope

### In Scope
- Checkout flow - Checkout the an item and order confirmation.

### Out of Scope
- Performance testing (load, stress).  
- Security testing (penetration, vulnerability scanning).  
- Accessibility and localization.
- Other test scenario

---

## Test Environment
- Web browsers: Chrome, Mobile Viewport (iPhone 12 Pro)
- Test data: Standard test user accounts
- Test automation tools: Playwright (TypeScript)

---

## Entry Criteria
- Application available and reachable.  
- Test accounts provisioned (`standard_user`).
- Test environment configured.

## Exit Criteria
- All high-priority test cases executed.  
- All critical defects verified fixed.

---

## Test Scenarios

---

### Product Listing
- Inventory loads with expected items.

---

### Cart Operations
- **Add to Cart:** Item "Sauce Labs Backpack" added and reflected in cart.

---

### Checkout Flow
- Navigate to cart and proceed to checkout.
- Enter your information.  
- Validate order summary totals.  
- Complete order and verify confirmation message.

---

## Test Types
- **Functional Testing:** Confirm core functionality.
- **Cross-Browser Testing:** Chrome and Mobile Viewport.

---

## Risk Assessment
| Risk | Impact | Mitigation |
|------|--------|------------|
| Flaky environment | High | Isolate tests, stabilize data |
| Continuous changes | Medium | Frequent regression runs |
| Checkout failures | High | Mock payment or use sandbox |

---

## Deliverables
- Test cases and scenarios list  
- Test execution reports  
- Defect logs  

---

## Schedule
| Activity | Estimated Duration |
|----------|------------------|
| Test planning | 1 day |
| Test case development | 2 days |
| Test execution | 3 days |
| Reporting | 1 day |

---

## Approvals
- QA Lead
<br/>
<br/>
<br/>
# The "Hybrid" Approach
The hybrid testing approach uses APIs to handle setup steps like login and data creation, then uses UI tests to focus verifying the main user flow. Risk may include some real user actions (like the login screen or UI performance issues) may not be fully tested during this process but the reward of this approach is that it makes tests faster, more stable, and easier to maintain.