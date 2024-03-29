import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Create from './Create';
import Edit from './Edit';
import Show from './Show';
import '../styles/Restaurants.css'

const Restaurants = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [create, setCreate] =useState(false);
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    initData();
  }, [])

  const initData = async () => {
    const url = process.env.REACT_APP_API_URL;

    const requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    };

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const json = await response.json()
      setData(json);
      setLoading(false);
      setError(true);
    } else {
      alert(error.message)
      setLoading(false);
      setError(true);
    }
  }

  const handleShow = (item) => {
      console.log(item);
  }

  const handleEdit = (item) => {
    setEdit(true);
    setCurrent(item);
    console.log(item);
  }

  const handleDelete = async (item) => {
    console.log(item);

    let url = process.env.REACT_APP_API_URL + '/' + item.id;

    let requestOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
      redirect: "follow"
    }
    const response = await fetch(url, requestOptions);
    console.log(response);
    initData();
  }

  const tablestyle = {
    textAlign: "center",
    fontWeight: "bold"
  }

  return (
    <div className='restaurants-container'>
      <input
        placeholder="Search for a restaurant's name or address"
        onChange={event => setQuery(event.target.value)}
        className="search-bar"
        />
      <TableContainer component={Paper} >
        <Table sx={{ minWidth:380 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell style={tablestyle}>Name</TableCell>
              <TableCell style={tablestyle}>Address</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>

          {loading ? <>Loading...</> : <>

          <TableBody>
            {data
            .filter(item => {
              if (query === '') {
                return item;
              } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                return item;
              } else if (item.address.toLowerCase().includes(query.toLowerCase())) {
                return item;
              }
            })
            .map((item =>
            <TableRow>
              <TableCell> <b>{item.name}</b> </TableCell>
              <TableCell> {item.address} </TableCell>
              <TableCell onClick={() => handleShow(item)}> <Show item={item}/> </TableCell>
              <TableCell
                onClick={() => handleEdit(item)} className="text-center">
                  <svg height="18px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
              </TableCell>
              <TableCell
                onClick={() => handleDelete(item)}>
                  <svg height="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
          </>}
        </Table>
      </TableContainer>
      <Create
        create={create}
        setCreate={setCreate}
        initData={initData}
        />
      <Edit
        current={current}
        edit={edit}
        setEdit={setEdit}
        refresh={initData}
        />

      <button
        onClick={() => setCreate(true)} className="add-restaurant-btn">
        Add Restaurant
      </button>
    </div>
  );
}
export default Restaurants
