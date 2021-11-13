import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';


const ManageProducts = () => {
    const [update, setUpdate] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products);

    // Hangle Delete Product
    const handleDelete = (id) => {
        if (window.confirm('Are You sure Delete This Product?')) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const newProducts = products.filter(product => product?._id !== id);
                        setProducts(newProducts);
                        setUpdate(!update)
                }
            })
        }
        
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Product Modle</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow
                            key={product._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product?.title}
                            </TableCell>
                            <TableCell align="right">{product?.model}</TableCell>
                            <TableCell align="right">{product?.price}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => handleDelete(product?._id)}>
                                    <Delete/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default ManageProducts;