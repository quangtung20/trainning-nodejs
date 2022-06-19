const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const {auth} = require('../middleware/auth')

router.route('/posts')
    .post(auth, postCtrl.createPost)
    .get( postCtrl.getPosts)

router.route('/post/:id')
    .patch(auth, postCtrl.updatePost) 
    .get(auth, postCtrl.getPost)
    .delete(auth, postCtrl.deletePost)

router.patch('/post/:id/like', auth, postCtrl.likePost)

router.patch('/post/:id/unlike', auth, postCtrl.unLikePost)

router.get('/user_posts/:id', auth, postCtrl.getUserPosts)

router.get('/post_discover', auth, postCtrl.getPostsDicover)  // get goi y bai post

router.patch('/savePost/:id', auth, postCtrl.savePost) // user se co chuc nang luu bai post minh thich

router.patch('/unSavePost/:id', auth, postCtrl.unSavePost) // go bai post mình thich

router.get('/getSavePosts', auth, postCtrl.getSavePosts) // lay bai post minh thich


module.exports = router