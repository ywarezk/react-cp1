/**
 * useForms(initialValues) => [handleChange , values]
 */

 import {useState} from 'react';

 export default function useForms(initialValues) {
    const [formState, setFormState] = useState(initialValues);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return [handleChange, formState];
 }