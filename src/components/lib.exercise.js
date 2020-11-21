import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/core'
import {FaSpinner} from 'react-icons/fa'
import {Dialog as ReachDialog} from '@reach/dialog'
import * as mq from 'styles/media-queries'
import * as colors from 'styles/colors'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  'aria-label': 'loading',
}

const buttonVariants = {
  primary: {
    color: colors.skyBlue,
    backgroundColor: colors.gray10,
  },
  secondary: {
    color: colors.skyBlue,
    backgroundColor: colors.coolGray,
  },
}

const Button = styled.button(
  {
    padding: '0.75rem',
    margin: '25px 0 15px',
    minWidth: '135px',
    borderRadius: '6px',
    border: 'unset',
    boxShadow: colors.boxShadowLow,
    '&:hover': {
      boxShadow: colors.boxShadowRaised,
    },
  },
  ({variant = 'primary'}) => buttonVariants[variant],
)

const Input = styled.input(props => {
  const boxShadow = colors.boxShadowRaised
  return {
    overflow: 'visible',
    border: '0',
    background: colors.lightGray,
    borderRadius: '5px',
    minHeight: '2.5rem',
    margin: '.5rem 0',
    '&:hover': {
      boxShadow: boxShadow,
    },
    '&:active': {
      boxShadow: boxShadow,
      border: '2px solid #cfd5f1',
    },
    '&:focus': {
      boxShadow: boxShadow,
      border: '2px solid #cfd5f1',
    },
  }
})

const FormGroup = styled.div(props => {
  return {
    display: 'flex',
    flexDirection: 'column',
  }
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

export {CircleButton, Dialog, Button, Input, FormGroup, Spinner}
