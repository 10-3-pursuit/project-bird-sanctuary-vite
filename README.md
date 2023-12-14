# Bird Sanctuary ReactJS Project

## Project Objective

Create a bird sanctuary donation app using React, incorporating specific functionalities based on the user stories provided. The project aims to challenge your ReactJS skills, with each feature contributing to the total score of 9. A minimum of 6.5 points is required to pass, with partial credit possible. See the [Project Rubrik](RUBRIK.md) for specific qualifications.

## [Click to watch BIRD SANCTUARY DEMO VIDEO](https://drive.google.com/file/d/1DT8Rt842Dz_sRN9V_beWQrqKamnvrP7s/view?usp=sharing)

The following demo has been styled for clarity. You are not required to style this app like this.

![Bird Sanctuary](./assets/bird-sanctuary.gif)

## Initial Setup

1. **Fork the Repo**: Create a copy of this project's repository in your GitHub account.
2. **Clone the Fork**: Download your forked repository to your computer.
3. **Navigate to Directory**: Use command line to `cd` into the project folder.
4. **Install Dependencies**: Run `npm install` to set up project dependencies.
5. **Start Development Server**: Use `npm run dev` to launch the development environment.
6. **Regular Commits**: Remember to regularly save your work with `git add`, `git commit`, and `git push`.

## Project Completion and Submission

- **Implement Features**: Build out the project following the provided user stories.
- **Push Changes**: Regularly upload your work to GitHub.
- **Pull Request**: Create a pull request for your changes on GitHub.
- **Submit on Canvas**: Provide the link to your pull request for project submission.

## User Stories and Features

Implement the following features, each worth 1 point, for a total of 7 points.

1. Sections with birds displaying name, image, amount, and an adopt button.
1. Functionality to add birds to the shopping cart.
1. Display of total cost of birds in the cart.
1. A 10% discount for having 3 or more birds in the cart.
1. Bonus items for increasing cart totals.
1. A form to checkout the cart, which resets the cart upon submission.
1. Ability to delete a bird from the cart.

## Specific Component Requirements

### Cards Component

- [x] Use data from `src/data/birds.js` passed as props.

- [x] Display bird name, image, and price for each bird from the array.
- [x] Include an 'Adopt' button with text `Adopt`.
- [x] Assign the class name `card` to each bird card.

### Cart Component

- [x] Has the class name `cart`.
- [x] Add birds to the cart, displaying each bird's name, amount, and a delete button as list items in an ordered list (`<ol>`).
- [x] Show the total cost as an `<h4>` element within the cart.
- [x] Update total and list when additional birds are added.
- [x] Alert 'Bird Already Chosen' if the same bird is selected twice.
- [ ] Apply a 10% discount for 3 or more birds in the cart.
- [ ] Display discount as an `h5` tag. (e.g Discount: 0% or Discount: 10%)
- [ ] Allow deletion of birds from the cart, adjusting the total, discount, and bonus items accordingly.

#### Bonus Items in Cart

- [ ] Display bonus items in the cart as list items in a separate unordered list (`<ul>`), based on total cost thresholds. Bonus items are determined from the `src/data/bonusItems.js`.

- Bonus item thresholds:
  - [ ] 1 bonus (first array item) for a total between $100 and $300.
  - [ ] 2 bonuses (first and second array items) for a total between $300 and $500.
  - [ ] 3 bonuses (first, second, and third array items) for a total between $500 and $1000.
  - [ ] 4 bonuses (all array items) for a total over $1000.

### Checkout Component

- [ ] Has the class name `checkout`.
- [ ] Handle form completion and submission.
- [ ] Use `<label>` elements and proper attributes
- [ ] Alert `You have successfully adopted birds. Thank you!` upon successful submission.
- [ ] Upon closing the alert box, reset the cart entirely (removing all birds, discounts, and bonus items) and clear the checkout form.

## Additional Guidance

- Plan your component structure and state management carefully.
- Think about the interaction between components, especially regarding state and props.
- Test each feature against the user stories to ensure compliance with the requirements.

Focus on fulfilling these detailed requirements to successfully complete your Bird Sanctuary ReactJS project.

Good Luck!
