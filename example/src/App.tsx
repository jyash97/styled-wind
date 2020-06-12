import React from 'react';
import styled from 'styled-tw';

const Container = styled.div`
                  .bg-red-600;
                  .p-10;
                  .hover:bg-green-900;
                  .rounded-lg;
                  .md:bg-purple-900;
                  .bg-cyan;
                  .mt-96;
                  `;
const Banner = styled(Container)`
  margin-top: ${(props: any) => props.margin};
  //  .text-yellow-900;
`;
const Input = styled.div.withConfig({}).attrs(() => ({
  type: 'password'
}))`.text-red-900;`;

const App = () => {
  return (
    <>
      <Banner margin='200px'>hello</Banner>
      <Input>helo</Input>
    </>
  );
};

export default App;
