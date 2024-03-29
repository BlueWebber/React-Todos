import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: ${({ theme }) => (theme.isMobile ? "none" : null)};
`;

const Footer = () => {
  return <StyledFooter>Made with ❤️ by BlueForced</StyledFooter>;
};

export default Footer;
