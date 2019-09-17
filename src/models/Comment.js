/* eslint-disable func-names */
const mongoose = require('mongoose');
const Post = require('./Post');

const { Schema } = mongoose;

const schema = new Schema({
  body: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      autopopulate: true,
    },
  ],
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    autopopulate: { select: 'login' },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schema.pre('save', async function (next) {
  if (this.isNew) {
    await Post.commentCountInc(this.post);
  }
  next();
});

schema.pre('remove', async function (next) {
  await this.updateOne(this.parent, {
    $pull: {
      children: this.id,
    },
  });

  next();
});

schema.plugin(require('mongoose-autopopulate'));

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});


module.exports = mongoose.model('Comment', schema);
