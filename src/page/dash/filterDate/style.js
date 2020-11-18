import styled from "styled-components";
export const Filter = styled.div`

    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 22px;
    justify-content: space-between;
    button {
        display: flex;
        width: 75px;
        align-items: center;
        outline: none;
        background-color: transparent;
        font-size: 10px;
        border: none;
        svg {
            height: 26px;
            margin-right: 10px;
        }
    }
    &>div {
        &+button {
            display: flex;
            justify-content: flex-end;
            svg {
                margin-right: 0;
                margin-left: 10px;
            }
        }
    }
`