import React, { Fragment, useEffect, useState } from 'react'
import tick from '../Asset/tick.png'
import { emailVerifyAPI } from '../Services/allAPI'
import { useParams } from 'react-router-dom'

function EmailVerify() {
    const params = useParams()

    const [validUrl, SetValidUrl] = useState(false)
    const verifyEmailUrl = async (e) => {
        // e.preventDefault()
        const result = await emailVerifyAPI(params.id, params.token)
        if (result.status === 200) {
            SetValidUrl(true)
        } else {
            SetValidUrl(false)
        }
        console.log(result);
    }

    useEffect(() => {
        verifyEmailUrl()
    }, [])

    return (
        <div style={{ marginTop: "100px" }}>
            <Fragment>
                {
                    validUrl ? (
                        <div className='text-center'>
                            <img className='w-25' src={tick} alt="Success_img" />
                        </div>
                    ) : (
                        <div>
                            <h1 className='text-center'>Not Found</h1>
                            {/* <button onClick={e => verifyEmailUrl(e)}>validate</button> */}
                        </div>
                    )
                }
            </Fragment>
        </div>
    )
}

export default EmailVerify