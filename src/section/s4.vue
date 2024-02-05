<template>
	<article class="s4">
		<div class="t">
			<div class="t1" data-aos="fade-up" data-aos-delay="0">Easy of Access</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="200" v-if="!isMobile">三鐵共構大車站計畫<br>
				三大國道暢行無阻</div>
			<div class="t2" data-aos="fade-up" data-aos-delay="200" v-else>三鐵共構大車站計畫<br>
				<span>三大國道暢行無阻</span></div>
			<div class="t3" data-aos="fade-up" data-aos-delay="400">近享高鐵、台鐵、捷運共構優勢，台積電園區約6分鐘<br>
				輕取國道10號、中山高及南二高，南來北往四通八達！</div>
		</div>
		<img class="i" src="@/section/s4/1m.png" alt="" srcset="" v-if="isMobile">
		<img class="i" src="@/section/s4/1.png" alt="" srcset="" v-else>
	</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
	@apply w-full overflow-visible relative z-10 flex justify-end items-center;
	height: size(900);
	background: #000034;
	gap: size(102);

	.t {
		.t1 {
			margin-top: size(31);
			color: white;
			font-size: size(58);
			font-family: 'Noto Serif TC';
			font-weight: 700;
		}

		.t2 {
			color: #C9A063;
			font-size: size(40);
			font-family: 'Noto Serif TC';
			font-weight: 700;
			letter-spacing: size(4.8);
			word-wrap: break-word;
			margin-top: size(4);
		}

		.t3 {
			color: white;
			font-size: size(25);
			font-weight: 700;
			word-wrap: break-word;
			margin-top: size(35);
		}
	}

	.i {
		width: size(1049);
	}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
	.s4 {
		@apply w-full overflow-visible relative z-10 flex flex-col-reverse justify-center items-center;
		height: sizem(505);
		background: #000034;
		gap: sizem(17);
		padding-top: 0;

		.t {
			text-align: center;
			.t1 {
				margin-top: 0;
				font-size: sizem(24);
			}

			.t2 {
				font-size: sizem(20);
				letter-spacing: 0;

				span {
					letter-spacing: sizem(2.8);
				}
			}

			.t3 {
				font-size: sizem(12);
				font-weight: 700;
				margin-top: sizem(10);
			}
		}

		.i {
			width: 100%;
		}
	}
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject('smoothScroll')
const isMobile = computed(() => globals.$isMobile());

</script>
