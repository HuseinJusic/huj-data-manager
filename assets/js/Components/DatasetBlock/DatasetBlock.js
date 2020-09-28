import React from 'react';
import './DatasetBlock.scss';

const DatasetBlock = (props) => {

    return(
        <div className={['DatasetBlock', props.mode].join(' ')}>
            <div className={'dataset-block-inner '}>
                <div className={'dataset-block-inner-front dataset-block-inner-box'}>
                    <label className={"dataset-name"}>{props.name}</label>
                </div>

                <div className={'dataset-block-inner-back dataset-block-inner-box'}>
                    <label className={"dataset-name"}>{props.name}</label>
                    <label>Erstellt: {props.created}</label>
                    <label>Datensätze: {props.total}</label>
                </div>
            </div>
        </div>
    );

}

export default DatasetBlock;