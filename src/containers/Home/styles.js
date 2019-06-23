import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        flex-direction: column;

        .listItemContainer {
            height: 80px;
            width: 100%;
            margin-top: 10px;
            align-items: center;
            display: flex;
            cursor:pointer;
        }

        .listContainer {
            height: 250px;
            width: 20%;
            overflow: auto;
            list-style-type: none;
        }

        input {
            height: 45px;
            width: 95%;
            padding: 5px;
            font-size: 18px;
        }
`
export default HomeContainer
