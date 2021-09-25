// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import EditForm from './EditForm';

export default function Card({ title, desc }) {
  const [edit, setEdit] = useState(false);
  const formRef = useRef(null);
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
  };
  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <Container>
      {edit ? (
        <>
          <Wrapper>
            <EditForm ref={formRef} onSubmit={onSubmit} />
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
  title: '',
  desc: '',
};

Card.propTypes = {
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
