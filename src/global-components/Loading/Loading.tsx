import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    return (
      <div style={{display: 'flex', height: '100%', width: '100%'}}>
      <div style={{width: '100px', height: '100px', alignSelf: 'center', margin: '0 auto'}}>
        <CircularProgress color="inherit" />
      </div>
      </div>
    );
  }

  export default Loading;