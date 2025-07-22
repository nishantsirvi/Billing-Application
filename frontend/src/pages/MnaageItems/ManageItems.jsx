import './ManageItems.css';

const ManageItems = () => {
    return (
        <div>
            <div className="items-container text-light">
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

export default ManageItems;
