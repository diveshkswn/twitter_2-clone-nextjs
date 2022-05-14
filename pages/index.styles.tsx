import styled, { css } from 'styled-components';

export const StyledP = styled('p')<{textColor ?: string}>(({ textColor = 'black' }) => css`
color: ${textColor};
`);
