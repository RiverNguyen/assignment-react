import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ProductAddPage = ({ onAdd }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    // const productImage = document.getElementById("productImage");

    const onSubmit = async (data) => {
        const uploadedUrls = await uploadFile(Array.from(data.image));
        data.image = uploadedUrls;
        onAdd(data);
        navigate("/admin/products");
    };

    const uploadFile = async (files) => {
        if (files) {
            const CLOUD_NAME = "dfykg7wtt";
            const PRESET_NAME = "assignment-ecma";
            const FOLDER_NAME = "assignment-ecma";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                urls.push(response.data.secure_url);
            }
            return urls;
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Thêm sản phẩm</h1>
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="productName" className="form-label">
                        Tên sản phẩm:
                    </label>
                    <input
                        type="text"
                        id="productName"
                        className="form-control"
                        {...register("name")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">
                        Ảnh:
                    </label>
                    <input
                        type="file"
                        id="productImage"
                        className="form-control"
                        multiple
                        {...register("image")}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                        Giá:
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        className="form-control"
                        {...register("price")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDesc" className="form-label">
                        Mô tả sản phẩm:
                    </label>
                    <textarea
                        className="form-control"
                        id="productDesc"
                        cols="30"
                        rows="10"
                        {...register("description")}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Thêm
                </button>
            </form>
        </>
    );
};

export default ProductAddPage;
