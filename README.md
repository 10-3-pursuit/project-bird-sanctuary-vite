# Bird Sanctuary ReactJS Project

Welcome to the Bird Sanctuary! Our goal is to find a loving home for the most lovable birds. We hope you take the time to look at our selection of birds and decide to adopt today!


## Setup
1. Clone the repository to your computer 
```git clone https://github.com/iris-beckham/project-bird-sanctuary-vite.git```
2. Use `cd` in command line to navigate to the repository folder
3. Install dependencies and launch the development environment
```
  npm install 
  npm run dev
```
## Features

### Adoptable Birds
On the website, there are cards with information about avaible birds, each containing:
-  bird name
- the price of the bird
- an image of the bird
- a button to adopt them

### Cart
Users can add birds to their cart by clicking on the 'adopt' button on one of the cards. The cart section displays:
- The current total cost of all the birds in the cart 
- The discount applied in percentages (10% for 3 or more birds)
- Cart items, of which:
  - bird name and price are displayed
  - there cannot be more than one of the same bird in the cart
  - a bird in the cart can be removed by clicking on the trashcan icon
- Bonus items are determined by the total amount spent
  - Stickers for spending over $100
  - A computer background for spending over $300
  - A tote bag for spending over $500
  - Invites to VIP live streams for spending over $1000

### Checkout
The checkout contains a fillable form that requires the input of a valid first and last name, email, and zip code in order to successfully adopt a bird. If the form is filled out incorrectly or there are no birds selected for adoption, the form will not be submitted. 
