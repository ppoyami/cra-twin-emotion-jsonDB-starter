import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';

export default function TextArea({ name, value, onChange }) {
  return <StyledTextArea placeholder="내용" {...{ name, value, onChange }} />;
}

TextArea.defaultProps = {
  onChange: () => null,
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const StyledTextArea = styled.textarea(() => [
  tw`bg-primary border-2 border-current w-full min-height[120px] p-1 rounded-sm resize-y`,
]);
