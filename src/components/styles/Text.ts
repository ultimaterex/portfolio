import styled from 'vue-styled-components'

export const Linked = styled.a`
&::after {
  width: 0%;
  content: "";
  height: 2px;
  background: var(--link-color);
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

&:hover::after {
  width: 100%;
}
`

export const MainTitle = styled.h1`
  font-size: 2rem;
  margin-top: 0px;
  margin-bottom: 8px;
`

const paragraphProps = { size: String}
export const Paragraph = styled('p', paragraphProps)`
  font-size: ${(props) => props.size === 's' ? "0.8888rem" : "1rem"};
  margin: 0 0 0.5em 0;
  line-height: 1.5;
  font-weight: 300;
`

export const Subtitle = styled(Paragraph)`
  font-weight: 400;
`

export const ButtonText = styled.span`
  margin-right: 0.5em;
`