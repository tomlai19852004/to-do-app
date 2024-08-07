import { useState } from 'react';
import { api } from 'commons/Api';
import { Duty } from 'commons/Types';


/**
 * Represents a custom hook to get list of duties from API. 
 */

export const useGetDuties = () => {
    const [ data, setData ] = useState<Duty[] | never[]>([]);
    const [ error, setError ] = useState<any>(null);


    const fetchDuties = async (offset: number, limit: number) => {
        try{
            const response: Array<Duty[] | never[]> = await api.get(`/duty?offset=${offset}&limit=${limit}`);
            setData( response as [] );
        } catch (error) {
            setError( error );
        }
    }

    // useEffect(() => {
    //     fetchDuties(0, 10);
    // }, []);

    return { data, error, fetchDuties }
}