import React from 'react';
import './DnDItem.scss'

const DnDItem = ({item, setCurrentItem, group, setGroupItems, currentItem, specialCondition}) => {

    const dndClassName = ()=>{
        if (!group.movable) {
            return item.draggable ? 'dnd-item drag-on' : 'dnd-item drag-off'
        } else {
            return item.movable ? 'dnd-item drag-movable' : 'dnd-item drag-disabled'
        }
    }

    const onDragStartHandler = (item) => {
        if (item.name===specialCondition){
            setCurrentItem({...item, movable: false, droppable: false, draggable: false,})
        } else {
            setCurrentItem({...item, movable: true, droppable: true, draggable: true,})
        }
    }

    const onDragEndHandler = (e) => {
        e.preventDefault()
    }

    const onDragEnterHandler = (e, target) => {
        e.target.classList.add('drag-over')
        const currentItemIndex = group.items.findIndex(item=>item.name===currentItem.name)
        const targetIndex = group.items.indexOf(target)

        if (currentItem.name===specialCondition){
            e.target.classList.add('below-all')
            return
        }
        if (currentItemIndex < 0) {
            e.target.classList.add('below')
            return
        }
        if (currentItemIndex > targetIndex) {
            e.target.classList.add('below')
            return
        }
        if (currentItemIndex < targetIndex) {
            e.target.classList.add('above')
            return
        }
        if (currentItemIndex === targetIndex) {
            e.target.classList.add('below')
        }

    }

    const onDragLeaveHandler = (e) => {
        e.target.classList.remove('drag-over')
        e.target.classList.remove('below')
        e.target.classList.remove('below-all')
        e.target.classList.remove('above')
    }

    const onDragOverHandler = (e) => {
        e.preventDefault()
    }

    const onDropHandler = (e, target) => {
        e.target.classList.remove('drag-over')
        e.target.classList.remove('below')
        e.target.classList.remove('above')
        e.target.classList.remove('below-all')

        const currentTarget = group.items.indexOf(target)
        const rearrangeList = [...group.items]

        if (currentItem.name===specialCondition){
            setGroupItems([currentItem, ...rearrangeList])
            return
        }

        if (!rearrangeList.some(item=>item.name===currentItem.name)) {
            rearrangeList.splice(currentTarget, 0, currentItem)
            setGroupItems(rearrangeList)
            return
        }

        if (rearrangeList.some(item=>item.name===currentItem.name)){
            const rearrangeListWithoutCurrentItem = rearrangeList.filter(item => item.name !== currentItem.name)
            rearrangeListWithoutCurrentItem.splice(currentTarget, 0, currentItem)
            setGroupItems(rearrangeListWithoutCurrentItem)
        }
    }


    const dblClickHandleRemove = (target)=>{
        const filteredEditor = group.items.filter(item => item.name !== target.name)
        setGroupItems(filteredEditor)
    }

    return (
        <div className={dndClassName()}
             draggable={item.draggable}
             onDragStart={()=>onDragStartHandler(item)}
             onDragEnd={e=>onDragEndHandler(e)}

             onDragEnter={item.droppable
                 ? e=>onDragEnterHandler(e, item)
                 : undefined}

             onDragLeave={item.droppable
                 ? e=>onDragLeaveHandler(e)
                 : undefined}

             onDragOver={item.droppable
                 ? e=>onDragOverHandler(e)
                 : undefined}

             onDrop={item.droppable
                 ? e=>onDropHandler(e, item)
                 : undefined}

             onDoubleClick={item.droppable
                ?()=>dblClickHandleRemove(item)
                : undefined}
        >
            {item.element}
        </div>
    );
};

export default DnDItem;