/* eslint-disable import/no-extraneous-dependencies */
import { DocumentAddIcon } from '@heroicons/react/outline';
/* eslint-disable-next-line no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import tw, { styled } from 'twin.macro';
import { createPost } from '@/store/_actions/posts';
import EditForm from '../shared/EditForm';

export default function CreateCard() {
  const [edit, setEdit] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

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

  const onSubmit = (e, value) => {
    e.preventDefault();
    dispatch(createPost(value));
  };

  const onCreate = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { cancelable: false, bubbles: true }),
    );
  };

  return (
    <Container onClick={onToggle}>
      {edit ? (
        <Wrapper>
          <EditForm ref={formRef} onSubmit={onSubmit} />
          <Button onClick={onCreate}>제출</Button>
        </Wrapper>
      ) : (
        <AddIcon>
          <DocumentAddIcon />
        </AddIcon>
      )}
    </Container>
  );
}

const Container = styled.div(() => [
  tw`w-full h-full flex items-center justify-center border-2 border-current rounded-md cursor-pointer p-2 relative`,
]);
const Wrapper = styled.div(() => [tw`flex flex-col items-center `]);
const AddIcon = styled.span(() => [
  tw`text-primary flex items-center justify-center w-3/5 h-3/5 p-2`,
]);
const Button = styled.button(() => [tw`w-full text-secondary  mt-3`]);
