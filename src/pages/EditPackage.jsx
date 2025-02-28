import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditPackage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    package_name: "",
    package_description: "",
    package_price: "",
    package_duration: "",
  });

  const navigate = useNavigate();

  // Fetch data berdasarkan ID paket
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/BannerAds/Package/Get/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };
    fetchData();
  }, [id]);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk submit edit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/BannerAds/Package/Update/${id}`, formData);
      alert("Paket berhasil diperbarui!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating package:", error);
      alert("Gagal memperbarui paket.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Package</h2>
      <form onSubmit={handleSubmit}>
        <input className="w-full border p-2 mb-3" type="text" name="package_name" value={formData.package_name} onChange={handleChange} required />
        <input className="w-full border p-2 mb-3" type="text" name="package_description" value={formData.package_description} onChange={handleChange} required />
        <input className="w-full border p-2 mb-3" type="number" name="package_price" value={formData.package_price} onChange={handleChange} required />
        <input className="w-full border p-2 mb-3" type="number" name="package_duration" value={formData.package_duration} onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Update</button>
      </form>
    </div>
  );
};

export default EditPackage;
