import React from 'react'
import { DownArrow } from './Icons/DownArrow'

const options = ["Mangoes", "Apples", "Oranges"];
export function MarketsDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const onOptionClicked = (value : any) => () => {    
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <div onClick={toggleDropdown} className="dd-header">
        <div className="dd-header-title">{selectedOption}</div>
        <DownArrow width="24px" rotation={!isOpen ? 0 : 180}/>
      </div>
      {isOpen && (
      <div>
        <ul className="dd-list">
          { options.map(option => (
            <li onClick={onOptionClicked(option)} key={Math.random()} className="dd-list-item">
              {option}
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  )
}
