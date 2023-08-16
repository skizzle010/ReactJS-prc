import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza &Co.</h1>
    </header>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);
  const pizzas = pizzaData;
  //   if (hour >= openHour && hour < closeHour) alert("We're currently open");
  //   else alert("Sorry We are closed!!");

  return (
    <footer className="footer">
      {pizzas.length > 0 ? (
        <div>
          {isOpen ? (
            <div className="order">
              <CloseHour closeHour={closeHour} />
              <button className="btn">Order Now!</button>
            </div>
          ) : (
            <p>Sorry we are closed!!</p>
          )}
        </div>
      ) : null}
    </footer>
  );
};

function CloseHour({ closeHour /*destructing props*/ }) {
  return (
    <p>
      We're currently open until {closeHour}:00. Come visit us or order online.
    </p>
  );
}

const Menu = () => {
  // const pizzas = [];
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone over, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're currently sold out</p>
      )}
    </main>
  );
};

const Pizza = (props) => {
  // if (props.soldOut)
  //   return (
  //     <div className="pizza">
  //       <img className="pizza-image" src={props.photoName} alt={props.name} />
  //       <li>
  //         <h3>{props.name}</h3>
  //         <p>{props.ingredients}</p>
  //         <span>{props.price}$</span>
  //         <p>Sold Out</p>
  //       </li>
  //     </div>
  //   );
  // return (
  //   <div className="pizza">
  //     <img src={props.photoName} alt={props.name} />
  //     <li>
  //       <h3>{props.name}</h3>
  //       <p>{props.ingredients}</p>
  //       <span>{props.price}$</span>
  //     </li>
  //   </div>
  // );
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <li>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "sold out" : "$" + props.price}</span>
      </li>
    </div>
  );
};

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//React before v18
//React.render(<App /, document.getElementById("root")>
