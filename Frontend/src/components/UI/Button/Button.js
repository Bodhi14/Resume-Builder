import styles from './Button.module.css';
import { useDispatch } from 'react-redux';
import { makeFalseFunc, makeTrueFunc } from '../../../actionTypes/cardAction';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export const Button = (props) => {
  const dispatch = useDispatch();
  let answer = "";
  const resumeHandler = () => {
    answer = window.prompt("If you want a single column resume, type 'y' or 'yes',  else type 'n' or 'no', which will lead you to making a mult-column resume");
    
    if(answer=='y' || answer =='yes' || answer=='Yes' || answer == 'YES' || answer == 'Y') {
      dispatch(makeTrueFunc());
    }
    else {
      dispatch(makeFalseFunc());
    }
  }
  return (
    <>
    {props.ask ? (
      <button className={`${styles.btn}`} onClick={resumeHandler}>
        {props.content}
       </button>
    ) :
    (
      <button className={`${styles.btn}`}>
        {props.content}
      </button>
    )}
    </>
  )
}
