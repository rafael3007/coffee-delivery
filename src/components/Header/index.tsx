import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

// import { useCart } from '../../hooks/useCart'
import { Aside, Container } from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
    // const { cart } = useCart()

    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Coffee Delivery" />
            </Link>

            <Aside>
                <div>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>

                <Link to={`cart`} aria-disabled={true}>
                    <ShoppingCart size={22} weight="fill" />
                    <span>2</span>
                </Link>
            </Aside>
        </Container>
    )
}