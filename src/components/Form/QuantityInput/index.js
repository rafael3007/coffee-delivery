import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Minus, Plus } from '@phosphor-icons/react';
import { Container } from './styles';
export function QuantityInput({ quantity, incrementQuantity, decrementQuantity, }) {
    return (_jsxs(Container, { children: [_jsx("button", { onClick: decrementQuantity, children: _jsx(Minus, { size: 14 }) }), _jsx("span", { children: quantity }), _jsx("button", { onClick: incrementQuantity, children: _jsx(Plus, { size: 14 }) })] }));
}
