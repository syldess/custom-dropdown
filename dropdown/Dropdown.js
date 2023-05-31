import React, { useState } from 'react';
import Select from '../select/Select';
import './DropdownStyles.css';

function Dropdown(props) {
  const [selected, setSelected] = useState(props.placeholder);
  const [showSelect, setShowSelect] = useState(false);

  const styles = {
    btn: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      display: 'inline-block',
      backgroundColor: 'lightgrey',
      width: '100%',
      maxWidth: '200px',
      border: 'solid 2px darkgrey',
      borderRadius: '5px',
      textAlign: 'center',
      padding: '5px',
    },
    dropdownIcon: {
      display: 'inline-block',
      float: 'right',
      marginTop: '4px',
      marginLeft: '10px',
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid darkgrey',
    },
    dropdownList: {
      backgroundColor: 'lightgrey',
      border: 'solid 2px darkgrey',
      borderRadius: '5px',
      width: '100%',
      maxWidth: '200px',
      maxHeight: '200px',
      overflow: 'scroll',
      textAlign: 'center',
    },
    ul: {
      listStyle: 'none',
      margin: '0',
      padding: '5px',
    },
    li: {
      '&hover': {
        backgroundColor: 'darkgrey',
        cursor: 'pointer',
      },
    },
  };

  const toggleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleSelect = (choice) => {
    setSelected(choice);
    setShowSelect(!showSelect);
    if (props.handleChoice) {
      props.handleChoice(choice);
    }
  };

  const { choices,
          customBtnStyle = '',
          customIconStyle = '',
          customUlStyle = '',
          customLiStyle = '',
          customdropdownListStyle = '',
  } = props;

  const renderCustomStyle = (customStyle, currentStyle) => {
    return {
      ...currentStyle,
      ...customStyle
    };
  };

  return (
    <>
      <div
        className="btn disable-select"
        style={
          customBtnStyle !== ''
            ? renderCustomStyle(customBtnStyle, styles.btn)
            : styles.btn
        }
        onClick={toggleShowSelect}
      >
        {selected}
        <span
          className="dropdown-icon"
          style={
            customIconStyle !== ''
              ? renderCustomStyle(customIconStyle, styles.dropdownIcon)
              : styles.dropdownIcon
          }
        />
      </div>
      {showSelect ? (
        <Select
          choices={choices}
          handleSelect={handleSelect}
          ulStyle={
            customUlStyle !== ''
              ? renderCustomStyle(customUlStyle, styles.ul)
              : styles.ul
          }
          liStyle={
            customLiStyle !== ''
              ? renderCustomStyle(customLiStyle, styles.li)
              : styles.li
          }
          dropdownListStyle={
            customdropdownListStyle !== ''
              ? renderCustomStyle(
                  customdropdownListStyle,
                  styles.dropdownList
                )
              : styles.dropdownList
          }
        />
      ) : null}
    </>
  );
}

export default Dropdown;
