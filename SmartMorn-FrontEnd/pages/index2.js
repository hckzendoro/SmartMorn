import React from 'react';
import lodash from 'lodash';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import Layout from '../components/Layout';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;


const Index = () => (
	<div>
    <Layout>
		<Link href="/about">
			<Button>
				<a>	About Page</a>
			</Button>
	   </Link>
		</Layout>
	</div>
)

export default Index;