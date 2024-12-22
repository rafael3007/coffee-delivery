import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Container, Heading, Info, InfoContent, Order } from './styles';
export function Success() {
    const { orders } = useCart();
    const { orderId } = useParams();
    const orderInfo = orders.find((order) => order.id === Number(orderId));
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    };
    const theme = useTheme();
    if (!orderInfo?.id) {
        return null;
    }
    return (_jsxs(Container, { children: [_jsxs(Order, { children: [_jsxs(Heading, { children: [_jsx("h2", { children: "Uhu! Pedido confirmado" }), _jsx("span", { children: "Agora \u00E9 s\u00F3 aguardar que logo o caf\u00E9 chegar\u00E1 at\u00E9 voc\u00EA" })] }), _jsx(Info, { children: _jsxs(InfoContent, { children: [_jsxs("div", { children: [_jsx(MapPin, { color: theme.colors.white, style: { backgroundColor: theme.colors.purple }, size: 32 }), _jsxs("div", { children: [_jsxs("span", { children: ["Entrega em", ' ', _jsxs("strong", { children: [orderInfo.street, ", ", orderInfo.number] })] }), _jsxs("span", { children: [orderInfo.neighborhood, " - ", orderInfo.city, ",", orderInfo.state] })] })] }), _jsxs("div", { children: [_jsx(Timer, { color: theme.colors.white, style: { backgroundColor: theme.colors.yellow }, size: 32 }), _jsxs("div", { children: [_jsx("span", { children: "Previs\u00E3o de entrega" }), _jsx("strong", { children: "20 min - 30 min" })] })] }), _jsxs("div", { children: [_jsx(CurrencyDollar, { color: theme.colors.white, style: { backgroundColor: theme.colors['yellow-dark'] }, size: 32 }), _jsxs("div", { children: [_jsx("span", { children: "Pagamento na entrega" }), _jsx("strong", { children: paymentMethod[orderInfo.paymentMethod] })] })] })] }) })] }), _jsx("img", { src: "/images/delivery.svg", alt: "Pedido conclu\u00EDdo" })] }));
}
