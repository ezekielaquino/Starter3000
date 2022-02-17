import styled from '@emotion/styled';
import {NextPage} from 'next';

const Page: NextPage = () => {
  return <Wrap>Hello World</Wrap>;
};

const Wrap = styled.div`
  font-family: sans-serif;
  color: blue;
`;

export default Page;
