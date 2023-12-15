**Bird Sanctuary Donation App**

Love you some birds? Welcome to my Bird Sanctuary Donation App! In this ReactJS project, my aim is to create an interactive, functional and engaging web application for the user to donate to the bird sanctuary. The app incorporates various functionalities based on our user stories and guidelines provided. Hopefully also, a seamless UX for bird adoption.

                              *Table of Contents*         
Features           ~                ~~                              serutaeF
  Installation           ~     ~              ~~                noitallatsnI
          Usage                                    ~~        egasU
              Components           ~~                  stnenopmoC
                    Bonus Items          ~~     smetI sunoB
                          Contributing   nitubirtnoC
                                License esneciL


# Features
-Sections displaying birds with name, image, amount, and adopt button.
-Functionality to add birds to the shopping cart.
-Display of the total cost of birds in the cart.
-A 10% discount for having 3 or more birds in the cart.
-Bonus items for increasing cart totals.
-A form to checkout the cart, resetting the cart upon submission.
-Ability to delete a bird from the cart.

## Installation
To run the app locally, follow these steps:
1st..
Clone the repository: git clone https://github.com/your-username/bird-sanctuary-app.git

2nd...
Navigate to the project directory:
cd bird-sanctuary-app

3rd...
Install dependencies: npm install
Start the development server: npm start

### Components
Card Component
The `Card component` displays individual birds with the following details:
Name
Image
Amount
Adopt button

Cart Component
The `Cart component` manages the shopping cart, providing:
Addition of birds to the cart
Display of total cost
10% discount for 3 or more birds
Bonus items based on the cart total
Deletion of birds from the cart

Checkout Component
The `Checkout component` includes a form for submitting the cart and resetting it upon submission.

# Bonus Items
Bonus items are displayed in the cart based on the following criteria:

1 bonus for a total between $100-$300.
2 bonuses for a total between $300-$500.
3 bonuses for a total between $500-$1000.
4 bonuses for a total over $1000.

## Contributing
Contributions are welcome! To contribute to the project, follow these steps:

**Fork the repository**
Create a new branch: git checkout -b feature/new-feature.
Commit your changes: git commit -m 'Add new feature'.
Push to the branch: git push origin feature/new-feature.
Submit a pull request.