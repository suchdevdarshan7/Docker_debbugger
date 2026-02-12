
async function getProducts(req,res,next){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        res.status(200).json({status:"success", products: data});
    }
    catch(error){
        next(error);
    }
}

module.exports = {getProducts};