<template>
  <div id="app">
    <div>
      <v-gravatar
        :email="email"
        :default-img="defaultImage"
        :size="parseInt(size, 10)" />
    </div>

    <div>
      <input type="text" v-model="email" />

      <select v-model="defaultImage">
        <option value="404">404</option>
        <option value="mm">mm</option>
        <option value="identicon">identicon</option>
        <option value="monsterid">monsterid</option>
        <option value="wavatar">wavatar</option>
        <option value="retro">retro</option>
        <option value="blank">blank</option>
      </select>

      <select v-model="size">
        <option value="80">80</option>
        <option value="120">120</option>
        <option value="240">240</option>
        <option value="500">500</option>
      </select>

      <select v-model="rating">
        <option value="g">g (suitable for display on all websites with any audience type)</option>
        <option value="pg">pg (may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence)</option>
        <option value="r">r (may contain such things as harsh profanity, intense violence, nudity, or hard drug use)</option>
        <option value="x">x (may contain hardcore sexual imagery or extremely disturbing violence)</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: 'foo@bar.com',
        defaultImage: 'mm',
        size: 80,
        rating: 'g'
      };
    }
  };
</script>
