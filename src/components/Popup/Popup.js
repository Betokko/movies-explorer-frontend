import styles from './Popup.module.css'

const Popup = ({children, setVisible, setPopupMessage}) => {

  const classes = [styles.popup]
  if (setVisible) {
    classes.push(styles.active)
  }

  const handleClick = () => { 
    setVisible()
    setPopupMessage('')
   }

  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      <div className={styles.content} onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Popup