import React, { useState } from "react";
import { InputForm } from "../";
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
          {fields.slice(0, 2).map((field) => (
            <InputForm
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
            {fields.slice(2, 4).map((field) => (
              <InputForm
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

export default FormTemplate;
