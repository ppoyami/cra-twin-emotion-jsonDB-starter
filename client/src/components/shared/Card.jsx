import tw, { styled } from 'twin.macro';

export default function Card() {
  return (
    <Container>
      <Title>첫번째 메모</Title>
      <Desc>
        무엇을 그림자는 우는 청춘 있을 피가 예수는 튼튼하며, 피어나는 황금시대
      </Desc>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`w-full h-full border-2 border-current rounded-md`,
]);
const Title = styled.h1(() => [
  tw`font-light border-b-2 border-current text-center py-2`,
]);
const Desc = styled.p(() => [tw`text-sm font-bold p-2`]);
