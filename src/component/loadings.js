import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const loadings = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
     
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default loadings