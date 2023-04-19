import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar2 from './Navbar2';

export default function App2({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            
            <Navbar2/>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <main className='py-12'>{children}</main>
        </div>
    );
}
