const { Router } = require('express');
const { getPatients, createPatient, updatePatient, deletePatient, confirmatePassword, changePassword, getPatient, medicalRecord } = require('../controllers/patient.controller');
const { check } = require('express-validator');
const { fieldsValidation } = require('../middlewares/fields-validations.middleware');
const { isJwtValid } = require('../middlewares/jwt-validation.middleware');

const router = Router();
// Route => users
router.get('/:document_number',isJwtValid, getPatient);
router.get('/',isJwtValid, getPatients);
router.post('/', [
    isJwtValid,
    check('document_type', 'document type is a mandatory field').not().isEmpty(),
    check('document_number', 'document number is a mandatory field').not().isEmpty(),
    check('email', 'email is a mandatory field').isEmail(),
    check('name', 'user name is a mandatory field').not().isEmpty(),
    check('lastname', 'user lastname is a mandatory field').not().isEmpty(),
    check('gender', 'gender is a mandatory field').not().isEmpty(),
    check('rol', 'rol is a mandatory field').not().isEmpty(),
    fieldsValidation
], createPatient);

router.post('/outside', [
    check('document_type', 'document type is a mandatory field').not().isEmpty(),
    check('document_number', 'document number is a mandatory field').not().isEmpty(),
    check('email', 'email is a mandatory field').isEmail(),
    check('password', 'password is a mandatory field').not().isEmpty(),
    check('name', 'user name is a mandatory field').not().isEmpty(),
    check('lastname', 'user lastname is a mandatory field').not().isEmpty(),
    check('gender', 'gender is a mandatory field').not().isEmpty(),
    check('phone', 'Phone is a mandatory field').not().isEmpty(),
    check('rol', 'rol is a mandatory field').not().isEmpty(),
    fieldsValidation
], createPatient);



router.put('/:id', [
    isJwtValid,
    // isAdminUser,
    check('document_type', 'document type is a mandatory field').not().isEmpty(),
    check('document_number', 'document number is a mandatory field').not().isEmpty(),
    check('email', 'email is a mandatory field').isEmail(),
    check('name', 'user name is a mandatory field').not().isEmpty(),
    check('lastname', 'user lastname is a mandatory field').not().isEmpty(),
    check('gender', 'gender is a mandatory field').not().isEmpty(),
    check('phone', 'Phone is a mandatory field').not().isEmpty(),
    fieldsValidation
], updatePatient);
router.put('/delete/:id', [isJwtValid], deletePatient);
router.put('/save-medical-record/:id', [isJwtValid], medicalRecord);
router.post('/confirm-password/:id',[isJwtValid, check('oldPassword', 'Old passoword is a mandatory field').not().isEmpty(), ], confirmatePassword);
router.put('/change-password/:id',[isJwtValid, check('newPassword', 'New passoword is a mandatory field').not().isEmpty(), ], changePassword);

module.exports = router;