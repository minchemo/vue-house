<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2000 700">
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="-400" x2="0" y2="700">
          <stop offset="0" stop-color="#f060" />
          <stop offset=".25" stop-color="#f063" />
          <stop offset=".7" stop-color="#ff63" />
          <stop offset="1" stop-color="#fff0" />
        </linearGradient>
  
        <line id="line1" x1="1000" y1="700" x2="1000" y2="-400">
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            type="rotate"
            from="-3 1000 700"
            to="0 1000 700"
            repeatCount="indefinite" />
        </line>
		<polygon id="p0" points="0,0 1000,700 2000,0"/>
      </defs>
	<clipPath id="p1">
		<use xlink:href="#p0"  style="overflow:visible;"/>
	</clipPath>
  
      <g stroke="url(#gradient)" clip-path="url(#p1)">
        <template v-for="angle in angles" :key="angle">
          <use :xlink:href="'#line1'" x="0" y="0" :transform="`rotate(${angle} 1000 700)`" />
        </template>
      </g>
    </svg>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 定義 angles 作為旋轉角度的數組
const angles = ref(Array.from({ length: 47 }, (_, i) => -67 + i * 3));
  </script>
  