import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-modal';
import { TextField } from '@material-ui/core';
import './CreateChannel.css';
import CloseIcon from '@material-ui/icons/Close';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import { UserAuthContext } from '../../../context/AuthContext';
// import { AddChannel } from '../../API/APIService';
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalState';

const CreateChannel = () => {
    const {AddChannel, channelDetails} = useContext(GlobalContext)
    let history = useHistory();
    const { state } = useContext(UserAuthContext)
    console.log(`user ${state.user}
    id ${state.id}`);

    const [values, setvalues] = useState({
        channel_name: "",
        channel_logo: ''
    })

    const [errors, setErrors] = useState({
        channel_name: "",
        channel_logo: ''
    })

    const handleChange = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const uploadData = new FormData()
        if (!values.channel_name) {
            setErrors({
                ...errors,
                channel_name: "Required"
            })
        } else if (values.channel_name.length < 5) {
            setErrors({
                ...errors,
                channel_name: "channel name should have 5 character"
            })
        } else if (!values.channel_logo) {
            setErrors({
                ...errors,
                channel_logo: "Required"
            })

        } else if (values.channel_logo.type !== 'image/png') {
            setErrors({
                ...errors,
                channel_logo: "Logo should be image"
            })
        } else {
            setErrors({
                ...errors,
                channel_name: '',
                channel_logo: ''
            })
            uploadData.append('channelName', values.channel_name)
            uploadData.append('username', state.user)
            uploadData.append('userId', JSON.parse(state.id))
            uploadData.append('channel_logo', values.channel_logo)

            AddChannel(uploadData).then((res) => {
                history.push('/studio')
            })
        }
    }

    return (
        <div className="create_channel">
            <h1>Create Channel</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <TextField label="Channel Name" name="channel_name"
                    value={values.channel_name} onChange={(e) => handleChange(e)}
                />
                <span className="error_msg">
                    {errors.channel_name}
                </span>

                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span"
                    > Upload Channel Logo </Button>
                </label>
                <input accept="image/*" className="file_input" id="contained-button-file" type="file" name="channel_logo"
                    onChange={(e) => values.channel_logo = e.target.files[0]}

                />
                <span className="error_msg">
                    {errors.channel_logo}
                </span>


                <div className="save_btn_div">
                    <button type='submit' className="channel_btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>

    )
}

export default CreateChannel

