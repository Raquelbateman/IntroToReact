import styles from './Button.module.css';
interface ButtonProps {
    children:string
    onClickFunction:() => void
    color?:string
    
}
const Button = ({children, color, onClickFunction}:ButtonProps) => {

  return (
    <>
    <button className={styles['primary']} onClick={onClickFunction}>{children}</button>
    
    </>
  )
}

export default Button