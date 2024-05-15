interface AlertProps {
    children:string
    closeAlertFunc: () => void
}

const Alert = ({children, closeAlertFunc}:AlertProps) => {


  return (
    <>
      
        <div className="alert alert-primary alert-dismissible" role="alert">
            {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlertFunc}></button>
   
            
        </div>
    </>
  )
}

export default Alert