import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import EditIcon from 'Assets/EditIcon'
import LoadingSpinner from 'Components/loader/Loader'
import * as COLORS from 'Config/colors'
import { baseButton } from 'Styles/button'
import { css } from '@emotion/core'

export default function EditButton (props) {
  const { onClick, loading, theme } = props
  return (
    <button
      css={loading ? inactiveStyles : containerStyles}
      disabled={loading}
      onClick={onClick}
      style={theme ? { backgroundColor: theme.highlight } : null}
      type='button'
    >
      {
        loading && (
          <div css={loadingWrapperStyles}>
            <LoadingSpinner
              color={COLORS.WHITE}
              pixelDiameter={20}
              pixelThickness={3}
              theme={{ color: COLORS.WHITE }}
            />
          </div>
        )
      }
      {
        !loading && (
          <Fragment>
            <p>edit</p>
            <div css={iconWrapperStyles}>
              <EditIcon />
            </div>
          </Fragment>
        )
      }
    </button>
  )
}

const containerStyles = css`
  ${baseButton};
  
  width: 65px;
  justify-content: center;
`

const iconWrapperStyles = css`
  position: relative;
  top: -2px;
  width: 15px;
  height: 15px;
  margin-left: 3px;
`

const inactiveStyles = css`
  ${containerStyles};
  
  cursor: default;
  &:hover {
    opacity: 1;
  }
`

const loadingWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -5px;
  left: -4px;
`

EditButton.defaultProps = {
  loading: false
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  theme: PropTypes.shape().isRequired
}
