import React from 'react';
import './ConstructorPage.scss'
import ConstructorMain from "../../widgets/ConstructorMain/components/ConstructorMain/ConstructorMain";

const ConstructorPage = () => {
    return (
        <div className={'constructor-page'}>
            <ConstructorMain />
        </div>
    );
};

export default ConstructorPage;