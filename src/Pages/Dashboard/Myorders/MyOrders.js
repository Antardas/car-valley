import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Redirect } from 'react-router-dom';
import Delete from '@mui/icons-material/Delete';




const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user, admin } = useAuth();
    const [calling, setCalling] = useState(false);

    useEffect(() => {
        console.log("Load user all orders");
        const url = `http://localhost:5000/orders/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email, calling]);

    // Handle confirm  delete order
    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this order?')) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const newOrders = orders.filter(order => order.id !== id);
                    console.log(newOrders);
                    setOrders(newOrders);
                    setCalling(!calling);
                }).catch(err => console.log(err));

        }
    }
    // redirect to Manage orders page if user is admin
    if (admin) { return <Redirect to="/dashboard/manageOrder" /> }
 
    return (
        <div>
            <Typography color={blue[500]} sx={{ mb: 5 }} variant='h3'>My All Orders</Typography>
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
                                <TableCell align="right">{order.status}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDelete(order._id)}> <Delete /> </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;