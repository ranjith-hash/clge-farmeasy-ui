import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {apiService} from "../../apiService";
import {useNavigate} from "react-router-dom";




function LoginComp() {

    const navigate = useNavigate();
    const [loginErr, setLoginErr] = useState("")
    const onFinish = async (values) => {

        const resp = await apiService.post('/Account/signin' ,{
            email: values.email,
            password: values.password
        })

        if(resp.data.sucess){
            localStorage.setItem("email", resp.data.apiData.email)
            localStorage.setItem("firstName", resp.data.apiData.firstName)
            localStorage.setItem("lastName", resp.data.apiData.lastName)
            localStorage.setItem("isSeller", resp.data.apiData.isSeller)
            localStorage.setItem("userId", resp.data.apiData.userId)
            navigate("/")
        }
        else {
            setLoginErr(resp.data.message)
        }

        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div className="bg-gradient-to-r from-red-300 to-indigo-600">
            <div className="flex  justify-center items-center h-screen">
                <div className=" border rounded-xl shadow-xl p-4 items-center" style={{backgroundColor: "white"}}>
                    <div className="text-2xl font-mono ml-4 mt-10 p-2 text-gray-500 text-center mb-4">
                        <p className="border rounded-xl p-2 shadow-md shadow-amber-500"> Farm Easy</p>
                    </div>
                    <p>{loginErr}</p>
                    <Form
                        layout="vertical"
                        className="h-96 p-8 space-y-9"
                        // name="basic"

                        style={{
                            width: 400
                        }}

                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input size="large"/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password size="large"/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            // wrapperCol={{
                            //     offset: 8,
                            //     span: 16,
                            // }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button  type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default LoginComp;