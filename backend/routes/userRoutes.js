const express = require('express');
const router = express.Router();
const {allUsers,singleUser, editUser, deleteUser,createUserJobsHistory,updateUserJobStatus}= require('../controllers/userController');
const { isAuthenticated ,protect,isAdmin} = require('../middleware/auth');
const {forgotPassword, resetPassword}= require('../controllers/forgotPasswordController');
//  auth routes
router.get('/profile',isAuthenticated, (req, res) => {
    res.json(req.user);
});
router.get('/allusers', isAuthenticated,isAdmin,allUsers);

router.get('/user/:id', isAuthenticated,singleUser);
router.put('/user/edit/:id', isAuthenticated,editUser);
router.delete('/admin/user/delete/:id', isAuthenticated,isAdmin,deleteUser);
router.post('/user/jobhistory', isAuthenticated, createUserJobsHistory);
router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword', resetPassword);
router.put('/user/:userId/job-history/:jobId/status', isAuthenticated,isAdmin, updateUserJobStatus);
module.exports = router;