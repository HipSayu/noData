import express from 'express';
import multer from 'multer';
import validate from '../../middlewares/validate';
import authValidation from '../../validations/auth.validation';
import authController from '../../controllers/auth.controller';
import auth from '../../middlewares/auth';

const storage = multer.memoryStorage();

const upload = multer({ storage });
const router = express.Router();

router.post('/register', validate(authValidation.register), upload.single('avatar'), authController.register);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/logout', validate(authValidation.logout), authController.logout);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
router.post('/send-verification-email', auth(), authController.sendVerificationEmail);
router.post('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);
router.post('/tokenIsValid', authController.tokenIsValid);
export default router;
