import React from 'react';
import './Switcher.scss'

const Switcher = ({items, value, onValueChange}) => {


    return (
        <div className={'switcher'}>
            <form className={'switcher-form'}>

                {items &&
                    items.map(item => {
                        return (
                            <div
                                key={item.label}
                                className={'switch-option'}>
                                <input type={'radio'}
                                       className={'switch-option_input'}
                                       id={item.label}
                                       value={item.value}
                                       checked={value === item.value}
                                       onChange={e => onValueChange(e.target.value)}
                                />
                                <label
                                    className={'switch-option_label'}
                                    htmlFor={item.label}>
                                    {item.component ? item.component : item.label}
                                </label>
                            </div>
                        )
                    })}

            </form>
        </div>
    );
};

export default Switcher;