import styled from 'styled-components'

export const Main = styled.main`
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    >button {
        padding: 10px 20px;
        outline: none;
        border: 1px solid #84B8E2;
        border-radius: 30px;
        color: #84B8E2;
        background-color: transparent;
        align-self: flex-end;
        margin-bottom: 12px;
    }
    .filter_date {
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
        }
    > div {
        > div {
            box-shadow: 0px 3px 10px rgba(88, 88, 88, 0.1), 0px 16px 31px rgba(88, 88, 88, 0.1);
            border-radius: 20px;
            h3 {
                align-self: flex-start;
                font-weight: bold;
                
            }
        }
        canvas {
            margin-top: 22px;
        }
    }
`

export const Dash1 = styled.div`
    display: flex;
    justify-content: space-between;
    
    >div {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding:22px;
        width: calc(25% - 30px);
    }
    .investment {
        width: calc(35% - 50px);
       
    }
    .sales {
        width: calc(65% - 50px);
        svg {
            height: 56px;
        }
        > div {
            margin-left: 12px;
            font-weight: 300;
            h5 {
                span {
                    font-size: 22px;
                }
                font-size: 12px;
            }
            p {
                font-size: 10px;
            }
        }
    }
   
`
export const Dash2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    > div {
        padding: 22px;
        h3 {
            font-size: 18px;
        }
    }
    
    .marry, .entry {
        width: calc(50% - 40px);
    }
    /*.marry {
        width: calc(40% - 60px);
    }
    .entry {
        width: calc(30% - 60px);
    }
    .provider{
        width: calc(30% - 60px);
    }*/
`
export const Dash3 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    > div {
        padding: 22px;
        h3 {
            font-size: 18px;
        }
    }
    
    .tags, .provider, .services {
        width: calc(33.3% - 40px);
        display: flex;
        flex-direction: column;
        align-items: center;
        ul {
            width: 100%;
            list-style: decimal;
            margin-top: 20px;
            counter-reset: li;   
            li {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #E0E0E0;
                justify-content: space-between;
                >span {
                    margin-left: 20px;
                }
                &::before {
                    counter-increment: li;                   /* Increment the value of section counter by 1 */
                    content: counter(li) ". "; 
                    position: absolute;   
                }
                div {
                    align-self: flex-end;
                }
                .value {
                    color: #86D0CB;
                }
            }
        }
        >button {
            background: #68BFB7;
            margin-top: 16px;
            box-shadow: 0px 4px 12px rgba(134, 208, 203, 0.05), 0px 18px 31px rgba(134, 208, 203, 0.38);
            border-radius: 48px;
            color: #FFF;
            border: none;
            padding: 10px 20px;
        }
    }
   
    
`
export const Dash4 = styled.div``