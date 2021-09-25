const { useState } = require('react');

export default function useInputs(initialValue = {}) {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return [value, onChange];
}
