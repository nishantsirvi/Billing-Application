import Userform from '../../components/Userform/Userform';
import Userlist from '../../components/Userlist/Userlist';
import './ManageUsers.css';
const ManageUsers = () => {
    return (
        <div>
            <div className="users-container text-light">
                <div className="left-column">
                    <Userform />
                </div>
                <div className="right-column">
                    <Userlist />
                </div>
            </div>
        </div>
    )
}

export default ManageUsers;
