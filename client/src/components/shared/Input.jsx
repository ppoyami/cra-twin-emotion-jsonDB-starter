import tw, { styled } from 'twin.macro';

export default function Input() {
  return <StyledInput placeholder="제목" />;
}

const StyledInput = styled.input(() => [
  tw`bg-primary border-2 border-current w-full p-1 rounded-sm mb-2`,
]);
