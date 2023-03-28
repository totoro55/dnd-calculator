import React from 'react';
import './DnDContainer.scss'
import DnDItem from "../DnDItem/DnDItem";
import EmptyCard from "../../../../features/EmptyCard/EmptyCard";

const DnDContainer = ({group, currentItem, setCurrentItem, setGroupItems, specialCondition}) => {

    const onCardEnterHandler = (e) => {
        if(currentItem.name===specialCondition){
            e.target.classList.add('drag-over-all')
            return
        }
        e.target.classList.add('drag-over')
    }
    const onCardLeaveHandler = (e) => {
        e.target.classList.remove('drag-over')
        e.target.classList.remove('drag-over-all')

    }
    const onCardDropHandler = (e) => {
        e.target.classList.remove('drag-over')
        e.target.classList.remove('drag-over-all')

        if(currentItem.name===specialCondition){
            setGroupItems([{...currentItem}, ...group.items])
            return
        }

        if(group.items.some(item=>item.name===currentItem.name)){
            setGroupItems([...group.items.filter(item=>item.name!==currentItem.name), currentItem])
            return
        }

        if (group.movable){
            setGroupItems([...group.items,
                {...currentItem, movable: true, droppable: true, draggable: true,}])
            return
        }
        setGroupItems([...group.items, currentItem])

    }
    const onCardOverHandler = (e) => {
        e.preventDefault()
    }


    return (
        <div className={'dnd-container'}
             onDragEnter={e=>onCardEnterHandler(e)}
             onDragLeave={e=>onCardLeaveHandler(e)}
             onDrop={e=>onCardDropHandler(e)}
             onDragOver={e=>onCardOverHandler(e)}
        >
            <div className={'dnd-container_content-wrapper'}
                 onDragEnter={e=>e.stopPropagation()}
                 onDragLeave={e=>e.stopPropagation()}
                 onDrop={e=>e.stopPropagation()}
                 onDragOver={e=>e.stopPropagation()}
            >
                {group.items && group.items.length>0
                    ?
                    group.items.map(item=>{
                        return(
                            <DnDItem
                                key={item.name}
                                currentItem={currentItem}
                                setCurrentItem={setCurrentItem}
                                setGroupItems={setGroupItems}
                                group={group}
                                item={item}
                                specialCondition={specialCondition}
                            />
                    )})
                    :
                    <EmptyCard
                        onDragEnter={e=>onCardEnterHandler(e)}
                        onDragLeave={e=>onCardLeaveHandler(e)}
                        onDrop={e=>onCardDropHandler(e)}
                        onDragOver={e=>onCardOverHandler(e)}
                    />
                }
            </div>
        </div>
    );
};

export default DnDContainer;