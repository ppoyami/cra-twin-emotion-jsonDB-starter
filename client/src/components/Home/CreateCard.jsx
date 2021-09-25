/* eslint-disable import/no-extraneous-dependencies */
import { DocumentAddIcon } from '@heroicons/react/outline';
import tw, { styled } from 'twin.macro';

export default function CreateCard() {
  return (
    <Container>
      <AddIcon>
        <DocumentAddIcon />
      </AddIcon>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`w-full h-full flex items-center justify-center border-2 border-current rounded-md cursor-pointer`,
]);
const AddIcon = styled.span(() => [
  tw`text-primary flex items-center justify-center w-3/5 h-3/5 p-2`,
]);
