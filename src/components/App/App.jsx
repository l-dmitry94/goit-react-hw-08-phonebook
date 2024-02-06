import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path="contacts" element={<ContactsPage />} />
            </Route>
        </Routes>
    );
};

export default App;
