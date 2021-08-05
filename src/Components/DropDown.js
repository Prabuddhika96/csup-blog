import React from 'react';
import { useState } from 'react';
// import DehazeIcon from '@material-ui/icons/Dehaze';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import { Link} from 'react-router-dom';

const DropDown = ({title}) => {
  const [visible, setVisible] = useState(false);
//   const history = useHistory();
  
  const handleClick=()=>{
    setVisible(!visible)
  }

  return (
    <div className='mobi-nav'>      
      <div className='mobi-nav-btn'>
        <button onClick={handleClick}>
            <DehazeOutlinedIcon/>
        </button>
      </div>
      
      <div>
        {visible && 
            <ul>
                <li><Link to='/' onClick={()=>setVisible(!visible)}>Home</Link></li>
                <li><Link to='/create' onClick={()=>setVisible(!visible)}>Add Blog</Link></li>
            </ul>
        }
      </div>
    </div>
  );
};
export default DropDown;
