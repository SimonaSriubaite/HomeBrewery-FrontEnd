import React, { useState } from "react";
import { InputForm } from "../";

function FormTemplate({ fields, callback, options }) {
  const [fieldValues, setFieldValues] = useState({});

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callback(fieldValues);
        }}
      >
        {fields.slice(0, 2).map((field) => (
          <InputForm
            inputId={field.name}
            key={field.name}
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
        {fields.slice(2, 4).map((field) => (
          <InputForm
            inputId={field.name}
            key={field.name}
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
        <button>add</button>
      </form>
    </>
  );
}

export default FormTemplate;
