import { useAuth } from 'hooks';
// import { useDispatch } from 'react-redux';

const UserMenu = () => {
    // const dispatch = useDispatch();
    const { user:{email} } = useAuth();

    return (
        <div>
            <p>{email}</p>
            <button>Logout</button>
        </div>
    );
};

export default UserMenu;
