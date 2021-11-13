import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from './../../../Hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();
    const [ordersList, setOrdersList] = useState([]);

    useEffect(()=>{
        const url =`https://rocky-mountain-96539.herokuapp.com/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then (data => setOrdersList(data));
    }, [user.email])
    return (
        <div>
            <h2>Orders List: {ordersList.length} </h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table list">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Delete Order</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersList.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Orders;