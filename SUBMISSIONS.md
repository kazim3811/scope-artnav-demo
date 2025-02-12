
# Gallery Submissions Management System

This document outlines the key features and functionality of the Gallery Submissions system.

## Navigation & Layout

### Main Navigation
- Located at route: `/submissions`
- Top header with breadcrumb navigation showing: Fair Submissions > SCOPE DEMO > application
- Left sidebar navigation with progress tracking

### Tab Navigation
1. Gallery Applications
   - Main application management interface
   - Status tracking
   - Notes and comments functionality
2. Rejected
   - View rejected applications
3. Waitlist
   - Manage waitlisted applications
4. Accepted
   - View and manage accepted applications
5. Placed
   - Track placed applications and booth assignments

## Application Process

### Step 1: Welcome
- Initial welcome screen
- Introduction to the application process
- Overview of requirements

### Step 2: Gallery Details
- Gallery information collection
  - Gallery name
  - Contact details
  - Gallery history
  - Background information
  - Website details
  - Year established

### Step 3: Choose Booth
- Interactive booth selection interface
- Visual booth layout
- Booth pricing information
- "Proceed to Deposit" CTA button

### Step 4: Payment
- Secure payment processing
- Stripe payment integration
- Deposit collection
- Payment confirmation
- Receipt generation
- "Proceed to Curatorial" CTA

## Submissions Management

### Status Tracking
#### Application Form Status
- Not Started
- In Progress
- Submitted

#### Payment Status
- Not Completed
- Paid

#### Curatorial Status
- Not Started
- In Progress

### Features
- Gallery name search functionality
- Application form filtering
- Bulk action capabilities
- Note-taking system with timestamp tracking
- Historical notes viewing in CRM style
- Status updates and tracking
- Manual update options

### Table Columns
1. Selection checkbox
2. Actions (View/Return)
3. Gallery Name
4. Application Form Status
5. Payment Status
6. Curatorial Status
7. Notes
   - Add notes via three-dots menu
   - View historical notes with timestamps
   - Empty state indication

### Filters & Actions
- Status filters for each column
- Bulk selection capabilities
- Manual update button
- View/Return actions per submission
- Notes management system

## Responsive Design
- Adaptive layout for various screen sizes
- Mobile-friendly interface
- Responsive tables and forms

## Security & Permissions
- Secure payment processing
- User role-based access
- Data protection measures

## Data Management
- Real-time status updates
- Historical data tracking
- Notes and comments system
- Timestamp tracking for all changes

This documentation will be updated as new features are added or existing ones are modified.
