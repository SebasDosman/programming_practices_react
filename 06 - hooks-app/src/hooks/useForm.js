import { useState } from "react";

export const useForm = ( initialFormState = {} ) => {
    const [formState, setFormState] = useState(initialFormState);

    const reset = () => {
        setFormState(initialFormState);
    };

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }; 
    
    return { 
        formState, 
        handleInputChange, 
        ...formState,
        reset
    };
};