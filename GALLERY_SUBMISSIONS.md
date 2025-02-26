
# Gallery Submissions Documentation

## Overview
The Gallery Submissions system manages art gallery applications through various stages of the submission process. The system tracks application status, payment information, and curatorial review progress.

## Features

### 1. Status Tracking
Applications are tracked through multiple status categories:

#### Application Form Status
- Not Started
- In Progress
- Completed

#### Payment Status
- Incomplete
- Paid

#### Curatorial Status
- Not Started
- In Progress
- Approved

### 2. Notes System
- Add notes to any submission via three-dot menu
- View historical notes with timestamps
- Each note includes:
  - Timestamp
  - Author
  - Note content
- Notes are displayed in chronological order
- Scrollable interface for viewing multiple notes

### 3. Filtering and Search
- Filter submissions by status
- Search by gallery name
- Filter by application stage

### 4. Table View
The main interface displays submissions in a table format with the following columns:
1. Gallery Name
2. Application Status
3. Payment Status
4. Curatorial Status
5. Notes

### 5. Actions
Available actions for each submission:
- View submission details
- Add notes
- View historical notes
- Update status
- Process payments
- Review curatorial content

## User Interface

### Main Navigation
- Submissions table with sortable columns
- Status indicators for each stage
- Action buttons for common tasks
- Notes interface with timestamps

### Status Indicators
Each submission has visual indicators for:
- Form completion status
- Payment status
- Curatorial review progress

## Workflow

### 1. Initial Submission
- Gallery completes application form
- System marks application as "In Progress"

### 2. Payment Processing
- Gallery submits payment
- Status updates to "Paid"

### 3. Curatorial Review
- All submissions start in "In Progress" status
- Reviewers can approve or request changes
- Final status updates upon completion

## Notes Feature

### Adding Notes
1. Click three-dot menu on any submission
2. Select "View Notes"
3. Enter note in text field
4. Click "Add Note"
5. Note is saved with current timestamp

### Viewing Notes
- Notes displayed in chronological order
- Each note shows:
  - Timestamp
  - Author
  - Content
- Scrollable interface for multiple notes

## Status Management

### Application Status Updates
- Automatic updates based on form completion
- Manual updates available through admin interface

### Payment Status
- Updates automatically with payment processing
- Manual override available for special cases

### Curatorial Status
- All submissions show as "In Progress"
- Status updates reflect review progress

## Best Practices

### Note Taking
1. Be specific and clear in note content
2. Include relevant dates and deadlines
3. Mention any follow-up actions required
4. Reference related communications

### Status Updates
1. Regularly review and update status
2. Document reason for status changes
3. Notify relevant parties of significant changes

## Technical Details

### Data Structure
```typescript
interface Submission {
  id: number;
  name: string;
  status: "Not Started" | "In Progress" | "Completed";
  paymentStatus: "Incomplete" | "Paid";
  curatorial: "Not Started" | "In Progress" | "Approved";
  invoicingStatus: "Not Started" | "Invoice Sent" | "Paid";
}

interface Note {
  id: number;
  text: string;
  timestamp: string;
  author: string;
}
```

This documentation will be updated as new features are added or existing ones are modified.
