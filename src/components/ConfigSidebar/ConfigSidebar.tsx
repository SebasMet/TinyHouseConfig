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

interface Props {
  onImageChange: (newImage: string) => void;
}

const ConfigSidebar: React.FC<Props> = ({ onImageChange }) => {
  const [open, setOpen] = React.useState(
    ConfigCategories.map(() => false) // initialize an array of booleans
  );

  // Initialize an array where each index corresponds to the selected item for that category
  const [selectedOptions, setSelectedOptions] = React.useState(
    ConfigCategories.map(() => null)
  );

  const handleClick = (index: any) => {
    setOpen(open.map((val, i) => (i === index ? !val : val))); // update only the selected index
    console.log(index + " has been clicked")
  };

  const handleOptionClick = (index: any, subIndex: any, resultImage: string) => {
    setSelectedOptions(selectedOptions.map((val, i) => (i === index ? subIndex : val)));
    
    onImageChange(resultImage);
    

  };

  const tabStyle = {
    border: '1px solid black',
  };

  const selectedButtonStyle = {
    outline: "2px solid blue"
  };

  return (
    <>
      <div id="sidebar-container">
        <div id='component-nav'>
          <Tabs
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
              General
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
                      <ListItemButton
                        id='option-button'
                        key={subIndex}
                        sx={{ pl: 4 }}
                        style={(selectedOptions[index] === subIndex) ? selectedButtonStyle : {}}
                        onClick={() => handleOptionClick(index, subIndex, option.resultImage)}
                      >
                        {option.imageUrl
                          ? <img src={option.imageUrl} alt={option.text} />
                          : <p id='option-text'> {option.text}</p>}
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

