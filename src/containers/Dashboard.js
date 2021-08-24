import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../redux/auth/actions';
import { Table, Button } from 'antd';

const { logout } = actions;
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone number',
        dataIndex: 'phoneNo',
        key: 'phoneNo',
    },
];
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ paddingTop: '10px' }}>
                <Button onClick={() => this.props.logout()} style={{ right: '0px', position: 'fixed', marginRight: '10px' }} >Logout</Button>
                <h3>User list</h3>
                <Table dataSource={this.props.user} columns={columns} style={{ paddingTop: '30px' }} />;
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.table
    return { user }
}

export default connect(mapStateToProps, { logout })(Dashboard)