import styled from "styled-components";
import { v } from "./variable";

export const STable = styled.table`
width: 100%;
border-collapse: collapse;
text-align: center;
border: ${v.borderRadius};
overflow: hidden;
margin: 0 auto;
margin-top: 150px;
min-width: 400px;
max-width: 1100px;
border-radius: 10px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

@media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    border: 1px solid #ddd;
    white-space: nowrap;
    }




`;

export const STHead = styled.thead`
position: sticky;
z-index:   100;





`;
export const STHeadTR = styled.tr`
 background: ${({theme}) => theme.bg};
 

`;

export const STHeadTH = styled.th`

    
`;
export const STBody = styled.tbody`




`;

export const STBodyTR = styled.tr`
background: ${({theme}) => theme.bg};
color: ${({theme}) => theme.white};
border-bottom: 1px solid #dddddd;

:nth-of-type(even){
    background-color: #222b45 ;
}
&:active{
    font-weight: bold;
    

}

`;



export const STD = styled.td`
padding: ${v.smspacing};
border: 1px solid ${({theme}) => theme.bg2};
font-size: 14px;

@media screen and (max-width: 768px){
    :nth-of-type(8),  STD{
        display: none;
    }
    :nth-of-type(9),  STD{
        display: none;
    }
        :nth-of-type(4),  STD{
        display: none; 
    }
        :nth-of-type(6),  STD{
        display: none;
    }
        :nth-of-type(7),  STD{
        display: none;
    }

}

`;



export const STH = styled.th`
font-weight: normal;
padding: ${v.smspacing};
color: ${({theme}) => theme.white};
text-transform: capitalize;
font-weight: 400;
font-size: 14px;

:not(:last-of-type){
    border-right: 1px solid ${({theme}) => theme.bg2};

}
:first-of-type{
    width: 1%;
    white-space: nowrap;
}
@media screen and (max-width: 768px){
    :nth-of-type(8),  STH{
        display: none;
    }
    :nth-of-type(9),  STH{
        display: none;
    }
        :nth-of-type(4),  STH{
        display: none;
    }
        :nth-of-type(6),  STH{
        display: none;
    }
        :nth-of-type(7),  STH{
        display: none;
    }
}


`;