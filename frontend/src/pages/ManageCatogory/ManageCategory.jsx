import Categoryform from '../../components/Categoryform/Categoryform';
import'./ManageCategory.css';

const ManageCategory = () => {
    return (
        <div>
            <div className="category-container text-light">
            <div className="left-column">
                <Categoryform />
            </div>
            <div className="right-column">
                list of categories
            </div>
            </div>
        </div>
    )
}

export default ManageCategory;
