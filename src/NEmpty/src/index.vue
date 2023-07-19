<template>
  <div class="n-empty">
    <div class="n-empty-image" :style="imageStyle">
      <img v-if="image" :src="image">
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div class="n-empty-description">
      <slot name="description">
        <p>{{ description }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
import ImgEmpty from './ImgEmpty.vue'

export default {
  name: 'NEmpty',
  components: {
    [ImgEmpty.name]: ImgEmpty,
  },
  props: {
    image: {
      type: String,
    },
    imageSize: {
      type: [String, Number],
    },
    description: {
      type: String,
    },
  },
  computed: {
    imageStyle() {
      const { imageSize } = this
      return {
        width: typeof imageSize === 'number' ? `${imageSize}px` : imageSize,
      }
    },
  },
}
</script>

<style>
.n-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  padding: 40px 0;
}

.n-empty-image img,
.n-empty-image svg {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.n-empty-image img {
  user-select: none;
  object-fit: contain;
}

.n-empty-image svg {
  fill: #dcdde0;
}

.n-empty-description {
  margin-top: 20px;
}

.n-empty-description p {
  margin: 0;
  font-size: 14px;
  color: #909399;
}
</style>
