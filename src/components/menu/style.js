import {isStyledComponent} from "styled-components";
import styled from "styled-components"

export const Container = styled.header`
    display:flex;
    justify-content:space-between; 
    padding: 20px 25px;
`

export const Button = styled.button`
    background: transparent;
    border-radius: 60px;
    border:1px solid #86D0CB;
    color: #86D0CB;
    padding: 10px 11px;
    font-size: 18px;
    display: flex;
    align-items: center;
    svg {
        height: 22px;
        margin-right: 10px;
    }
`

export const Options = styled.nav`
    display: flex;
    align-items: center;
`
export const ProfileContainer = styled.div`
    display: flex;
    margin-left: 20px;
    padding: 14px;
    box-shadow: 0px 3px 10px rgba(88, 88, 88, 0.1), 0px 16px 31px rgba(88, 88, 88, 0.04);
    border-radius: 107px;
    color: #E2645A;
    display: flex;
    align-items: center;
    >img {
        border-radius: 50%;
        height: 44px;
    }
    >svg {
        height: 12px;
        margin-left: 8px;
    }
`

