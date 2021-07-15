import "../App.css";
import React, { useState } from "react";
function C(props) {
  const name = [
      {
          srcImg: 'images/red.jpg',
          id: 'red'
      },
      {
        srcImg: 'images/alu.jpg',
        id: 'alu'
    },
    {
        srcImg: 'images/white.jpg',
        id: 'white'
    },
  ];


  const [isChecked, setIsChecked] = useState(new Array(3).fill(false));
  const [ht, setDisplay] = useState('none');
  const handleOnChange = (e) => {
    const updateCheckbox = isChecked.map((item, index) =>
      index === e ? !item : item
      
    );
    
    setIsChecked(updateCheckbox);
  };

  return (
    <div className="C">
      
        {name.map((item, index) => {
          return (
            
                <div>
                  <input
                    type="checkbox"
                    id={item.id}
                    checked={isChecked[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  
                        <img src={item.srcImg}/>
                    
                </div>
             
          );
        })
      }
      </div>
      );
  
}


export default C;
