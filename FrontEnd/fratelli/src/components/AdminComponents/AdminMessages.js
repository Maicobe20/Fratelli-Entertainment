import axios from 'axios'
import React from 'react'
import Table from 'react-bootstrap/Table'

function AdminMessages() {
    const [messages, setMessages] = React.useState([])

    React.useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))  
        axios.get('http://localhost:3002/messages', {
            headers:{"Authorization":`Bearer ${token}`}
            })
            .then(res => {
                setMessages(res.data)
            })
    }, [messages])

    return (
        <div className='row'>
            <div className='mt-5 ml-5 row' >
                <div className='col-5'></div>
                <div className='col-4' style={{ position: "relative", alignSelf: 'center' }}>
                    <img width="30%" src='https://static.wixstatic.com/media/a03b2a_0d36255e42ae49d4892d9b1f5791a072~mv2_d_3810_5334_s_4_2.png/v1/crop/x_1549,y_1812,w_822,h_888/fill/w_520,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a03b2a_0d36255e42ae49d4892d9b1f5791a072~mv2_d_3810_5334_s_4_2.png' />
                </div>
                <div className='col-3'></div>
                {/* <h2 style={{color:'orange', fontWeight:"bold", fontFamily:''}}>Fratelli Entainment</h2> */}
            </div>
            <h1 >Messages From Customers</h1>
            <div className='col-1'></div>
            <div className='col-10' style={{ display: 'block', position: 'relative', height: '500px', overflow: 'auto' }}>
                <Table striped bordered hover size="sm" bgcolor='silver'>
                    <thead>
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Messages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{message.fullName}</th>
                                    <td>{message.email}</td>
                                    <td>{message.subject}</td>
                                    <td>{message.message}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </div>
            <div className='col-1'></div>
        </div>
    )
}

export default AdminMessages