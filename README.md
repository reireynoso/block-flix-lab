This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React E-Commerce Lab

## Setup

Run `npm install`

To get you going, we've got a backend with store items! To get these, you're going to have to do the following:

1. Run `json-server --watch -p 4000 db.json`
2. Visit `http://localhost:4000/items` to confirm the list of photos.

If the command, `json-server` is not recognized, you might have to run `npm install -g json-server`

Let's run the app with `npm run start` or `npm start`. You will be asked if to use localhost:3001, consent to that.

## Background

We have a React E-Commerce Application. We want the App to show us a list of all items in the database. We want to be able to add items to our cart and order once we are ready. We want to also see a list of past orders we placed with each item (almost like a real e-commerce website!). We want to be able to render either the list of all items, cart, or list of past orders at a time (i.e if I click on the cart button on the header, the Main Component should only render Cart Component.)

## Deliverables

**It might help to first draw out the component hierarchy**

* Fetch the data from http://localhost:4000/items
* Render each item with the ItemCard component.
* Each item card will have button that says Add to Cart, when clicked, will add to the cart (i.e it should be rendered in the CartContainer component). The button text should change to Already in Cart with the button being disabled. This can accomplished by adding a `disabled ` attribute to the button element. 
```
   <button disabled className="item-button">Already in Cart</button>
```
* In the `Header` component, we have a div of "E-Commerce Lab", "Orders", and "Cart". By default, when the page loads, ItemsContainer should render with the list of all items fetched from the database. 

* When Cart is clicked, the `CartContainer` component should render with only the items that were added to the cart. A "Place Order" button exist which will empty the items in the cart and add the order with items to the list of orders.

* When Orders is clicked, `OrderContainer` should render a list of previous orders using the `OrderComponent` with the items included using the `OrderItemCard` component. (To achieve this, consider setting Order as an array of arrays).

* In the `CartContainer`, the `CartCard` generated should have a button with the text "Remove from Cart". When this button is clicked, it should remove the specific item from the cart.

* In the `Header` component, we also have the `FilterAndSortComponent` that contains both the `SortComponent` and `FilterComponents`. This component should only be rendered when you viewing ALL of the items, not when you are viewing the Cart or Orders. 

* The `SortComponent` should render a select with the option of each category of the items. When a specific category is selected, only the items with the same category should be rendered.

* The `FilterComponent` renders an input field. This should also render out only the items whose names match 

### BONUS 

* Incorporate a `SearchBarComponent` under `PhotoContainer`. The goal is to `filter` out the photos whose author matches what is being typed. This should be dynamic. (i.e As I am typing, the photos in the container are immediately filtered)

* Notice that `PhotoContainer` and `FavoritePhotosContainer` seem pretty redundant. Any way we can reuse just one component?