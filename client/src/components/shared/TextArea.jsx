import tw, { styled } from 'twin.macro';

export default function TextArea() {
  return <StyledTextArea placeholder="내용" />;
}

const StyledTextArea = styled.textarea(() => [
  tw`bg-primary border-2 border-current w-full min-height[120px] p-1 rounded-sm resize-y`,
]);
