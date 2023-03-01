// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// stylesheets
import styles from './SignupForm.module.css'

// types
import { AuthFormProps } from '../../types/props'
import { SignupFormData, PhotoFormData } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'

const SignupForm = (props: AuthFormProps): JSX.Element => {
  const { updateMessage, handleAuthEvt } = props
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    friendPassword: '',
  })
  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if (isSubmitted) return
    try {
      setIsSubmitted(true)
      await authService.signup(formData, photoData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf, friendPassword } = formData

  const isFormInvalid = (): boolean => {
    return !(name && email && password && password === passwordConf && friendPassword === 'SEI')
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >

      <div className={styles.inputContainer}>
        <input
          placeholder='Name'
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder='Email'
          type="text"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder='Password'
          type="password"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder='Confirm Password'
          type="password"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>

        <input
          placeholder='Upload Photo'
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder='SECRET SECRET CODE'
          type="text"
          id="friendPassword"
          value={friendPassword}
          name="friendPassword"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <button
          disabled={isFormInvalid() || isSubmitted}
          className={styles.button}
        >
          {!isSubmitted ? "Start Friendship" : "🚀 Befriending..."}
        </button>
        <Link to="/">
          <button>Nevermind</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
