import React from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import useInputs from '@/hooks/useInputs';

const EditForm = React.forwardRef(({ onSubmit, initialValue }, ref) => {
  const [value, onChange] = useInputs(initialValue);
  return (
    <Form ref={ref} onSubmit={e => onSubmit(e, value)}>
      <Input name="title" {...{ value: value.title, onChange }} />
      <TextArea name="desc" {...{ value: value.desc, onChange }} />
    </Form>
  );
});

EditForm.defaultProps = {
  onSubmit: e => e.preventDefault(),
  initialValue: { title: '', desc: '' },
};

EditForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValue: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
};

const Form = styled.form(() => [tw`flex flex-col items-center`]);

export default EditForm;
