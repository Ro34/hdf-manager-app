import React from "react";
import {Row, Col, Card, Form, Input, Button, message} from "antd"
import {useNavigate} from "react-router-dom";
import {defaultImg} from "../utils/tools";

function Login() {
    const navigate = useNavigate()
    return (
        <Row>
            <Col md={{
                span: 8,
                push:8
            }}
                 xs={{
                     span:22,
                     push:1
                 }}

            >
                <img src={defaultImg} alt="defaultImg"
                     style={{display:'block',margin:'20px auto',borderRadius:"16px",width:"200px"}}/>

                <Card title = "HDF-manager">
                    <Form labelCol={{
                        md:{
                            span :4
                        }
                    }} onFinish={(v)=>{
                        console.log(v)
                        message.success('登录成功')
                        navigate('/admin/dashboard')
                    }}>
                        <Form.Item label="用户名" name={'userName'} rules={[{
                            required:true,
                            message:'userName'
                        }]}>
                            <Input placeholder={'Username'}/>
                        </Form.Item>
                        <Form.Item label="密码" name={"password"} rules={[{
                            required:true,
                            message:'password'
                        }]}>
                            <Input.Password placeholder={'Password'}/>
                        </Form.Item>
                        <Form.Item >
                            <Button htmlType={"submit"} type={"primary"} style={{
                                display:'block',
                                margin:'8px auto',

                                width:'20vw'
                            }}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Login