const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//router
router.get('/' , async (req, res) => {
  try{
      const posts = await Post.find().limit(7);
      res.json(posts)
  }catch(err){
    res.json({message: err});
  }
});

router.post('/', async (req, res) => {
   const post = new Post ({
      studentName: req.body.studentName,
      studentSpecialty: req.body.studentSpecialty
   });
    try{
    const savedPost = await post.save()
    res.json(savedPost);
  }catch(err){
    res.json({message: error})
  }
});
//specific

router.get('/:postId', async (req,res) => {
  try{
const post = await Post.findById(req.params.postId)
res.json(post);
}catch(err){
  res.json({message: err})
}
});
//remove
router.delete('/:postId', async (req,res) => {
  try{
      const removedPost = await Post.remove({_id: req.params.postId})
   res.json(removedPost);
} catch(err) {
    res.json({ message: err});
}
});
//update
router.patch('/:postId', async (req,res) => {
    try {
  const updatedPost = await Post.updateOne(
    {_id: req.params.postId},
    { $set: { studentName: req.body.studentName}}
  );
   res.json(updatedPost);
} catch (err){
  res.json({ message: err})
  }
});

module.exports = router;
