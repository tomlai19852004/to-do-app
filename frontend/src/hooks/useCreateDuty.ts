import { useState } from 'react';
import { api } from 'commons/Api';
import { ActionResponse, DutyPayload } from 'commons/Types';

export const useCreateDuty = () => {
    const [ respMsg, setRespMsg ] = useState('');
    const [ error, setError ] = useState<any>(null);

    const createDuty = async ( payload: DutyPayload ) => {
        try{
            const response: ActionResponse = await api.post(`/duty`, payload, { headers: { method: 'POST', "Content-Type": 'application/json' }})
            console.log( response );
            if( response.message ){
                setRespMsg( response.message as string );
            }
        } catch (error: any){
            if( error?.response?.status >= 500 ){
                setError(new Error("Internal Server Error."));
            } else {
                setError(error);
            }
        }
        
    }

    return { respMsg, error, createDuty }
}