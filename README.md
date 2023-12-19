# Bird Sanctuary Application

## Overview
This Bird Sanctuary application is a React-based web application designed for bird adoption. It allows users to browse a selection of birds, add them to a shopping cart, and proceed through a checkout process.

## Components

### App.jsx
- **Main Component**: Manages the application's state, including the shopping cart and total amount.
- **Integrates** other components like `Cards`, `Cart`, and `Checkout`.
- **Data Source**: Utilizes a separate bird data file.

### main.jsx
- **Entry Point**: Initializes and renders the `App` component.
- **CSS Integration**: Includes global CSS styling from `index.css`.

### index.css
- **CSS Styling**: Provides the visual layout and styling for the application.
- **Layout**: Uses flexbox for arranging bird cards and sections.

### Cards.jsx
- **Function**: Displays a collection of bird cards for adoption.
- **Features**: Each card shows bird details and an adopt button.
- **Interaction**: Adopt button adds the bird to the shopping cart.

### Cart.jsx
- **Role**: Manages and displays items in the shopping cart.
- **Discount Calculation**: Applies discounts and offers bonus items based on total spend.
- **User Interaction**: Allows removal of items and application of discounts.

### Checkout.jsx
- **Purpose**: Handles the checkout process.
- **Form Management**: Manages user input for finalizing the adoption process.
- **Feedback**: Provides confirmation upon successful submission.

## Initial Setup

1. **Fork the Repo**: Create a copy of this project's repository in your GitHub account.
2. **Clone the Fork**: Download your forked repository to your computer.
3. **Navigate to Directory**: Use command line to `cd` into the project folder.
4. **Install Dependencies**: Run `npm install` to set up project dependencies.
5. **Start Development Server**: Use `npm run dev` to launch the development environment.