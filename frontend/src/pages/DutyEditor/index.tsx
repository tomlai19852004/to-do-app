import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import PageTemplate from 'components/PageTemplate';
// import { api } from 'commons/Api';
import { useGetDuty } from 'hooks/useGetDuty';
import { useParams } from 'react-router-dom';
import { useCreateDuty } from 'hooks/useCreateDuty';
import { useUpdateDuty } from 'hooks/useUpdateDuty';
import { DutyPayload } from 'commons/Types';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;


/**
 * Represents a DutyEditor page component. 
 *
 * @component
 * @param {Object} props - The component props.
 * @returns {React.ReactElement} A DutyEditor page element.
 */


type FieldType = {
    duty?: string;
};

const DutyEditor: React.FC = () => {
    const navigate = useNavigate();
    const createDuty = useCreateDuty();
    const updateDuty = useUpdateDuty();
    const [form] = Form.useForm();
    const { id } = useParams();
    const resp = useGetDuty(id || '', form);
    const { data, error } = resp;
    // console.log( data );
    // console.log( error );

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        // console.log('Success:', values);
        if( values.duty?.trim() ){
            const payload: DutyPayload = { name: values.duty as string }
        
            if( id ){
                // Update existing duty
                await updateDuty.updateDuty( id, payload );
            } else {
                // Create new duty
                await createDuty.createDuty( payload );
            }
            
        } else {
            //Throw empty string error.
            // console.log( 'empty string.' )
        }
        
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if( createDuty.respMsg.trim() || updateDuty.respMsg.trim() ){
            navigate('/');
        }
    }, [createDuty.respMsg, updateDuty.respMsg]);

    return (
        <PageTemplate>
            <Title level={1}>Editor</Title>
            {
                createDuty.error ? <Alert message={createDuty.error.toString()} type='error' /> : 
                    updateDuty.error ?  <Alert message={updateDuty.error.toString()} type='error' /> : ''
            }
            <Form
                form={form}
                name='duty-editor'
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                style={{ maxWidth: '100%' }}
                initialValues={{ remember: true, layout: 'horizontal' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Duty"
                        name='duty'
                        rules={[{ required: true, message: 'Please input duty detail!' }]}
                        >
                            <TextArea rows={8} />
                        </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
            </Form>
        </PageTemplate>
    )
}

export default DutyEditor;