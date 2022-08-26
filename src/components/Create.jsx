import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Create({ create, setCreate, initData }) {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const url = process.env.REACT_APP_API_URL;

    const body = { name, address, description }

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
      body: JSON.stringify(body)
    }

    const response = await fetch(url, requestOptions);
    setCreate(false);
    initData();
    setLoading(false);
    return response
  }

  return (
    <div>
      {loading ? <>Saving data...</> : <>
      <Modal
        open={create}
        onClose={() => setCreate(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new restaurant
          </Typography>
          <br />
          <TextField
          style={{ marginTop: '25', width: '93%' }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          <br />
          <br />
          <TextField
            style={{ marginTop: '25', width: '93%' }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)} />
          <br />
          <br />
          <Button
            variant="outlined"
            style={{ marginTop: '22px', width: '93%'}}
            onClick={handleSubmit}
          >Add Restaurant</Button>
        </Box>
      </Modal>
    </>}
    </div>
  );
}
