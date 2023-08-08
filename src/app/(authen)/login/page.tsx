'use client'
import styled from 'styled-components'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import Link from 'next/link'

import { APILogin } from '@/API/auth'

export default function Login() {
  const onFinish = (values: any) => {
    APILogin(values).then((response) => {
      console.log('response', response)
    })
    console.log('Received values of form: auth ', values)
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
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='email'
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
