<template>
  <img :src="url" :alt="alt" />
</template>

<script>
  import md5 from 'md5';

  export default {
    name: 'gravatar-img',

    props: {
      email: {
        type: String
      },

      md5: {
        type: String,
        default: ''
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
        const md5Hash = this.md5;
        const email = this.email;

        const img = [
          '//www.gravatar.com/avatar/',
          md5Hash || md5(email.trim()),
          `?s=${this.size}`,
          `&d=${this.defaultImg}`,
          `&r=${this.rating}`
        ];

        return img.join('');
      }
    }
  };
</script>
