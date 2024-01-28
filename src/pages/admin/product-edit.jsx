import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const ProductEditPage = ({ onAdd }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        onAdd(data);
        navigate("/admin/products");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Cập nhật sản phẩm</h1>
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
                        type="text"
                        id="productImage"
                        className="form-control"
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

export default ProductEditPage;
