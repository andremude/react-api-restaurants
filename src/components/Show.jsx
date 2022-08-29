import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Show.css';

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
    <div className="info-container">
      {/* <Button onClick={handleOpen} id='info-btn'> More </Button> */}
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 192 512" onClick={handleOpen} id='info-btn'>
        <path d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"/>
      </svg>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography>
            {item.address}
          </Typography>
          <br/>
          <Typography id="modal-modal-description" class="text-justify" sx={{ mt: 2 }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis eros, sodales a massa pharetra, posuere viverra magna. In non metus egestas, porttitor ante ac, congue enim. Morbi rhoncus tempor leo, vitae facilisis risus gravida pulvinar. Morbi sed arcu convallis ex semper egestas."
          </Typography>
          <br />
          </Box>
      </Modal>
    </div>
  );
}
