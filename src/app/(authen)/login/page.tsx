'use client'
import styled from 'styled-components'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import Link from 'next/link'

export default function Login() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <Template>
      <div>
        <div className='flex items-baseline justify-between'>
          <div className='my-3 text-3xl'> Login </div>
          <Link href='/'>Go to home</Link>
        </div>

        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* <a className='login-form-forgot' href=''>
              Forgot password
            </a> */}
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Log in
            </Button>
            <div>
              Or <a href=''>register now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Template>
  )
}

const Template = styled.div`
  background-color: #ccc;
  max-width: 450px;
  padding: 40px;
  margin: auto;
  border-radius: 8px;
  .login-form-button {
    background-color: #1677ff;
    width: 100%;
  }
`
