import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import Card from '../shared/Card';
import CreateCard from './CreateCard';

export default function Grid({ data }) {
  return (
    <Container>
      <CreateCard />
      {data.map(item => (
        <Card key={item.id} id={item.id} title={item.title} desc={item.desc} />
      ))}
    </Container>
  );
}

Grid.defaultProps = {
  data: [],
};

Grid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    }),
  ),
};

const Container = styled.div(() => [
  tw`grid grid-cols-2 grid-flow-row auto-rows-max gap-3`,
  tw`sm:grid-cols-3 md:grid-cols-4`,
]);
