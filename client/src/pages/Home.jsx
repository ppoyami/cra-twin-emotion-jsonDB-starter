import tw, { styled } from 'twin.macro';
import Grid from '@/components/Home/Grid';

export default function Home() {
  return (
    <Layout>
      <Grid />
    </Layout>
  );
}
const Layout = styled.div(() => [tw`pt-20 px-8`]);
