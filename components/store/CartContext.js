
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    removeAllItems: () => { }
});

export const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);


    const addItem = (item) => {
        setItems((prevItems) => {
            console.log(prevItems);
            const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
            if (existingItemIndex > -1) {
                // Update the quantity if item already exists
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                }
                return updatedItems;
            } else {
                // Add new item with quantity set to 1
                const newItems = [...prevItems, { ...item, quantity: 1 }];
                console.log('New items:', newItems);
                return newItems;
            }
        });
    };

    useEffect(() => {
        // Retrieve stored cart data from localStorage
        const storedCart = localStorage.getItem("cartItems");
        setItems(storedCart ? JSON.parse(storedCart) : []);
    }, []);

    useEffect(() => {
        // Save cart data to localStorage on any update
        if (items.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(items));
        }
    }, [items]);

    const removeItem = (id) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(item => item.id === id);

            if (existingItemIndex === -1) {
                return prevItems; // If item is not found, return the existing items array
            }

            const updatedItems = [...prevItems];
            const existingItem = updatedItems[existingItemIndex];

            if (existingItem.quantity > 1) {
                // Reduce quantity if it's more than 1
                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1
                };
            } else {
                // Remove item if quantity is 1
                updatedItems.splice(existingItemIndex, 1);
            }

            return updatedItems;
        });
    };
    const removeAllItems = () => {
        setItems([]);
        localStorage.removeItem('cartItems');
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, removeAllItems }}>
            {children}
        </CartContext.Provider>
    );

};

export default CartContext;




















