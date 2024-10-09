// 密码账号登录组件
import './index.scss'
import logo from '@/assets/logo.png'
import { Card, Form, Input, Button, message } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'
// 账号：13800000002
// 密码：246810
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async val => {
    console.log(val)
    // 触发异步action fetchLogin
    await dispatch(fetchLogin(val))
    // 1.跳转到首页
    navigate('/')
    // 2.提示一下用户
    message.success('登录成功')
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
