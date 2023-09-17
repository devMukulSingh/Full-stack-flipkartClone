// import { paytmMerchantKey, paytmParams } from "..";
// import PaytmChecksum from "../paytm/PaytmChecksum.js";


// export const paymentController = async(req,res) => {
    
//     try {
//         const paytmChecksum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey);
    
//         const params = {
//             ...paytmParams, 'CHECKSUMHASH':paytmChecksum
//         }
//         res.status(200).json(params);
//     } catch (error) {
//         res.status(500).json(`Error in paymentController ${error}`);
//     }
// } 