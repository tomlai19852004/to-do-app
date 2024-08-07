import { useState } from 'react';
import { api } from 'commons/Api';
import { ActionResponse, DutyPayload } from 'commons/Types';

/**
 * Represents a custom hook to send update duty request. 
 */
export const useUpdateDuty = () => {
    const [ respMsg, setRespMsg ] = useState('');
    const [ error, setError ] = useState<any>(null);

    const updateDuty = async ( id: string, payload: DutyPayload ) => {
        try{
            const response: ActionResponse = await api.put(`/duty/${id}`, payload, { headers: { method: 'POST', "Content-Type": 'application/json' }})

            if( response.message ){
                setRespMsg( response.message as string );
            }

        } catch (error: any){
            if( error?.response?.status >= 500 ){
                setError(new Error("Internal Server Error."));
            } else {
                setError( error );
            }
        }
    }

    return { respMsg, error, updateDuty }
}