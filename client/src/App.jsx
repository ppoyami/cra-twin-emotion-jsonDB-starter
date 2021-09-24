import { Switch, Route } from 'react-router-dom';
import tw from 'twin.macro';
import Home from '@/pages/Home';

const styles = {
  layout: tw`flex justify-center items-center`,
};

export default function App() {
  return (
    <div css={styles.layout}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
