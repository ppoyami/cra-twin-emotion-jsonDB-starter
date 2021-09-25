// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import tw, { styled } from 'twin.macro';
import { updatePost, deletePost } from '@/store/_actions/posts';
import EditForm from './EditForm';

export default function Card({ id, title, desc }) {
  const [edit, setEdit] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const closeEdit = () => {
    setEdit(false);
  };
  const openEdit = () => {
    setEdit(true);
  };

  // M: submit 이벤트 버블링 설정하지 않으면, 컴포넌트에서 onSubmit 이벤트가 발생하지 않음
  const onUpdate = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { cancelable: false, bubbles: true }),
    );
  };
  const onDelete = () => {
    setEdit(false);
    dispatch(deletePost(id));
  };

  const onSubmit = (e, value) => {
    e.preventDefault();
    dispatch(updatePost({ id, ...value }));
  };

  return (
    <Container>
      {edit ? (
        <>
          <Wrapper>
            <EditForm
              ref={formRef}
              initialValue={{ title, desc }}
              onSubmit={onSubmit}
            />
          </Wrapper>
        </>
      ) : (
        <>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </>
      )}
      <ButtonContainer css={tw`mt-3`}>
        <Button onClick={edit ? onUpdate : openEdit} info>
          {edit ? '완료' : '수정'}
        </Button>
        <Button warning onClick={edit ? closeEdit : onDelete}>
          {edit ? '취소' : '삭제'}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

Card.defaultProps = {
  id: null,
  title: '',
  desc: '',
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string]),
  title: PropTypes.string,
  desc: PropTypes.string,
};

const Container = styled.div(() => [
  tw`w-full h-full border-2 border-current rounded-md relative pb-8`,
]);

const Wrapper = styled.div(() => [
  tw`w-full h-full flex items-center justify-center relative p-2`,
]);

const ButtonContainer = styled.div(() => [
  tw`absolute bottom-0 w-full flex justify-between`,
]);

const Button = styled.button(({ info, warning }) => [
  tw`flex-1 p-2 font-bold`,
  info && tw`text-green-500`,
  warning && tw`text-red-500`,
]);

const Title = styled.h1(() => [
  tw`font-light border-b-2 border-current text-center py-2`,
]);
const Desc = styled.p(() => [tw`text-sm font-bold p-2`]);
