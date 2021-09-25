import tw, { styled } from 'twin.macro';
import Card from '../shared/Card';
import CreateCard from './CreateCard';

export default function Grid() {
  return (
    <Container>
      <CreateCard />
      <Card />
    </Container>
  );
}

const Container = styled.div(() => [
  tw`grid grid-cols-2 grid-flow-row auto-rows-max gap-3`,
  tw`sm:grid-cols-3 md:grid-cols-4`,
]);
