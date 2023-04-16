import { useState } from 'react';

export const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return [formValues, handleOnChange];
};
