import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../redux/auth/actions';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const { loginSuccess } = actions;
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.login = this.login.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }

    login = (values) => {
        debugger;
        console.log('this:', this);
        console.log('Success:', values);
        console.log('email:', values.email);
        console.log('password:', values.password);
        if (values.email === this.props.userLogin.username && values.password === this.props.userLogin.password) {
            this.props.loginSuccess();
            this.props.history.push('/')
        } else {
            NotificationManager.error('Wrong credentials.');
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleText = (e) => {
        const { value, id } = e.target;
        console.log('id:', id);
        console.log('value:', value);
        switch (id) {
            case 'email':
                this.setState({
                    email: value
                })
                break;
            case 'password':
                this.setState({
                    password: value
                })
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div>
                <h3>Sign In</h3>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={(values) => this.login(values)}
                    onFinishFailed={(values) => this.onFinishFailed(values)}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input id="email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password id="password" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
                <NotificationContainer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn, userLogin } = state.auth;
    return { isLoggedIn, userLogin }
}

export default connect(mapStateToProps, { loginSuccess })(SignIn)