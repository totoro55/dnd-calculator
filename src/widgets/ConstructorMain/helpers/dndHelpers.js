const addDragParamsToItem = (item, params) =>{
    return {...item, ...params}
}

export const addDragParamsToItemsInArr = (items, params) => {
    return items.map(item=>addDragParamsToItem(item, params))
}

export const addDragParamsDependsOnGroup = group => {
    const dragParams = {draggable: group.draggable, movable: group.movable, droppable: group.droppable}
    return addDragParamsToItemsInArr(group.items, dragParams)
}

export const compareArraysAndRemoveDraggable = (a, b)=>{
    return a.map(aItem=> {
        if(b.some(bItem=> bItem.name === aItem.name)){
            return {...aItem, draggable: false}
        } else {
            return {...aItem, draggable: true}
        }
    })
}