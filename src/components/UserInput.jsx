import React from 'react'

const UserInput = ({ values, onChange }) => {
    function inputChangeHandler(event) {
        const {name, value } = event.target;
        onChange(name, value);
    }
  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" name="initialInvestment" value={values.initialInvestment} onChange={inputChangeHandler} required />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" name="annualInvestment" value={values.annualInvestment} onChange={inputChangeHandler} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" name="expectedReturn" value={values.expectedReturn} onChange={inputChangeHandler} required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" name="duration" value={values.duration} onChange={inputChangeHandler} required />
            </p>
        </div>
    </section>
  )
}

export default UserInput