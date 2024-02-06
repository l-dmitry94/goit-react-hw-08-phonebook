import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    const {isLoggedIn} = useAuth()

    return (
        <>
            <header>
                <div className="container">
                    <Navigation />

                    {isLoggedIn ? <UserMenu/> : <AuthNav />}
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default SharedLayout;
