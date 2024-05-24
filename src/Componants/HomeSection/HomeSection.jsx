import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import ImageIcon from '@mui/icons-material/Image';
import * as Yup from 'yup';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet content is required")
});

const HomeSection = () => {
    const handleSubmit = (values) => {
        console.log("values", values);
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema
    });

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    };

    return (
        <div className="space-y-5">
            <section>
                <h1 className="py-5 text-xl font-bold opacity-90 text-left">Home</h1>
            </section>
            <section className="pb-10">
                <div className="flex space-x-5">
                    <Avatar alt="username" src="" />
                    <div className="w-full">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="What is happening"
                                    className="border-none outline-none text-xl bg-transparent w-full"
                                    {...formik.getFieldProps("content")}
                                />
                                {formik.errors.content && formik.touched.content && (
                                    <span className="text-red-500">{formik.errors.content}</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex space-x-5 items-center">
                                    <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                                        <ImageIcon className="text-[#1d9bf0]" />
                                        <input
                                            type="file"
                                            name="imageFile"
                                            className="hidden"
                                            onChange={handleSelectImage}
                                        />
                                    </label>
                                    <FmdGoodIcon className="text-[#1d9bf0]" />
                                    <TagFacesIcon className="text-[#1d9bf0]" />
                                </div>
                                <div className="ml-auto">
                                    <Button
                                        sx={{
                                            borderRadius: "20px",
                                            paddingY: "8px",
                                            paddingX: "20px",
                                            bgcolor: "#1e88e5",
                                        }}
                                        variant="contained"
                                        type="submit"
                                    >
                                        Tweet
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    );
};

export default HomeSection;
