<template>
  <img :src="url" :alt="alt" @load="onLoad" @error="onError" />
</template>

<script>
  import md5 from 'md5';

  export default {
    name: 'gravatar-img',

    props: {
      email: {
        type: String,
        default: ''
      },

      hash: {
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
        const img = [
          '//www.gravatar.com/avatar/',
          this.hash || md5(this.email.trim().toLowerCase()),
          `?s=${this.size}`,
          `&d=${this.defaultImg}`,
          `&r=${this.rating}`
        ];

        return img.join('');
      }
    },

    methods: {
      onLoad(...args) {
        this.$emit('load', ...args);
      },

      onError(...args) {
        this.$emit('error', ...args);
      }
    }
  };
</script>
