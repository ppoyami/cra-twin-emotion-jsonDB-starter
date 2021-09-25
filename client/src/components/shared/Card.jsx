import tw, { styled } from 'twin.macro';

export default function Card() {
  return (
    <Container>
      <Title>첫번째 메모</Title>
      <Desc>
        무엇을 그림자는 우는 청춘 있을 피가 예수는 튼튼하며, 피어나는 황금시대
      </Desc>
      <ButtonContainer>
        <Button info>수정</Button>
        <Button warning>삭제</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`w-full h-full border-2 border-current rounded-md relative pb-8`,
]);

const ButtonContainer = styled.div(() => [
  tw`absolute bottom-0 w-full flex justify-between`,
]);

const Button = styled.button(({ info, warning }) => [
  tw`flex-1 p-2`,
  info && tw`text-green-500`,
  warning && tw`text-red-500`,
]);

const Title = styled.h1(() => [
  tw`font-light border-b-2 border-current text-center py-2`,
]);
const Desc = styled.p(() => [tw`text-sm font-bold p-2`]);
