import { createContext} from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = 'Rs';
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