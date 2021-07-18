import { IconPlus } from '@tabler/icons'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import styled from 'styled-components'
import config from '../../config/config'
import Button from '../buttons/Button'
import OverlayDisplay from './OverlayDisplay'

const Styles = styled.div`
  .container-main-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
    height: 40px;

    @media (max-width: 500px) {
      display: none;
    }
  }
  .container-main-header__left {
    display: flex;
    align-items: center;
  }
  .container-main-header__title {
    font-size: 20px;
    line-height: 28px;
    color: ${config.styles.baseColor};
    font-weight: bold;
    margin-right: 10px;
  }
  .container-main-header__options {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #0c4284;
    cursor: pointer;
  }
  .container-main-header__actions {
  }
  .container-main-header-dropdown__icon {
    margin-left: 5px;
  }
`

export default function ContainerMainHeader({
  overlayItems,
  pageTitle,
  createButtonUrl,
  createButtonTitle,
}) {
  const router = useRouter()
  const [showSubPages, setShowSubPages] = useState<boolean>(false)
  return (
    <Styles>
      <div className="container-main-header">
        <div className="container-main-header__left">
          <div className="container-main-header__title">{pageTitle}</div>
          <span
            className="container-main-header__options"
            onClick={() => setShowSubPages(!showSubPages)}
            onKeyPress={() => setShowSubPages(!showSubPages)}
          >
            {overlayItems.filter((item) => item.isActive === true)[0].title}
            <span className="container-main-header-dropdown__icon">
              {showSubPages ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
            </span>
          </span>
          {showSubPages && (
            <OverlayDisplay
              overlayItems={overlayItems.filter((item) => item.isActive === false)}
              left="20px"
              top="68px"
            />
          )}
        </div>
        {createButtonUrl ? (
          <div className="container-main-header__actions">
            <Button
              title={createButtonTitle}
              size="small"
              color="primary"
              onClick={() => router.push(createButtonUrl)}
              variant="filled"
              align="right"
              startIcon={<IconPlus width={15} strokeWidth={2} />}
            />
          </div>
        ) : null}
      </div>
    </Styles>
  )
}
