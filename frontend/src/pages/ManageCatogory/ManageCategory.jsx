import Categoryform from '../../components/Categoryform/Categoryform';
import CategoryList from '../../components/CategoryList/CategoryList';
import'./ManageCategory.css';

const ManageCategory = () => {
    return (
        <div>
            <div className="category-container text-light">
            <div className="left-column">
                <Categoryform />
            </div>
            <div className="right-column">
                <CategoryList />
            </div>
            </div>
        </div>
    )
}

export default ManageCategory;
