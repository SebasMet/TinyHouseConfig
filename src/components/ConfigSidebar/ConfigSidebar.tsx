import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ConfigCategories } from '../ConfigOptions/ConfigCategories'
import './ConfigSidebar.css'
import { Tabs, Tab, Tooltip } from '@mui/material';

function ConfigSidebar() {
  const [open, setOpen] = React.useState(
    ConfigCategories.map(() => false) // initialize an array of booleans
  );

  const handleClick = (index: any) => {
    setOpen(open.map((val, i) => (i === index ? !val : val))); // update only the selected index
  };

  const tabStyle = {
    border: '1px solid black',



  };



  return (
    <>

      <div id="sidebar-container">
        <div id='component-nav'>
          <Tabs
            // variant='fullWidth'
            aria-label="basic tabs example"
            style={{
              color: 'white',
              backgroundColor: '#e8e8e8',
              marginTop: '10px',

            }}>
            <Tab label="General" style={tabStyle} />
            <Tab label="Bathroom" style={tabStyle} />
            <Tab label="Kitchen" style={tabStyle} />
            <Tab label="Extra's" style={tabStyle} />
          </Tabs>
        </div>

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        >
          {ConfigCategories.map((categorie, index) => (
            <>
              <ListItemButton key={index} onClick={() => handleClick(index)}>
                <ListItemText primary={categorie.text} />
                {open[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List id='option-container' component="div" disablePadding>
                  {categorie.options.map((option, subIndex) => (
                    <Tooltip title={option.text} placement="right" arrow>
                      <ListItemButton id='option-button' key={subIndex} sx={{ pl: 4 }}>
                        {/* <ListItemText primary={option.text} /> */}
                        <img src={option.imageUrl} alt="test" />
                      </ListItemButton>
                    </Tooltip>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </div>
    </>
  )
}

export default ConfigSidebar
