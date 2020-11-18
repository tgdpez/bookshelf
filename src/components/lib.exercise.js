import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'

const Button = styled.button(props => {
  return {
    color: props.variant === 'light' ? '#0ec2ec' : '#c0f5ff',
    backgroundColor: props.variant === 'light' ? '#efefef' : '#464d4e',
    padding: '0.75rem',
    margin: '25px 0 15px',
    minWidth: '135px',
    borderRadius: '6px',
    border: 'unset',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.22)',
  }
})

const Input = styled.input(props => {
  const boxShadow = '0px 4px 15px rgba(0,0,0,0.22)'
  return {
    overflow: 'visible',
    border: '0',
    background: '#f2f5f4',
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
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
})

export {CircleButton, Dialog, Button, Input, FormGroup}
