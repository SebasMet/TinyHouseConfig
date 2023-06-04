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

function ConfigSidebar() {
  const [open, setOpen] = React.useState(
    ConfigCategories.map(() => false) // initialize an array of booleans
  );

  const handleClick = (index : any) => {
    setOpen(open.map((val, i) => (i === index ? !val : val))); // update only the selected index
  };

  return (
    <>
      <div id="sidebar-container">
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
                <List component="div" disablePadding>
                  {categorie.options.map((option, subIndex) => (
                    <ListItemButton key={subIndex} sx={{ pl: 4 }}>
                      <ListItemText primary={option.text} />
                    </ListItemButton>
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
