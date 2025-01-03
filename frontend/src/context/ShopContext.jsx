import { createContext} from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFee = 50;

    const value = {
        products,
        currency,
        deliveryFee
    }



    const contextValue = {products};
    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;