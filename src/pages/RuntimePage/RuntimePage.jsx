import React from 'react';
import './RuntimePage.scss'
import RuntimeMain from "../../widgets/RuntimeMain/components/RuntimeMain/RuntimeMain";

const RuntimePage = () => {
    return (
        <div className={'runtime-page'}>
            <RuntimeMain />
        </div>
    );
};

export default RuntimePage;