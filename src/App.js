import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { CartProvider } from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const handlerCartShow = () =>{
    setCartIsShown(true)
  }

  const handlerCartHide = () =>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
        {cartIsShown && <Cart handlerCartHide={handlerCartHide} />}
        <Header handlerCartShow={handlerCartShow} />
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
