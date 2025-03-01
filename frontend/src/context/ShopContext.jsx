import { createContext} from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import PropTypes from 'prop-types';



export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_Fee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)


    const value = {
        products,
        currency,
        delivery_Fee, 
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return (
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
