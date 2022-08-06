import styles from './Popup.module.css'

const Popup = ({children, visible, setVisible, setError}) => {
  const classes = [styles.popup]
  if (visible) {
    classes.push(styles.active)
  }
  return (
    <div className={classes.join(' ')} onClick={() => {setError(''); setVisible(false)}}>
      <div className={styles.content} onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Popup