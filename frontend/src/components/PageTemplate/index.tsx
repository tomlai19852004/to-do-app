import React from 'react';
import { Layout, Button, Typography, Flex } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

/**
 * Represents a Page Template component. It is used by boilerplate for pages. E.g. DutyList
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.children - Child React Node.
 * @returns {React.ReactElement} A page template element.
 */

type PageTemplateProps = {
    children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Layout>
            <Header
                style={{ position: 'relative' }}
                >
                {
                    window && 
                    window.location && 
                    window.location.pathname != '/' ?
                        <Button 
                            icon={<LeftOutlined />}
                            onClick={goBack}
                            style={{ position: 'absolute', marginTop: 20 }}>
                        </Button>
                        : ''
                }
                <Title level={2} style={{ textAlign: 'center' }}>To Do List App</Title>
            </Header>
            <Content>
                <Flex vertical gap="middle" style={{ padding: 20 }}>
                {children}
                </Flex>
            </Content>
        </Layout>
    )
}

export default PageTemplate;