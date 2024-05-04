import React, {Fragment} from 'react';
import VehicleRegistration from "@/components/VehicleRegistration";
const SelectCarModal = (props) => {
    return (
        <Fragment>
             <VehicleRegistration modalPosition={props.modalPosition} setModalState={props.setModalState}/>
        </Fragment>
    );
};

export default SelectCarModal;