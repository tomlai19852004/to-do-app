import React from 'react';
import { Layout, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

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
            <Header>
                {
                    window && 
                    window.location && 
                    window.location.pathname != '/' ?
                        <Button 
                        icon={<LeftOutlined />}
                        onClick={goBack}>
                        </Button>
                        : ''
                }
                
            </Header>
            <Content>{children}</Content>
        </Layout>
    )
}

export default PageTemplate;