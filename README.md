# Bird Sanctuary ReactJS Project

## Introduction
The **Bird Sanctuary Donation App** was created using React. With this App, you can 'adopt' a bird by clicking on the `Adopt` button. The more you donate, the more we can help these birds in need. You will also receive bonus items depending on how much you donate.

## Initial Setup

1. **Fork the Repo**: Create a copy of this project's repository in your GitHub account.
2. **Clone the Fork**: Download your forked repository to your computer.
3. **Navigate to Directory**: Use command line to `cd` into the project folder.
4. **Install Dependencies**: Run `npm install` to set up project dependencies.
5. **Start Development Server**: Use `npm run dev` to launch the development environment.

## User Stories and Features

1. As a donor, I want to clearly see each bird's information in sections   displaying the bird's name, image, amount, and an adopt button.
1. As a donor, I want to add birds to the shopping cart.
1. As a donor, I want to know the total cost of birds in my cart.
1. As a donor, I'd like a discount for donating to a certain number of birds in my cart.
1. As a donor, I'd like bonus items for increasing cart totals.
1. As a donor, I'd like a clear place to input my information to checkout.
1. As a donor, I want the ability to delete a bird from the cart.

## Functionality
- Click on `Adopt` to add a bird to your cart.
- You cannot adopt a bird more than once. If you choose a bird more than once, you will get an $\textsf{\color{red}error}$ message.
- Adding three or more birds to your cart will add a *10% discount*.
- A bonus item is included in your cart starting at donating $100, and more items will be added depending on how much is donated.
- You can remove a bird from your cart by clicking the `Remove` button. Your cart will update with your new total and bonus items.
- Enter your information for **Checkout**. Click `Submit` to donate and adopt birds.
