
# Gallery Submissions Management System

This document outlines the key features and functionality of the Gallery Submissions system.

## Application Process

### Step 1: Welcome
- Initial welcome screen
- Introduction to the application process

### Step 2: Gallery Details
- Gallery information collection
- Contact details
- Gallery history and background

### Step 3: Choose Booth
- Interactive booth selection
- Visual booth layout
- "Proceed to Deposit" CTA button

### Step 4: Payment
- Secure payment processing interface
- Stripe payment form integration
- Deposit payment confirmation
- "Proceed to Curatorial" CTA
- Payment status tracking

## Features

### Navigation
- Located at the route: `/submissions`
- Breadcrumb navigation showing: Fair Submissions > SCOPE DEMO > application
- Step-by-step progress indicator

### Tab Navigation
- Gallery Applications
- Gallery Submissions
- Represented Artists
- Results Manager
- Public User Applications
- Committee Sheets

### Search and Filtering
- Gallery Name search functionality
- Application Form dropdown filter with options:
  - Any
  - SCOPE
  - VOLTA
  - FOCUS

### Action Buttons
- All Result
- All Status
- All Terms & Conditions

### Submissions Table
#### Columns:
1. Selection checkbox
2. Actions (View/Return)
3. Gallery Name
4. Application Form
5. Payment Status
6. Curatorial
7. Notes

### Status Indicators
- Not Submitted (red)
- Completed (green)
- Payment Due (yellow)
- Paid (green)
- Under Review (blue)
- Approved (green)
- Rejected (red)

## Layout
The application uses a main layout component that includes:
- Left sidebar navigation with progress tracking
- Top header with breadcrumb navigation
- Main content area for each step
- Responsive design for various screen sizes

## Payment Processing
- Secure payment integration
- Deposit collection
- Payment confirmation system
- Transaction tracking
- Receipt generation

