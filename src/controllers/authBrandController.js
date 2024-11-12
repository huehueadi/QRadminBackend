import Brand from "../models/brandModel.js";

export const brandRegister = async (req, res) => {
    const { brandName, brandDescription } = req.body;

    try {
        // Check if the required fields are provided
        if (!brandName || !brandDescription) {
            return res.status(400).json({
                message: "Brand name, description, and logo are required",
                success: false
            });
        }

        // Check if the brand already exists
        const checkBrand = await Brand.findOne({ brandName });
        if (checkBrand) {
            return res.status(409).json({
                message: "Brand already registered",
                success: false
            });
        }

        const newBrand = new Brand({
            brandName,
            brandDescription,
        });

        await newBrand.save();

        // Send success response
        res.status(200).json({
            message: "Brand registered successfully",
            success: true,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export const updateBrand = async (req,res) => {
    try {
        const { brandId }= req.params;
        const update = await Brand.findByIdAndUpdate(brandId)

        if(!update){
        res.status(400).json({
            message: "Brand not found",
            success: false
        })
    }
    res.status(200).json({
        message: "Brand updated successfully",
        success: true,
        update
    })

    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false
        })
    }
}

export const deleteBrand = async (req, res) => {
    try {
        const { brandId } = req.params;
        const removeBrand = await Brand.findByIdAndDelete(brandId)

        if(!removeBrand){
            res.status(400).json({
                message: "Brand not found",
                success: false
            })
        }
        res.status(200).json({
            message: "Brand deleted successfully",
            success: true,
            update
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false
        })
    }
}

export const getBrand = async (req, res) => {
    try {
        const allBrand = await Brand.find()
        res.status(200).json({
            message:"Fetch successfully",
            success:true,
            Brands: allBrand
        })

    } catch (error) {
        res.status(502).json({
            message:"intenral server while fetching the brand",
            success:false
        })
    }
}
