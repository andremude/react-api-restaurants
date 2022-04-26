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

const Restaurants = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [create, setCreate] =useState(false);
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    initData();
  }, [])

  const initData = async () => {
    const url = process.env.REACT_APP_API_URL;

    const requestOptions = {
      method: 'GET'
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

  const handleShow = (restaurant) => {
      console.log(restaurant);
  }

  const handleEdit = (item) => {
    setEdit(true);
    setCurrent(item);
    console.log(item);
  }

  const handleDelete = async (item) => {
    console.log(item);

    var url = process.env.REACT_APP_API_URL + '/' + item.id;

    var requestOptions = {
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth:650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tablestyle}>ID</TableCell>
              <TableCell style={tablestyle}>Name</TableCell>
              <TableCell style={tablestyle}>Address</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          {loading ? <>Loading...</> : <>

          <TableBody>
            {data.map((item, i) => (
            <TableRow>
              <TableCell style={tablestyle}> {item.id} </TableCell>
              <TableCell> {item.name}  </TableCell>
              <TableCell> {item.address} </TableCell>
              <TableCell onClick={() => handleShow(item)} className="see-more"> <Show/> </TableCell>
              <TableCell
                onClick={() => handleEdit(item)}>
                  <svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
              </TableCell>
              <TableCell
                onClick={() => handleDelete(item)}>
                  <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
        current={current} //Current es el restaurante que queremos editar en este momento.
        edit={edit} // Edit es el booleano que decide si se abre o no el modal.
        setEdit={setEdit} // Cierra el modal desde si mismo
        refresh={initData} // Actualiza el dato automaticamente una vez modificado
        />

      <button
        onClick={() => setCreate(true)} className="add-restaurant-btn">
        Add Restaurant
      </button>
    </div>
  );
}
export default Restaurants
