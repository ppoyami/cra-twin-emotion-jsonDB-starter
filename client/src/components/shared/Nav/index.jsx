import tw, { styled } from 'twin.macro';
import ToggleButton from './ToggleTheme';

export default function Navbar() {
  return (
    <Container>
      <Logo>memo</Logo>
      <ToggleButton />
    </Container>
  );
}

const Container = styled.div(() => [
  tw`fixed top-0 w-screen h-16 bg-primary border-b-2 border-current flex items-center px-6`,
]);
const Logo = styled.h1(() => [
  tw`uppercase text-3xl font-bold tracking-wide mr-auto`,
]);
