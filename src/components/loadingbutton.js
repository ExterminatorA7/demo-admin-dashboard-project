import React from 'react'
import { ReactComponent as Loader } from '.././assets/icons/loader.svg'
import '../components/loadingbutton.css'

const loadingbutton = ({ id, onSubmit, text, loading, disabled, type, className }) => {
    return (
        <button id={id} type={type} className={className} onClick={onSubmit} disabled={disabled} style={{ height: 45 }}>
            {!loading ? <p style={{ color: 'white', marginTop: 5, fontSize: 16 }}>{text}</p> : <Loader className="spinner" />}
        </button>
    )
}

export default loadingbutton;

