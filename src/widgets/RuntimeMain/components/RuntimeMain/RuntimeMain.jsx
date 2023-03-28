import React from 'react';
import './RuntimeMain.scss'
import {useSelector} from "react-redux";
import GridColLayout from "../../../../shared/UI/GridColLayout/GridColLayout";
import EmptyCard from "../../../../features/EmptyCard/EmptyCard";
import Calculator from "../Calculator/Calculator";

const RuntimeMain = () => {
    const calculatorComponents = useSelector(state => state.calculatorComponents)

    const data = calculatorComponents.components.map(item=>item.name)

    return (
        <div className={'runtime-main_wrapper'}>
            <GridColLayout>
                <div className={'calculator-container'}>
                    {
                       data.length>0
                            ?
                            <Calculator data={data}/>
                            :
                            <EmptyCard />
                    }
                </div>
            </GridColLayout>
        </div>
    );
};

export default RuntimeMain;