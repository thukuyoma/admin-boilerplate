import { useRouter } from 'next/router'
import React from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import styled from 'styled-components'
import ActivityLogs from './ActivityLogs'

const Styles = styled.div`
  .overlay__wrapper {
    position: absolute;
    background-color: #f3f8fe;
    width: 362px;
    height: 100vh;
    top: 60px;
    right: 0;
  }
  .tab__header {
    text-align: center;
    margin: 20px 10px;
    margin-bottom: 30px;
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 20px;
    height: 100px;
    width: 100px;
  }
  .tab__image {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  .tab__title {
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    :hover {
      color: #0098db;
    }
  }
  .tab__icon {
    margin-right: 5px;
  }
  .wrapper__head {
    text-align: center;
  }
`

export default function HistoryTab({ showHistoryTab }) {
  const router = useRouter()
  return (
    <>
      {showHistoryTab && (
        <Styles>
          <div className="overlay__wrapper">
            <div className="tab-wrapper">
              <ActivityLogs />
            </div>
          </div>
        </Styles>
      )}
    </>
  )
}
