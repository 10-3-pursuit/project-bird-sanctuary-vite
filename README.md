# Bird Sanctuary

## Overview
The Bird Sanctuary application is an interactive web platform designed for bird enthusiasts. It allows users to explore various bird species and 'adopt' them through donations. The application features a catalog of birds, a shopping cart, and a checkout system.

## Features
- **Bird Catalog**: Users can browse through a variety of bird species, each displayed with an image, name, and donation amount.
- **Cart Functionality**: Users can add birds to their cart and manage their selections.
- **Checkout Process**: A form to complete the donation process, including user information.
- **Dynamic Discounts**: The application calculates discounts and bonus items based on the total donation amount.
- **Responsive Design**: Styled using CSS to ensure a user-friendly interface.

## File Structure

- **App.jsx**: Main React component managing state and core functions like `addToCart`, `removeFromCart`, and `resetCart`.
- **index.css**: CSS file defining the styling and layout of the application.
- **main.jsx**: Entry point for the React application, rendering the `App` component.
- **Cards.jsx**: Component for displaying individual bird cards with an 'Adopt' button.
- **Cart.jsx**: Component managing the shopping cart, displaying total cost, discount, and bonus items.
- **Checkout.jsx**: Component handling the checkout process with a user information form.
- **birds.js**: Data file containing an array of bird objects with details like image, name, and donation amount.
- **bonusItems.js**: Data file listing bonus items available based on the donation amount.

## Getting Started
To run the Bird Sanctuary application:
1. Ensure you have Node.js and npm installed.
2. Clone the repository and navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.
5. Access the application at `localhost` in your web browser.

To access the live site, navigate to https://velvety-torrone-e1cf2e.netlify.app/

## Contributing
We welcome contributions to the Bird Sanctuary project. Access the GitHub repo here: https://github.com/josebarrios23/project-bird-sanctuary-vite
