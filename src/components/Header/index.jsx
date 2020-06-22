import React from 'react';
import { Container } from 'reactstrap';
import Logo from '../Logo';
import MainNavigation from './MainNavigation';
import FilterInput from './FilterInput';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <Container fluid={true}>
                <Container className="container-nav">
                    <Logo width={80} height={60}/>
                    <FilterInput />
                    <MainNavigation />
                </Container>
            </Container>
        </header>
    );
}

export default Header;