var express = require('express');
var postManageRoute = express.Router();
var postManageController = require('../controllers/postManage.controller');

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' })

postManageRoute.get('/postmanage', postManageController.index);
postManageRoute.get('/newpost', postManageController.newPost);
postManageRoute.post('/newpost',
    upload.single('image'),
    postManageController.postValidation,
    postManageController.postPost);

postManageRoute.get('/newcategory', postManageController.newCategory);
postManageRoute.post('/newcategory', postManageController.categoryValidation, postManageController.postNewCategory);

postManageRoute.get('/category/:id', postManageController.getPostByCategory);


module.exports = postManageRoute;