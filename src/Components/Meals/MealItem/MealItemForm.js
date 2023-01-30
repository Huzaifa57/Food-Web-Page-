import { useRef , useState } from "react";

import Input from "../../UI/Input";

import classes from './MealItemForm.module.css'


const MealItemForm = props => {

  const [amountIsValid , setAmountIsValid] = useState(true)

  const amountInputref = useRef();

  const submitHandler = event => {

    event.preventDefault();

    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5

    ) {

      setAmountIsValid(false);


      return;
    }
    props.onAddtoCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} action="" onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'

        }} />


      <button>+ Add</button>
      {!amountIsValid && <p>PLease Enter a Valid Amount (1-5).</p> }
    </form>


  )


}


export default MealItemForm;