

const healthCheck = (req, res) =>{
    try {

        return res.status(200).json({
            success: true,
            message: "Health is good",
            
        })
        
    } catch (error) {
        console.log("Health check Error ", error)
        return res.status(500).json({
            success: false,
            message: "Server Error in Health Check",
            error: error.message
        })
    }
}

export default healthCheck
