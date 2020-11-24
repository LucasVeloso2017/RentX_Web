import React, { useCallback, useEffect, useState, useRef } from 'react';

import {FiAlertCircle} from 'react-icons/fi'

import {useField} from '@unform/core'

import { Container,Error } from './styles';

function Input({name,icon:Icon,...rest}) {
    const inputRef = useRef(null);

    const { fieldName, defaultValue, registerField, error } = useField(name);
    const[focused,setIsFocused]=useState(false)
    const[filed,setIsFiled]=useState(false)

    const handleInputFocus = useCallback(()=>{
        setIsFocused(true)
    },[])
    
    const handleInputBlur = useCallback(()=>{    
        setIsFocused(false)
    
        inputRef.current?.value ?
        setIsFiled(true) :
        setIsFiled(false)
    },[])


    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [fieldName, registerField]);
  
    return(
        <Container isErrored={!!error} isFiled={filed} isFocused={focused}>
            {Icon && <Icon size={20}/>}
            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef} 
                defaultValue={defaultValue} 
                {...rest} 
            />
            {
                error && (
                <Error title={error}>
                <FiAlertCircle color="red" size={20}/>
                </Error>)
            }
        </Container>
    );
}

export default Input;