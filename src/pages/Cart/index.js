import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash, } from '@phosphor-icons/react';
import { QuantityInput } from '../../components/Form/QuantityInput';
import { TextInput } from '../../components/Form/TextInput';
import { Radio } from '../../components/Form/Radio';
import { AddressContainer, AddressForm, AddressHeading, CartTotal, CartTotalInfo, CheckoutButton, Coffee, CoffeeInfo, Container, InfoContainer, PaymentContainer, PaymentErrorMessage, PaymentHeading, PaymentOptions, } from './styles';
import { useCart } from '../../hooks/useCart';
import { coffees } from '../Home';
const newOrder = z.object({
    cep: z.number({ invalid_type_error: 'Informe o CEP' }),
    street: z.string().min(1, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    fullAddress: z.string(),
    neighborhood: z.string().min(1, 'Informe o bairro'),
    city: z.string().min(1, 'Informe a cidade'),
    state: z.string().min(1, 'Informe a UF'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
});
const shippingPrice = 3.5;
export function Cart() {
    const { cart, checkout, incrementItemQuantity, decrementItemQuantity, removeItem, } = useCart();
    const coffeesInCart = cart.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);
        if (!coffeeInfo) {
            throw new Error('Invalid coffee.');
        }
        return {
            ...coffeeInfo,
            quantity: item.quantity,
        };
    });
    const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.price * currentItem.quantity);
    }, 0);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm({
        resolver: zodResolver(newOrder),
    });
    const selectedPaymentMethod = watch('paymentMethod');
    function handleItemIncrement(itemId) {
        incrementItemQuantity(itemId);
    }
    function handleItemDecrement(itemId) {
        decrementItemQuantity(itemId);
    }
    function handleItemRemove(itemId) {
        removeItem(itemId);
    }
    const handleOrderCheckout = (data) => {
        if (cart.length === 0) {
            return alert('É preciso ter pelo menos um item no carrinho');
        }
        checkout(data);
    };
    return (_jsxs(Container, { children: [_jsxs(InfoContainer, { children: [_jsx("h2", { children: "Complete seu pedido" }), _jsxs("form", { id: "order", onSubmit: handleSubmit(handleOrderCheckout), children: [_jsxs(AddressContainer, { children: [_jsxs(AddressHeading, { children: [_jsx(MapPin, { size: 22 }), _jsxs("div", { children: [_jsx("span", { children: "Endere\u00E7o de Entrega" }), _jsx("p", { children: "Informe o endere\u00E7o onde deseja receber o seu pedido" })] })] }), _jsxs(AddressForm, { children: [_jsx(TextInput, { placeholder: "CEP", type: "number", containerProps: { style: { gridArea: 'cep' } }, error: errors.cep, ...register('cep', { valueAsNumber: true }) }), _jsx(TextInput, { placeholder: "Rua", containerProps: { style: { gridArea: 'street' } }, error: errors.street, ...register('street') }), _jsx(TextInput, { placeholder: "N\u00FAmero", containerProps: { style: { gridArea: 'number' } }, error: errors.number, ...register('number') }), _jsx(TextInput, { placeholder: "Complemento", optional: true, containerProps: { style: { gridArea: 'fullAddress' } }, error: errors.fullAddress, ...register('fullAddress') }), _jsx(TextInput, { placeholder: "Bairro", containerProps: { style: { gridArea: 'neighborhood' } }, error: errors.neighborhood, ...register('neighborhood') }), _jsx(TextInput, { placeholder: "Cidade", containerProps: { style: { gridArea: 'city' } }, error: errors.city, ...register('city') }), _jsx(TextInput, { placeholder: "UF", maxLength: 2, containerProps: { style: { gridArea: 'state' } }, error: errors.state, ...register('state') })] })] }), _jsxs(PaymentContainer, { children: [_jsxs(PaymentHeading, { children: [_jsx(CurrencyDollar, { size: 22 }), _jsxs("div", { children: [_jsx("span", { children: "Pagamento" }), _jsx("p", { children: "O pagamento \u00E9 feito na entrega. Escolha a forma que deseja pagar" })] })] }), _jsxs(PaymentOptions, { children: [_jsxs("div", { children: [_jsxs(Radio, { isSelected: selectedPaymentMethod === 'credit', ...register('paymentMethod'), value: "credit", children: [_jsx(CreditCard, { size: 16 }), _jsx("span", { children: "Cart\u00E3o de cr\u00E9dito" })] }), _jsxs(Radio, { isSelected: selectedPaymentMethod === 'debit', ...register('paymentMethod'), value: "debit", children: [_jsx(Bank, { size: 16 }), _jsx("span", { children: "Cart\u00E3o de d\u00E9bito" })] }), _jsxs(Radio, { isSelected: selectedPaymentMethod === 'cash', ...register('paymentMethod'), value: "cash", children: [_jsx(Money, { size: 16 }), _jsx("span", { children: "Dinheiro" })] })] }), errors.paymentMethod ? (_jsx(PaymentErrorMessage, { role: "alert", children: errors.paymentMethod.message })) : null] })] })] })] }), _jsxs(InfoContainer, { children: [_jsx("h2", { children: "Caf\u00E9s selecionados" }), _jsxs(CartTotal, { children: [coffeesInCart.map((coffee) => (_jsxs(Fragment, { children: [_jsxs(Coffee, { children: [_jsxs("div", { children: [_jsx("img", { src: coffee.image, alt: coffee.title }), _jsxs("div", { children: [_jsx("span", { children: coffee.title }), _jsxs(CoffeeInfo, { children: [_jsx(QuantityInput, { quantity: coffee.quantity, incrementQuantity: () => handleItemIncrement(coffee.id), decrementQuantity: () => handleItemDecrement(coffee.id) }), _jsxs("button", { onClick: () => handleItemRemove(coffee.id), children: [_jsx(Trash, {}), _jsx("span", { children: "Remover" })] })] })] })] }), _jsxs("aside", { children: ["R$ ", coffee.price?.toFixed(2)] })] }), _jsx("span", {})] }, coffee.id))), _jsxs(CartTotalInfo, { children: [_jsxs("div", { children: [_jsx("span", { children: "Total de itens" }), _jsx("span", { children: new Intl.NumberFormat('pt-br', {
                                                    currency: 'BRL',
                                                    style: 'currency',
                                                }).format(totalItemsPrice) })] }), _jsxs("div", { children: [_jsx("span", { children: "Entrega" }), _jsx("span", { children: new Intl.NumberFormat('pt-br', {
                                                    currency: 'BRL',
                                                    style: 'currency',
                                                }).format(shippingPrice) })] }), _jsxs("div", { children: [_jsx("span", { children: "Total" }), _jsx("span", { children: new Intl.NumberFormat('pt-br', {
                                                    currency: 'BRL',
                                                    style: 'currency',
                                                }).format(totalItemsPrice + shippingPrice) })] })] }), _jsx(CheckoutButton, { type: "submit", form: "order", children: "Confirmar pedido" })] })] })] }));
}
