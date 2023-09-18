import { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {

    const [userInput, setUserInput] = useState({
        inputName: '',
        inputAmount: '',
        inputDate: '',
    })
    const nameChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
             ...userInput,
             inputName: event.target.value
            }
         })
        
    }

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
           return {
            ...userInput,
            inputAmount: event.target.value
           }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
             ...userInput,
             inputDate: event.target.value
            }
         })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: userInput.inputName,
            amount: userInput.inputAmount,
            date: new Date(userInput.inputDate),
        };

        props.onSaveCostData(costData)

        setUserInput({
            inputName: '',
            inputAmount: '',
            inputDate: '',
        });
        
    };

    return (

        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type='text' onChange={nameChangeHandler} value={userInput.inputName}/>
                </div>

                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type='number' min={0.01} step={0.01} onChange={amountChangeHandler} value={userInput.inputAmount}/>
                </div>

                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type='date' onChange={dateChangeHandler} value={userInput.inputDate}/>
                </div>

                <div className='new-cost__actions'>
                    <button type='submit'>
                        Добавить расход
                    </button>

                    <button type='button' onClick={props.onCancel}>
                        Отмена
                    </button>

                </div>

            </div>
        </form>
        
    )

}

export default CostForm;