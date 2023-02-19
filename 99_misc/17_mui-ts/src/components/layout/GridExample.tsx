import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const GridExample = () => {
  const [showItemStyle, setShowItemStyle] = useState(true);

  const itemStyle = {
    backgroundColor: '#f3f4f6',
    border: '1px solid #9ca3af',
  };

  const boxStyle = {
    backgroundColor: '#9ca3af',
    padding: '1rem',
  };

  // spacing
  // gapを使うと12カラムグリッドが崩れてしまうので、itemにpadding、containerにマイナスmarginをつけている。
  // spacing=1 で、
  //   item -> padding-left: 8px padding-top: 8px
  //   container -> margin-left: -8px margin-top: -8px
  // itemのpaddingでcontainerの上に余計なスペースができるのを防ぐためと思われる。

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8} sx={!showItemStyle ? itemStyle : {}}>
          <Box style={boxStyle}>xs=8</Box>
        </Grid>
        <Grid item xs={4} sx={!showItemStyle ? itemStyle : {}}>
          <div style={boxStyle}>xs=4</div>
        </Grid>
        <Grid item xs={4} sx={!showItemStyle ? itemStyle : {}}>
          <div style={boxStyle}>xs=4</div>
        </Grid>
        <Grid item xs={8} sx={!showItemStyle ? itemStyle : {}}>
          <div style={boxStyle}>xs=8</div>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '1rem' }}>
        <Button
          variant="outlined"
          onClick={() => setShowItemStyle(!showItemStyle)}
        >
          Show Padding & Margin
        </Button>
      </Box>
    </>
  );
};

export default GridExample;
