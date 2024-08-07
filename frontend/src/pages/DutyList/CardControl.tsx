import React from 'react';
import { Button, Flex } from 'antd';

interface CardControlProps {
    goToEditor: Function;
    deleteCard: Function;
    id: string;
}

const CardControl: React.FC<CardControlProps> = (props) => {
    return (
        <Flex gap='small'>
            <Button onClick={() => props.goToEditor(props.id)}>Edit</Button>
            <Button onClick={() => props.deleteCard(props.id)}>Delete</Button>
        </Flex>
    )
}

export default CardControl;