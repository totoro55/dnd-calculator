import './EmptyCard.scss'
import {RiImageAddFill} from "react-icons/ri";

const EmptyCard = ({...props}) => {
    return (
        <div className={'empty-card'} {...props}>
            <div className={'empty-card_info'}>
                <div className={'empty-card_info_icon'}>
                    <RiImageAddFill />
                </div>
                <div className={'empty-card_info_title'}>
                    Перетащите сюда
                </div>
                <div className={'empty-card_info_text'}>
                    любой элемент <br/> из левой панели
                </div>
            </div>

        </div>
    );
};

export default EmptyCard;