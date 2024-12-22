import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Aside, Container } from './styles';
import Logo from "../../assets/logo.svg";
import { useEffect, useState } from 'react';
export function Header() {
    const { cart } = useCart();
    const [location, setLocation] = useState({ city: '', state: '' });
    const apiKey = import.meta.env.VITE_API_KEY_GEO;
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
                const data = await response.json();
                const { city, state_code } = data.results[0].components;
                setLocation({
                    city,
                    state: state_code
                });
            });
        }
        else {
            alert('Geolocalização não é suportada pelo seu navegador');
        }
    }, []);
    return (_jsxs(Container, { children: [_jsx(Link, { to: "/", children: _jsx("img", { src: Logo, alt: "Coffee Delivery" }) }), _jsxs(Aside, { children: [_jsxs("div", { children: [_jsx(MapPin, { size: 22, weight: "fill" }), _jsx("span", { children: location.city ? `${location.city}, ${location.state}` : 'Localização...' })] }), _jsxs(Link, { to: `cart`, "aria-disabled": cart.length === 0, children: [_jsx(ShoppingCart, { size: 22, weight: "fill" }), cart.length > 0 ? _jsx("span", { children: cart.length }) : null] })] })] }));
}
