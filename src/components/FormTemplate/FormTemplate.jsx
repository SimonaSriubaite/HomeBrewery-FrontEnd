import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputField } from "../";

import "./FormTemplate.scss";

function FormTemplate({ fields, callback, options }) {
  const [fieldValues, setFieldValues] = useState({});

  return (
    <div className="form">
      <div className="form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callback(fieldValues);
          }}
        >
          {fields.slice(0, 3).map((field) => (
            <InputField
              key={field.name}
              inputId={field.name}
              className={field.className}
              name={field.name}
              type={field.type}
              label={field.labelText}
              required={field.required}
              minLength={field.minLength}
              maxLength={field.maxLength}
              placeholder={field.placeholder}
              options={options}
              handleChange={(e) =>
                setFieldValues({ ...fieldValues, [field.name]: e.target.value })
              }
            />
          ))}
          <div className="form__container">
            {fields.slice(3, 5).map((field) => (
              <InputField
                key={field.name}
                inputId={field.name}
                name={field.name}
                type={field.type}
                label={field.labelText}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                options={options}
                handleChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    [field.name]: e.target.value,
                  })
                }
              />
            ))}
          </div>
          <button className="form__button">add</button>
        </form>
      </div>
    </div>
  );
}

FormTemplate.propTypes = {
  fields: PropTypes.array,
  options: PropTypes.array,
  callback: PropTypes.func,
};

export default FormTemplate;
