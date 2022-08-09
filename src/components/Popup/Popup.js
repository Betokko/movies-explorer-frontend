import styles from './Popup.module.css'

const Popup = ({children, popupMessage, setPopupMessage}) => {

  const classes = [styles.popup]
  if (popupMessage) {
    classes.push(styles.active)
  }

  const handleClick = () => { 
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