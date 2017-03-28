<template>
  <img :src="url" :alt="alt" />
</template>

<script>
  import md5 from 'md5';

  export default {
    name: 'gravatar-img',

    props: {
      email: {
        type: String,
        required: true
      },

      size: {
        type: Number,
        default: 80
      },

      defaultImg: {
        type: String,
        default: 'retro'
      },

      rating: {
        type: String,
        default: 'g'
      },

      alt: {
        type: String,
        default: 'Avatar'
      }
    },

    computed: {
      url() {
        const img = [
          '//www.gravatar.com/avatar/',
          md5(this.email.trim()),
          `?s=${this.size}`,
          `&d=${this.defaultImg}`,
          `&r=${this.rating}`
        ];

        return img.join('');
      }
    }
  };
</script>
