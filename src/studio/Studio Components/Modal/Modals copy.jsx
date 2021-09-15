import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { InputBase, TextField } from '@material-ui/core';
import './Modals.css';
import CloseIcon from '@material-ui/icons/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { UserAuthContext } from '../../../context/AuthContext';


const Modals = ({ customStyles, ModalisOpen, setModalisOpen }) => {
    const { state } = useContext(UserAuthContext)
    console.log(`user ${state.user}
    id ${state.id}`);
    Modal.setAppElement('#root')
    return (
        <Modal isOpen={ModalisOpen}
            onRequestClose={() => setModalisOpen(false)}
            style={customStyles}>
            <CloseIcon onClick={() => setModalisOpen(false)} className="close_btn" />
            <Formik
                initialValues={{ channel_name: '', channel_logo: {} }}
                validate={values => {
                    const errors = {}
                    if (!values.channel_name) {
                        errors.channel_name = "Required"
                    } else if (values.channel_name.length < 5) {
                        errors.channel_name = "channel name should have 5 character"
                    } else if (!values.channel_logo) {
                        errors.channel_logo = "Required"
                    } else if (values.channel_logo.type != "image/png") {
                        errors.channel_logo = "Logo should in png formate"
                    }
                    return errors
                }}

                onSubmit={async (values, { setSubmitting }) => {
                    let photo = new FormData();
                    photo.append('photo', photo)
                    let userData = {
                        channel_name: values.channel_name,
                        channel_logo: values.channel_logo,
                        username: state.user,
                        userId: JSON.parse(state.id),
                        photo
                    }
                    try {
                        await axios.post('/api/v1/youtube/studio/channel/add_channel',
                            { userData },
                        )
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} >

                        <TextField label="Channel Name" name="channel_name"
                            value={values.channel_name} onChange={handleChange} onBlur={handleBlur}
                        />
                        <span className="error_msg">
                            {errors.channel_name && touched.channel_name && errors.channel_name}
                        </span>

                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span"
                            > Upload Channel Logo </Button>
                        </label>
                        <input accept="image/*" className="file_input" id="contained-button-file" type="file" name="channel_logo"
                            onChange={(e) => values.channel_logo = e.target.files[0]}
                            // onChange={(event) => {
                            //     setFieldValue("photo1", event.target.files[0]);
                            // }}
                            onBlur={handleBlur}
                        />
                        <span className="error_msg">
                            {errors.channel_logo && touched.channel_logo && errors.channel_logo}
                        </span>


                        <div className="save_btn_div">
                            <button type='submit' className="channel_btn">
                                Submit
                            </button>
                        </div>
                    </form>
                )}

            </Formik>
        </Modal >
        // <Modal isOpen={ModalisOpen}
        //     onRequestClose={() => setModalisOpen(false)}
        //     style={customStyles}>
        //     <CloseIcon onClick={() => setModalisOpen(false)} className="close_btn" />
        //     <form className="form" autoComplete="off">
        //         <TextField label="Channel Name" className="input" name="channel_name" />
        //         <label htmlFor="">Channel Logo</label>
        //         <TextField type="file" className="input" name="channel_logo" />
        //         <div className="save_btn_div">
        //             <button type='submit' className="channel_btn">
        //                 Submit
        //             </button>
        //         </div>
        //     </form>
        // </Modal>
    )
}

export default Modals
