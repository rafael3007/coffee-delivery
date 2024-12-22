import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Container } from './styles';
export const Radio = forwardRef(function Radio({ children, isSelected, ...rest }, ref) {
    return (_jsxs(Container, { "data-state": isSelected, children: [_jsx("input", { type: "radio", ref: ref, ...rest }), children] }));
});
