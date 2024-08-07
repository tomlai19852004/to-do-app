import React from 'react';
import { Button, Flex } from 'antd';


/**
 * Represents a Card Control component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.id - Duty item id.
 * @param {string} props.goToEditor - Function props to go to editor.
 * @param {string} props.deleteCard - Function props to delete a card.
 * @returns {React.ReactElement} A CardControl element.
 */


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