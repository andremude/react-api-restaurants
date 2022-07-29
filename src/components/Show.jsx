import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Show.css'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum pharetra eros. Duis blandit diam in nisi dapibus, vel interdum ante bibendum. Quisque ligula leo, vestibulum a dolor eget, scelerisque imperdiet sem. Mauris eu ornare arcu. Sed ante felis, faucibus a vestibulum non, volutpat sed lorem. Vivamus scelerisque, ipsum a ullamcorper iaculis, orci turpis vulputate est, a mollis elit purus in metus. Proin a facilisis urna. Nam malesuada odio in sem ultrices, lobortis volutpat sem posuere. Phasellus sit amet tellus non ligula ultrices rhoncus et a mi.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
