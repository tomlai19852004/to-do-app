import React, { useEffect } from 'react';
import { FloatButton, Typography } from 'antd';
import PageTemplate from 'components/PageTemplate';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useGetDuties } from 'hooks/useGetDuties';
import { useDeleteDuty } from 'hooks/useDeleteDuty';
import CardList from './CardList';
import { Alert } from 'antd';

const { Title } = Typography;

const DutyList: React.FC = () => {
    const duties = useGetDuties();
    const { error, deleteDuty } = useDeleteDuty();
    const navigate = useNavigate();
    

    // console.log( duties.error );
    
    const goToEditor = ( id?: string ) => {
        navigate(`/Editor/${id ? id : ''}`);
    }

    const deleteCard = async ( id: string ) => {
        const resp = await deleteDuty( id );
        // console.log( resp );
        if( !error ){
            duties.fetchDuties(0, 10);
        }
    }

    useEffect(() => {
        duties.fetchDuties(0, 10);
    }, []);

    return (
        <PageTemplate>
            <Title level={1}>Duty List</Title>
            { duties.error ? <Alert message={'Unable to fetch duties'} type="error" /> : '' }
            <CardList {...{
                goToEditor, deleteCard,
                cardData: duties.data
            }} />
            <FloatButton 
                icon={<PlusOutlined />}
                onClick={() => goToEditor()}>
            </FloatButton>
        </PageTemplate>
    )
}

export default DutyList;