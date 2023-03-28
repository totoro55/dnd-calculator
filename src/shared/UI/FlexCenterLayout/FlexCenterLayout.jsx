import './FlexCenterLayout.scss'
const FlexCenterLayout = ({children}) => {
    return (
        <div className={'flex-center_layout'}>
            {children}
        </div>
    );
};

export default FlexCenterLayout;