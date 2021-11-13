import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { blue, grey, red } from '@mui/material/colors';
import { Button, MenuItem, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user, admin } = useAuth();
    const [calling, setCalling] = useState(false);

    console.log(orders);
    useEffect(() => {
        console.log('load all orders')
        const url = `http://localhost:5000/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email, calling]);

    // Handle Staus Change
    const handleStatusChange = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
        const data = {
            status: "shipped"
        };
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                const newOrders = orders.map(order => {
                    if (order._id === id) {

                        order.status = data.status;
                    }
                    return order;
                });
                setCalling(!calling);
                setOrders(newOrders);
            }).catch(err => console.log(err));
    };

    // Handle Delete Order

    const handleDelete = (id) => { // confirm delete
        if (window.confirm('Are you sure you want to delete this order?')) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
                
            }).then(res => res.json())
                .then(data => {
                    const newOrders = orders.filter(order => order._id !== id); // filter out the deleted order
                    setCalling(!calling);
                    setOrders(newOrders);
                }).catch(err => console.log(err));
        }
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Customer Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Adress</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.productName}
                                </TableCell>
                                <TableCell align="right">{order.price}</TableCell>
                                <TableCell align="right">{order.name}</TableCell>
                                <TableCell align="right">{order.email}</TableCell>
                                <TableCell align="right">{`${order.house}, ${order.city}`}</TableCell>
                                <TableCell align="right">
                                    {
                                        order?.status === 'pending' ? (<Button onClick={() => handleStatusChange(order._id)}>{order.status}</Button>) : (<Button disabled>{order.status}</Button>)
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDelete(order._id)}><DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;