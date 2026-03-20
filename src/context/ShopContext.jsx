import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";   // ✅ FIXED (important)
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate(); // ✅ now works properly

  // ✅ ADD TO CART
  const addToCart = (itemId, size) => {

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  // ✅ UPDATE QUANTITY (SAFE)
  const updateQuantity = (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) return;

    cartData[itemId][size] = quantity;

    // remove item if quantity = 0
    if (quantity === 0) {
      delete cartData[itemId][size];
    }

    setCartItems(cartData);
  };

  // ✅ GET CART COUNT
  const getCartCount = () => {

    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          totalCount += cartItems[itemId][size];
        }
      }
    }

    return totalCount;
  };

  // ✅ GET TOTAL AMOUNT (SAFE)
  const getCartAmount = () => {

    let totalAmount = 0;

    for (const itemId in cartItems) {

      let itemInfo = products.find(product => product._id === itemId);

      if (!itemInfo) continue; // ✅ prevent crash

      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          totalAmount += cartItems[itemId][size] * itemInfo.price;
        }
      }
    }

    return totalAmount;
  };

  // ✅ DEBUG (optional)
  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  // ✅ CONTEXT VALUE
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;