import styled, {css} from 'styled-components';
import { colors, typography } from '../../themes';

export const CalendarStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListCases = styled.div`
    padding: 1.6875rem 0;
    width: 100%;
    display: grid;
    row-gap: 1.5625rem;
    justify-items: center;
`;