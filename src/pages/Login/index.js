// 密码账号登录组件
import './index.scss'
import logo from '@/assets/logo.png'
import { Card, Form, Input, Button } from 'antd'
const Login = () => {
  const onFinish = val => {
    console.log(val)
  }
  return (
    <div className='login'>
      <Card
        className='loginCard'
        style={{
          width: 400
        }}
      >
        <Form validateTrigger='onBlur' onFinish={onFinish}>
          <div className='logoImg'>
            <img src={logo} alt='logo' />
          </div>
          <Form.Item
            name='mobile'
            rules={[
              { required: true, message: '请输入手机号' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对'
              }
            ]}
          >
            <Input size='large' placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[{ required: true, message: '请输入验证码' }]}
          >
            <Input size='large' placeholder='请输入验证码' maxLength={6} />
          </Form.Item>
          <Form.Item>
            <Button block type='primary' htmlType='submit' className='loginBtn'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
