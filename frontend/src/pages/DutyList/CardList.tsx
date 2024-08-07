import React from 'react';
import { Card, Space } from 'antd';
import { Duty } from 'commons/Types';
import CardControl from './CardControl';


/**
 * Represents a Card List component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.cardData - Array of card data.
 * @param {string} props.goToEditor - Function props to go to editor.
 * @param {string} props.deleteCard - Function props to delete a card.
 * @returns {React.ReactElement} A CardList element.
 */


interface CardListProps {
    cardData: Duty[] | never[];
    goToEditor: Function;
    deleteCard: Function;
}

const CardList: React.FC<CardListProps> = (props) => {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {
                props.cardData.map((item: Duty, ii: number ) => {
                    return (
                        <Card key={item.id} title={`Duty ${ii+1}`} size='small' extra={
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