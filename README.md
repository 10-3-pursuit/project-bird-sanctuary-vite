# Bird Sanctuary App

## Overview

This React application, named "Bird Sanctuary," provides a platform for users to adopt exotic birds by making donations. The application features a selection of birds displayed on cards, a shopping cart to track selected birds, a checkout process for users to provide their information, and a discount system based on the total donation amount.

## File Structure

- **App.js**: The main component that orchestrates the application's structure and logic.
- **Cards.js**: Displays a list of exotic birds in card format, each with an "Adopt" button to add the bird to the shopping cart.
- **Cart.js**: Manages the shopping cart, displaying selected birds, total price, applied discounts, and bonus items based on the total donation amount.
- **Checkout.js**: Handles user information input for the adoption process, triggers checkout, and resets the cart.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.

## Components

### 1. App Component (App.js)

- **State:**

  - `exoticBird`: Tracks selected birds in the cart.
  - `totalPrice`: Tracks the total price of selected birds.
  - `discount`: Tracks the discount percentage.

- **Functions:**
  - `addToCart(ele)`: Adds a selected bird to the cart.
  - `handleCheckout(infoData)`: Handles the checkout process and logs the provided user information.
  - `handleResetCart()`: Resets the cart, including selected birds, total price, and discount.

### 2. Cards Component (Cards.js)

- **Props:**

  - `exoticBird`: Array of exotic birds.
  - `addToCart`: Function to add a bird to the cart.

- **Function:**
  - Displays a list of exotic birds in card format with an "Adopt" button.

### 3. Cart Component (Cart.js)

- **Props:**

  - `exoticBird`: Array of selected birds in the cart.
  - `setExoticBird`: Function to update the selected birds in the cart.
  - `totalPrice`: Total price of selected birds.
  - `setTotalPrice`: Function to update the total price.
  - `discount`: Discount percentage.
  - `setDiscount`: Function to update the discount percentage.

- **Functions:**

  - `handleDelete(bird)`: Deletes a selected bird from the cart.
  - `calculateBonuses(exoticBird)`: Calculates bonus items based on the total donation amount.
  - `calculateTotalPriceNoDiscount()`: Calculates the total price after applying the discount.

- **Rendering:**
  - Displays the selected birds in a list with delete buttons.
  - Shows the total price, applied discount, and selected bonus items if any.

### 4. Checkout Component (Checkout.js)

- **Props:**

  - `onCheckout`: Function to handle the checkout process.
  - `onResetCart`: Function to reset the cart.

- **State:**

  - `infoData`: Manages user information input (first name, last name, email, zip code).

- **Functions:**

  - `handleInputChange(e)`: Handles changes in the form input fields.
  - `handleSubmit(e)`: Handles form submission, triggers checkout, shows a success alert, and resets the cart.

- **Rendering:**
  - Displays a form for users to input their information.
  - Includes input fields for first name, last name, email, and zip code.
  - Provides a "Checkout" button to submit the form.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Hooks (useState)**: Enables the use of state and other React features without writing a class.
- **CSS (index.css)**: Stylesheet for basic styling.

## Note

This is a simple application, and further improvements and features can be added based on specific requirements and user feedback.
