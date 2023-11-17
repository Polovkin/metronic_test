import React from "react";
import {useFormik} from "formik";
import {getUserByToken, register} from "../core/_requests";
import {useAuth} from "../core/Auth";

const AuthLastStep = () => {
    const {saveAuth, setCurrentUser} = useAuth()
    const formik = useFormik(
        {
            initialValues: {},
            onSubmit: async () => {
                try {
                    const {data: auth} = await register()
                    const {data: user} = await getUserByToken(auth.api_token)
                    setCurrentUser(user)
                } catch (error) {
                    console.error(error)
                    saveAuth(undefined)
                }
            }
        }
    )
    const handleFinish = () => {
    }


    return (
        <form onSubmit={formik.handleSubmit}>
            <button onClick={handleFinish} className="btn btn-primary">Complete registration<i
                className="flaticon2-chat-1"></i></button>
        </form>
    )
}

export default AuthLastStep
