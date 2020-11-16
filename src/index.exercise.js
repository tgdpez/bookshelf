import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function WelcomeForm({onSubmit, buttonText}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      username: username,
      password: password,
    }
    onSubmit(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" />
      <input
        type="text"
        id="username"
        onChange={e => {
          setUsername(e.target.value)
        }}
        value={username}
      />
      <label htmlFor="password" />
      <input
        type="text"
        id="password"
        onChange={e => {
          setPassword(e.target.value)
        }}
        value={password}
      />
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [modal, setModal] = useState('none')

  function handleSubmit(formData) {
    console.log('Form Data: ', formData)
  }

  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button
        onClick={() => {
          setModal('login')
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          setModal('register')
        }}
      >
        register
      </button>

      <Dialog
        isOpen={modal === 'login'}
        onDismiss={() => {
          setModal('none')
        }}
        aria-labelledby={'Login Modal'}
      >
        <button
          className="close-button"
          onClick={() => {
            setModal('none')
          }}
        >
          <span aria-hidden>×</span>
        </button>
        <WelcomeForm onSubmit={handleSubmit} buttonText="LOGIN" />
      </Dialog>

      <Dialog
        isOpen={modal === 'register'}
        onDismiss={() => {
          setModal('none')
        }}
        aria-labelledby={'Register Modal'}
      >
        <button
          className="close-button"
          onClick={() => {
            setModal('none')
          }}
        >
          <span aria-hidden>×</span>
        </button>
        <p>You've clicked on the Register modal</p>
        <WelcomeForm onSubmit={handleSubmit} buttonText="REGISTER" />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
