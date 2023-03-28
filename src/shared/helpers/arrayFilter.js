export const removeItem = (list, item) => {
    if (list.length>0){
        return list.filter(listItem => listItem.name !== item.name)
    } else {
        return list
    }
}

export const compareArraysAndRemoveDraggable = (arr, compArr) => {
    return arr.map(item1 => {
        if (compArr.some(item2 => item2.name === item1.name)) {
            return {...item1, draggable: false}
        } else {
            return {...item1, draggable: true}
        }
    })
}