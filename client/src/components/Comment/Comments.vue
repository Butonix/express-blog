<template>
  <div class="comments__item">
    <div
      v-for="comment in data"
      class="comments__item-main"
      :style="`margin-left: ${indentLevel}rem`"
      :key="comment.id"
    >
      <div class="comments__item-main-block">
        <div class="comments__item-main-block-meta">  
          <div class="comments__item-main-block-meta-rating">
            {{ comment.rating }} 
          </div> 
          <div class="comments__item-main-block-meta-upvote">   
            <plus-icon/>
          </div>
          <div class="comments__item-main-block-meta-downvote">
            <minus-icon/>
          </div>   
          <div class="comments__item-main-block-meta-author">
            {{ comment.author.login }}
          </div>
          <div class="comments__item-main-block-meta-avatar">
            <img :src="$resolveAvatar(comment.author.avatar)"/>
          </div>
          <div class="comments__item-main-block-meta-date">
            {{ comment.createdAt | $fromNow }}
          </div>
        </div>
        <div class="comments__item-main-block-body">
          {{ comment.body }}
        </div>
      </div>
      <div v-if="comment.children.length > 0">
        <comment-tree-helper :data="comment.children" :indent-level="indentLevel"/>
      </div>
    </div>
  </div>
</template>

<script>
import CommentTreeHelper from './CommentTreeHelper'
import plusIcon from '@/library/svg/plus';
import minusIcon from '@/library/svg/minus';

export default {
  components: {
    CommentTreeHelper,
    plusIcon,
    minusIcon
  },
  props: ['data', 'indentLevel'],
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.comments {

  &__item {
    &-main {
      border-left: solid 1px $light-gray;
      &-block {
        background: $widget-bg;
        margin: 1rem;
        padding: 1rem;
        color: $main-text;

        &-meta {
          display: flex;
          flex-direction: row;

          &-avatar {
            img {
              width: 1rem;
              height: 1rem;
              margin-left: 0.5rem;
              border-radius: 50%;
            }
          }

          &-date {
            margin-left: 0.5rem;
            color: $light-gray;
          }

          &-upvote, &-rating, &-downvote {
            color: $light-gray;
            svg {
              fill: $light-gray;
              width: 2rem;
              height: 2rem;
              position: relative;
              top: -8px;
              transform: scale(1.2);
            }
          }

          &-downvote {
            margin-left: -0.5rem;
          }

          &-upvote:hover svg, &-upvote_active svg {
            cursor: pointer;
            fill: $dark-firm;
          }

          &-downvote:hover svg, &-downvote_active svg {
            cursor: pointer;
            fill: $dark-red;
          }
        }

        &-body {
          line-height: 1.5rem;
        }
      }
    }
  }
}
</style>