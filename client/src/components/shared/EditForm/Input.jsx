import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

export default function Input({ name, value, onChange }) {
  return <StyledInput placeholder="제목" {...{ name, value, onChange }} />;
}

Input.defaultProps = {
  onChange: () => null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const StyledInput = styled.input(() => [
  tw`bg-primary border-2 border-current w-full p-1 rounded-sm mb-2`,
]);
