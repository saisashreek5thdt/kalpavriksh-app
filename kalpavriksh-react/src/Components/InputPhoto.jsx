import react from 'react'

const InputPhoto = () => {
    return (
        <div className="photo">
            <label className="photo__label">Photo</label>
            <div className="photo__container">
                <span className="photo__span">
                    <svg className="photo__svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
                <button type="button" className="photo__button"> Change</button>
            </div>
        </div>
    )
}

export default InputPhoto