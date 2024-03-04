import * as React from 'react';
import { global, background } from '../styles/layout.module.css';
import Navbar from '../components/navbar.jsx';
import { Trans } from 'react-i18next';

const Layout = (props) => {

    const children = props.children;

    return (
        <div className={global}>
            <Navbar />
            <main className='main'>
                {children}
            </main>
            <div className={background} />
        </div>
    )
}

export default Layout;