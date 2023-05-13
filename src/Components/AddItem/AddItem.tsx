import { useState } from 'react';
import { AddItemButton } from "./AddItemButton";
import { NewItemForm } from '../NewItem/NewItemForm';

type AddNewItemProps = {
    onAdd(text: string) : void;
    toggleButtonText: string;
    dark?: boolean;
};

const AddNewItem = ({ onAdd, toggleButtonText, dark } : AddNewItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    if(showForm) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text);
                    setShowForm(false);
                }}
            />
        )
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}

export default AddNewItem;