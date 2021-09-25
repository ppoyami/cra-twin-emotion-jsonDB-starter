import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tw, { styled } from 'twin.macro';

import { loadPosts } from '@/store/_actions/posts';
import Grid from '@/components/Home/Grid';

export default function Home() {
  const { mainPosts, createPostLoading, updatePostLoading, deletePostLoading } =
    useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  if (createPostLoading || updatePostLoading || deletePostLoading)
    return <span>로딩 중...</span>;

  return (
    <Layout>
      <Grid data={mainPosts} />
    </Layout>
  );
}
const Layout = styled.div(() => [tw`pt-20 px-8`]);
