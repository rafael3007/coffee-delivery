import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckFat, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import { QuantityInput } from '../Form/QuantityInput';
import { useCart } from '../../hooks/useCart';
import { CoffeeImg, Container, Control, Description, Order, Price, Tags, Title, } from './styles';
export function Card({ coffee }) {
    const [quantity, setQuantity] = useState(1);
    const [isItemAdded, setIsItemAdded] = useState(false);
    const theme = useTheme();
    const { addItem } = useCart();
    function incrementQuantity() {
        setQuantity((state) => state + 1);
    }
    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity((state) => state - 1);
        }
    }
    function handleAddItem() {
        addItem({ id: coffee.id, quantity });
        setIsItemAdded(true);
        setQuantity(1);
    }
    useEffect(() => {
        let timeout;
        if (isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false);
            }, 1000);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [isItemAdded]);
    return (_jsxs(Container, { children: [_jsx(CoffeeImg, { src: coffee.image, alt: coffee.title }), _jsx(Tags, { children: coffee.tags.map((tag) => (_jsx("span", { children: tag }, tag))) }), _jsx(Title, { children: coffee.title }), _jsx(Description, { children: coffee.description }), _jsxs(Control, { children: [_jsxs(Price, { children: [_jsx("span", { children: "R$" }), _jsx("span", { children: coffee.price.toFixed(2) })] }), _jsxs(Order, { "$itemAdded": isItemAdded, children: [_jsx(QuantityInput, { quantity: quantity, incrementQuantity: incrementQuantity, decrementQuantity: decrementQuantity }), _jsx("button", { disabled: isItemAdded, onClick: handleAddItem, children: isItemAdded ? (_jsx(CheckFat, { weight: "fill", size: 22, color: theme.colors['base-card'] })) : (_jsx(ShoppingCart, { size: 22, color: theme.colors['base-card'] })) })] })] })] }));
}
