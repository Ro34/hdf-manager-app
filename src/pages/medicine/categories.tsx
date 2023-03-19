import React, {useState} from "react";
import {
    Card, Button, Form, Input, Table, Space, Modal, message
} from "antd";
import {PlusOutlined,SearchOutlined} from "@ant-design/icons"
// import MyLayout from "../../components/MyLayout";
import MyUpload from "../../components/MyUpload";
function MedicineCategories() {
    const [isShow,setIsShow] = useState(false)
    const [myForm] = Form.useForm()
    return (
        <>
        <Card   title={'药品分类'} extra={<Button type={'primary'} icon={<PlusOutlined/>} onClick={()=>setIsShow(true)}/>}>
            <Space direction={'vertical'} style={{width:'100%'}}>
                <Form layout={'inline'} onFinish={(v)=>{
                    message.success("Search OK")
                    console.log(v)
                }
                }>
                    <Form.Item label={'名字'} name={"name"}>
                        <Input placeholder = {' input name'}/>
                    </Form.Item>

                    <Form.Item label={'名字'} name={"search"}>
                        <Button htmlType={"submit"} type={"default"} icon={<SearchOutlined/>}/>
                    </Form.Item>
                </Form>
                <Table columns={[
                    {title:'序号',width :80,align:"center"},
                    {title:'名字',},
                    {title:'封面',width :120},
                    {title:'简介',width :80},
                    {title:'操作',width :110}
                ]}>

                </Table>



            </Space>
        </Card>
        <Modal
            title={"编辑"}
            open={isShow}
            onCancel={()=>setIsShow(false)}
            maskClosable={false}
            onOk={()=>{myForm.submit()}}
            destroyOnClose={true}
        >

            <Form onFinish={(v)=>{
                message.success("Done")
                console.log(v)
            }}
                  labelCol={{span :3}}
                  form={myForm}
                  preserve={false}
            >
                <Form.Item label={'名字'} name={'name'} rules={
                    [{required:true,message : ' Name!'}]
                }>
                    <Input placeholder={"name"}></Input>
                </Form.Item>
                <Form.Item label={"主图"}>
                    <MyUpload/>
                </Form.Item>

                <Form.Item label={'简介'} name={'desc'}>
                    <Input.TextArea placeholder={"name"}></Input.TextArea>
                </Form.Item>
            </Form>

        </Modal>
        </>
    )
}

export default MedicineCategories