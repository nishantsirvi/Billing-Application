import Itemform from '../../components/Itemform/itemform';
import Itemlist from '../../components/Itemlist/Itemlist';
import './ManageItems.css';

const ManageItems = () => {
    return (
        <div>
            <div className="items-container text-light">
                <div className="left-column">
                    <Itemform />
                </div>
                <div className="right-column">
                    <Itemlist />
                </div>
            </div>
        </div>
    )
}

export default ManageItems;
