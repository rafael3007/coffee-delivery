import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Card } from "../../components/Card";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";
import ImageCoffee from "../../assets/coffee-delivery.svg";
export const coffees = [
    {
        id: "0",
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        tags: ["tradicional"],
        price: 9.9,
        image: "/images/coffees/expresso.svg",
    },
    {
        id: "1",
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        tags: ["tradicional"],
        price: 9.9,
        image: "/images/coffees/americano.svg",
    },
    {
        id: "2",
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        tags: ["tradicional"],
        price: 9.9,
        image: "/images/coffees/expresso-cremoso.svg",
    },
    {
        id: "3",
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        tags: ["tradicional", "gelado"],
        price: 9.9,
        image: "/images/coffees/cafe-gelado.svg",
    },
    {
        id: "4",
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        tags: ["tradicional", "com leite"],
        price: 9.9,
        image: "/images/coffees/cafe-com-leite.svg",
    },
    {
        id: "5",
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        tags: ["tradicional", "com leite"],
        price: 9.9,
        image: "/images/coffees/latte.svg",
    },
    {
        id: "6",
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        tags: ["tradicional", "com leite"],
        price: 9.9,
        image: "/images/coffees/capuccino.svg",
    },
    {
        id: "7",
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        tags: ["tradicional", "com leite"],
        price: 9.9,
        image: "/images/coffees/macchiato.svg",
    },
    {
        id: "8",
        title: "Mocaccino",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        tags: ["tradicional", "com leite"],
        price: 9.9,
        image: "/images/coffees/mocaccino.svg",
    },
    {
        id: "9",
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        tags: ["especial", "com leite"],
        price: 9.9,
        image: "/images/coffees/chocolate-quente.svg",
    },
    {
        id: "10",
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        tags: ["especial", "alcoólico", "gelado"],
        price: 9.9,
        image: "/images/coffees/cubano.svg",
    },
    {
        id: "11",
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        tags: ["especial"],
        price: 9.9,
        image: "/images/coffees/havaiano.svg",
    },
    {
        id: "12",
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        tags: ["especial"],
        price: 9.9,
        image: "/images/coffees/arabe.svg",
    },
    {
        id: "13",
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        tags: ["especial", "alcoólico"],
        price: 9.9,
        image: "/images/coffees/irlandes.svg",
    },
];
export function Home() {
    const theme = useTheme();
    return (_jsxs("div", { children: [_jsxs(Hero, { children: [_jsxs(HeroContent, { children: [_jsxs("div", { children: [_jsxs(Heading, { children: [_jsx("h1", { children: "Encontre o caf\u00E9 perfeito para qualquer hora do dia" }), _jsx("span", { children: "Com o Coffee Delivery voc\u00EA recebe seu caf\u00E9 onde estiver, a qualquer hora" })] }), _jsxs(Info, { children: [_jsxs("div", { children: [_jsx(ShoppingCart, { size: 32, weight: "fill", color: theme.colors.background, style: { backgroundColor: theme.colors["yellow-dark"] } }), _jsx("span", { children: "Compra simples e segura" })] }), _jsxs("div", { children: [_jsx(Package, { size: 32, weight: "fill", color: theme.colors.background, style: { backgroundColor: theme.colors["base-text"] } }), _jsx("span", { children: "Embalagem mant\u00E9m o caf\u00E9 intacto" })] }), _jsxs("div", { children: [_jsx(Timer, { size: 32, weight: "fill", color: theme.colors.background, style: { backgroundColor: theme.colors.yellow } }), _jsx("span", { children: "Entrega r\u00E1pida e rastreada" })] }), _jsxs("div", { children: [_jsx(Coffee, { size: 32, weight: "fill", color: theme.colors.background, style: { backgroundColor: theme.colors.purple } }), _jsx("span", { children: "O caf\u00E9 chega fresquinho at\u00E9 voc\u00EA" })] })] })] }), _jsx("img", { src: ImageCoffee, alt: "Caf\u00E9 do Coffee Delivery" })] }), _jsx("img", { src: "/images/hero-bg.svg", id: "hero-bg", alt: "" })] }), _jsxs(CoffeeList, { children: [_jsx("h2", { children: "Nossos caf\u00E9s" }), _jsx("div", { children: coffees.map((coffee) => (_jsx(Card, { coffee: coffee }, coffee.id))) })] })] }));
}
