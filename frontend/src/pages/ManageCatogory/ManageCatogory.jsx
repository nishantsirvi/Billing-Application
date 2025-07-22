import'./ManageCategory.css';
const ManageCategory = () => {
    return (
        <div>
            <div className="category-container text-light">
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

export default ManageCategory;
