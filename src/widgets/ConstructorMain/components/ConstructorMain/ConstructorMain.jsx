import React, {useEffect, useState} from 'react';
import './ConstructorMain.scss'
import {components} from "../../constants/constants";
import GridColLayout from "../../../../shared/UI/GridColLayout/GridColLayout";
import FlexCenterLayout from "../../../../shared/UI/FlexCenterLayout/FlexCenterLayout";
import DnDContainer from "../DnDContainer/DnDContainer";
import {
    addDragParamsToItemsInArr,
    compareArraysAndRemoveDraggable
} from "../../helpers/dndHelpers";
import {useDispatch, useSelector} from "react-redux";
import {setComponentsAction} from "../../../../app/store/calculatorComponentsReducer";

const ConstructorMain = () => {
    const calculatorComponents = useSelector(state => state.calculatorComponents)
    const dispatch = useDispatch()
    const setCalculatorComponents = payload => dispatch(setComponentsAction(payload))

    const initPaletteDragParams = {movable: false, droppable: false, draggable: true,}
    const initPaletteComponents = addDragParamsToItemsInArr(components, initPaletteDragParams)

    const [palette, setPalette] = useState({
        name: 'palette', group: 'components', items: [], movable: false, droppable: false, draggable: true,
    })
    const [canvas, setCanvas] = useState({
        name: 'canvas', group: 'components', items: [], movable: true, droppable: true, draggable: true,
    })
    const [currentItem, setCurrentItem] = useState({})

    const setPaletteItems = items => setPalette({...palette, items: [...items]})
    const setCanvasItems = items => setCanvas({...canvas, items: [...items]})

    useEffect(()=>{
        setCanvasItems(calculatorComponents.components)
    },[])

    useEffect(()=>{
        if (canvas.items.length>0){
            setPaletteItems(compareArraysAndRemoveDraggable(palette.items, canvas.items))
        } else {
            setPaletteItems(initPaletteComponents)
        }
        setCalculatorComponents(canvas.items)
    },[canvas])

    const alwaysOnTop = 'display'


    return (
        <div className={'constructor-main_wrapper'}>
            <GridColLayout>
                <FlexCenterLayout>
                    <DnDContainer
                        group={palette}
                        setGroupItems={setPaletteItems}
                        currentItem={currentItem}
                        setCurrentItem={setCurrentItem}
                        specialCondition={alwaysOnTop}
                    />
                </FlexCenterLayout>
                <FlexCenterLayout>
                    <DnDContainer
                        group={canvas}
                        setGroupItems={setCanvasItems}
                        currentItem={currentItem}
                        setCurrentItem={setCurrentItem}
                        specialCondition={alwaysOnTop}
                    />
                </FlexCenterLayout>
            </GridColLayout>
        </div>
    );
};

export default ConstructorMain;