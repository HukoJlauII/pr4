import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Modal} from "../components/Modal";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Modal">
                <Modal/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;