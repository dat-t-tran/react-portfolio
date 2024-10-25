import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { LayoutProps } from './Layout.types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="px-4 lg:px-[3.75rem] lg:mx-auto">
            <Header />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;