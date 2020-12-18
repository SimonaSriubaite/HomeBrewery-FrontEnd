import React, { useState } from "react";
import { InputForm, Button } from "../";

import * as S from "./FormTemplate.style";

function FormTemplate({ fields, callback, buttonName, formTitle, options }) {
  const [fieldValues, setFieldValues] = useState({});

  return (
    <>
      <S.FormDiv>
        <S.FormTitle>{formTitle}</S.FormTitle>
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
          <S.FlexBox>
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
          </S.FlexBox>
          <S.ButtonBox>
            <Button color="primary" type="submit">
              {buttonName}
            </Button>
          </S.ButtonBox>
        </form>
      </S.FormDiv>
    </>
  );
}

export default FormTemplate;
