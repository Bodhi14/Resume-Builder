import styles from './Button.module.css';
import { useDispatch } from 'react-redux';
import { makeFalseFunc, makeTrueFunc } from '../../../actionTypes/cardAction';
export const Button = (props) => {
  const dispatch = useDispatch();
  let answer = "";
  const resumeHandler = () => {
    answer = window.confirm("If you want a single column resume, press OK else pressing Cancel will lead you to making a mult-column resume");

    if(answer) {
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
