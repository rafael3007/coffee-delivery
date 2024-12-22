import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, } from 'react';
import { Box, Container, ErrorMessage } from './styles';
export const TextInput = forwardRef(function TextInput({ optional, error, containerProps, onFocus, onBlur, ...rest }, ref) {
    const [isFocused, setIsFocused] = useState(false);
    function handleFocus(event) {
        setIsFocused(true);
        onFocus?.(event);
    }
    function handleBlur(event) {
        setIsFocused(false);
        onBlur?.(event);
    }
    return (_jsxs(Box, { ...containerProps, children: [_jsxs(Container, { "data-state": isFocused ? 'focused' : 'blurred', children: [_jsx("input", { type: "text", onFocus: handleFocus, onBlur: handleBlur, ref: ref, ...rest }), optional ? _jsx("span", { children: "Opcional" }) : null] }), error?.message ? (_jsx(ErrorMessage, { role: "alert", children: error.message })) : null] }));
});
