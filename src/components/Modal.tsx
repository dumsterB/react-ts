interface ModalProps{
    children:React.ReactNode
    title: string
}

export function Modal({children,title}:ModalProps){
    return(
        <div>
        <h1>{title} </h1>
            {children}
        </div>
    )
}