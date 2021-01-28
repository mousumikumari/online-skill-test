import React from 'react';

const Choices=(props)=>{
    return(
        <div className="radio">
        {props.options.map((choice) => (
          <div key={choice}>
            <label className="radio-inline" htmlFor="{choice}">
              <input
                type="checkbox"
                value={choice}
                key={choice}
                checked={
                  props.answer.length > 0
                    ? props.answer.includes(choice)
                    : false
                }
                onChange={() => props.onChange(choice)}
              />
              {choice}
            </label>
            <br />
          </div>
        ))}
      </div>
    );};

    export default Choices;