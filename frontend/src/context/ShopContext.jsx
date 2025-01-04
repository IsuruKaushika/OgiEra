import { createContext} from "react";
import { products } from "../assets/assets";
import { useState } from "react";



export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);


    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }




    const contextValue = {products};
    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;