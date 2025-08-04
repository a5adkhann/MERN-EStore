const Categories = require("../models/categoriesModel");
const Products = require("../models/productsModel");

const categoryController = {
    addCategory: async (request, response) => {
        console.log(request);
        try {
            const { categoryName, categoryDetail } = request.body;
            const categoryImage = request.file ? request.file.filename : null;

            await Categories.insertOne({
                category_name: categoryName,
                category_detail: categoryDetail,
                category_image: categoryImage,
            });

            response.status(200).send({ popup: "Category Added" });
        } catch (err) {
            response.status(500).send({ popup: "Error Adding Category" });
        }
    },

    getCategory: async (request, response) => {
        try {
            const categories = await Categories.find();
            response.status(200).send(categories);
        }
        catch (err) {
            console.log(err);
        }
    },

    searchCategory: async (request, response) => {
        const searchCategory = request.params.value;
        try {
            const result = await Categories.find({
                category_name: { $regex: searchCategory, $options: "i" }
            });
            response.status(200).send({ filteredcategory: result });
        }
        catch (err) {
            console.log(err);
        }
    },

    updateCategory: async (request, response) => {
        const { editCategoryName, editCategoryDetail } = request.body;
        const id = request.params.id;

        try {
            const updateData = {
                category_name: editCategoryName,
                category_detail: editCategoryDetail,
            };

            if (request.file) {
                updateData.category_image = request.file.filename;
            }

            await Categories.updateOne({ _id: id }, updateData);
            response.status(200).send({ message: "Category updated successfully" });
        } catch (err) {
            console.error("Update category error:", err);
            response.status(500).send({ message: "Failed to update category" });
        }
    },

    categoryDetail: async (request, response) => {
        const id = request.params.id;
        try {
            const resultProducts = await Products.find({ product_category: id });
            const resultCategories = await Categories.find({ _id: id });
            response.status(200).send({ product: resultProducts, category: resultCategories });
        }
        catch (err) {
            console.log(err);
        }
    },

    deleteCategory: async (request, response) => {
        const id = request.params.id;
        try {
            await Categories.deleteOne({ _id: id });
            response.status(200).send({ message: "Category deleted successfully" });
        }
        catch (err) {
            console.log(err);
        }
    }
}


module.exports = categoryController;