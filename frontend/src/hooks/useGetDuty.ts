import { useState, useEffect } from 'react';
import { api } from 'commons/Api';
import { Duty } from 'commons/Types';
import { FormInstance } from 'antd';

export const useGetDuty = (id: string, formInstance: FormInstance) => {
    const [ data, setData ] = useState<Duty>({ id: '', name:'', deleted: false, created_at: 0, modified_at: 0 });
    const [ error, setError ] = useState<any>(null);

    const fetchDuty = async () => {
        try{
            if( id ){
                const response: Duty = await api.get(`/duty/${id}`);
                setData( response as Duty ); 
                formInstance.setFieldsValue({ duty: response.name });
            }
        } catch (error) {
            setError( error );
        }
    }

    useEffect(() => {
        fetchDuty();
    }, []);

    return { data, error }
}