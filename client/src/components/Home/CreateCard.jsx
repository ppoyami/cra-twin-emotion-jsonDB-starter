/* eslint-disable import/no-extraneous-dependencies */
import { DocumentAddIcon } from '@heroicons/react/outline';
import { useRef, useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import EditForm from '../shared/EditForm';

export default function CreateCard() {
  const [edit, setEdit] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector('body');
    const onClose = () => setEdit(false);
    body.addEventListener('click', onClose);
    return () => {
      body.removeEventListener('click', onClose);
    };
  }, []);

  const onToggle = e => {
    e.stopPropagation();
    if (formRef.current?.contains(e.target)) return;
    setEdit(prev => !prev);
  };

  return (
    <Container onClick={onToggle}>
      {edit ? (
        <div ref={formRef}>
          <EditForm />
        </div>
      ) : (
        <AddIcon>
          <DocumentAddIcon />
        </AddIcon>
      )}
    </Container>
  );
}

const Container = styled.div(() => [
  tw`w-full h-full flex items-center justify-center border-2 border-current rounded-md cursor-pointer p-2`,
]);
const AddIcon = styled.span(() => [
  tw`text-primary flex items-center justify-center w-3/5 h-3/5 p-2`,
]);
