import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 5px;
    padding: 10px;
    background-color: rgba(0,0,0,.02);
    box-shadow: 2px 2px rgba(0,0,0, .40);
`;

export const Type = styled.View`
    flex-direction: row;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.type === 'receita' ? '#00b94a' : '#c62c36'};
    padding: 3px 8px;
    border-radius: 8px;
`;

export const TypeText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-style: italic;
    padding-left: 3px;
`;

export const AmountText = styled.Text`
    padding-top: 5px;
    font-weight: bold;
    color: #131313;
    font-size: 20px;
`;