import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Show.css';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Show({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="see-more-container">
      <Button onClick={handleOpen} id='info-btn'> See more </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.description}
            {item.address}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Review
            </Typography>
          <br />
          <TextField
          style={{ marginTop: '25', width: '93%' }}
          id="outlined-basic"
          label="Name"
          variant="outlined"/>
          <br />
          <br />
          <TextField
            style={{ marginTop: '25', width: '93%' }}
            id="outlined-basic"
            label="Address"
            variant="outlined"/>
            <br />
            <br />
            <Button
            variant="outlined"
            style={{ marginTop: '22px', width: '93%'}}
          >Add Review</Button>
          </Box>
      </Modal>
    </div>
  );
}
