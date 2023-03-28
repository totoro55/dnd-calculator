import './GridColLayout.scss'

const GridColLayout = ({children}) => {
    return (
        <div className={'grid-col_layout'}>
            {children}
        </div>
    );
};

export default GridColLayout;