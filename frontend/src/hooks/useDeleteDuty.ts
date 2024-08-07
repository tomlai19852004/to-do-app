import { useState } from 'react';
import { api } from 'commons/Api';
import { ActionResponse } from 'commons/Types';


/**
 * Represents a custom hook to send delete duty request. 
 */
export const useDeleteDuty = () => {
    const [ respMsg, setRespMsg ] = useState('');
    const [ error, setError ] = useState<any>(null);

    const deleteDuty = async ( id: string ) => {
        try{
            const response: ActionResponse = await api.delete(`/duty/${id}`);
            
            if( response.message ){
                setRespMsg( response.message as string);
            }
        } catch (error){
            setError( error );
        }
    }

    return { respMsg, error, deleteDuty }
}