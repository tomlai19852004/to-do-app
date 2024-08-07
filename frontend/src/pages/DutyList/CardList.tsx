import React from 'react';
import { Card, Space } from 'antd';
import { Duty } from 'commons/Types';
import CardControl from './CardControl';


interface CardListProps {
    cardData: Duty[] | never[];
    goToEditor: Function;
    deleteCard: Function;
}

const CardList: React.FC<CardListProps> = (props) => {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {
                props.cardData.map((item: Duty ) => {
                    return (
                        <Card key={item.id} title='Card' size='small' extra={
                            <CardControl {...{ 
                                goToEditor: props.goToEditor, 
                                deleteCard: props.deleteCard, 
                                id: item.id }} />
                            }>
                            {item.name}
                        </Card>
                    )
                })
            }
        </Space>
    )
}

export default CardList;