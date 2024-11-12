import express from 'express';
import { generateQrCode, getQRCode, redirectQrCode, updateQrCodeUrl } from '../controllers/authQRController.js';
import { brandRegister, deleteBrand, getBrand, updateBrand } from '../controllers/authBrandController.js';
import { createSlot, getSlots, updateSlot } from '../controllers/authcreateSlotcontroller.js';

const router = express.Router()

router.post('/generate', generateQrCode);

router.get('/redirect/:qrCodeId', redirectQrCode);

router.put('/update/:qrCodeId', updateQrCodeUrl);
router.put('/update_slot', updateSlot);

router.post('/register_brand', brandRegister);
router.post('/update_brand', updateBrand);
router.delete('/delete_brand', deleteBrand);
router.get('/get_brand', getBrand);
router.get('/get_qrs', getQRCode);
router.post("/add_slot", createSlot)
router.get('/get_slots', getSlots);




// router.get('/redirect/:qrCodeId', trackScan);

export default router