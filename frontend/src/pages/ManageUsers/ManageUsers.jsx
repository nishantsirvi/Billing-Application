import './ManageUsers.css';
const ManageUsers = () => {
    return (
        <div>
            <div className="user-container text-light">
            <div className="left-column">
                <CategoryForm />
            </div>
            <div className="right-column">
                <CategoryList />
            </div>
            </div>
        </div>
    );
}

export default ManageUsers;
