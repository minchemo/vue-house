<template>
  <div class="sideNav">
    <div class="nav relative">
      <div class="menu" @click="toggleSidebar">
        <div class="menu_switch" :class="`${isOpen ? 'active' : ''}`" aria-label="menu">
          <div class="menu_switch_inner">
            <div class="menu_line">
              <span class="menu_line_item"></span>
              <span class="menu_line_item"></span>
              <span class="menu_line_item"></span>
            </div>
            <div class="menu_svg max">
              <svg
                class="menu_circle"
                x="0px"
                y="0px"
                width="30px"
                height="30px"
                viewBox="0 0 30 30"
              >
                <circle
                  class="menu_circle_path"
                  cx="15"
                  cy="15"
                  r="13.5"
                  stroke-width="3"
                  fill="none"
                />
              </svg>
            </div>
            <div class="menu_svg min">
              <svg
                class="menu_circle"
                x="0px"
                y="0px"
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
              >
                <circle
                  class="menu_circle_path"
                  cx="7"
                  cy="7"
                  r="6.5"
                  stroke-width="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" /> -->
      <div class="sidenav">
        <div class="sidenav_title">FOLLOW US</div>
        <div class="sidenav_line"></div>
        <div class="social">
          <a
            class="social_item"
            data-mct-method="facebook"
            :href="info.fbLink"
            target="_blank"
            title="敦南好好facebook"
            rel="noopener noreferrer"
          >
            <img src="~@/assets/img/icon-facebook.png" alt="敦南好好facebook" />
          </a>
          <a
            class="social_item"
            data-mct-method="messenger"
            :href="info.fbMessage"
            target="_blank"
            title="敦南好好messenger"
            rel="noopener noreferrer"
          >
            <img src="~@/assets/img/icon-messenger.png" alt="敦南好好messenger" />
          </a>
          <a
            class="social_item"
            data-mct-method="googlemap"
            :href="info.googleLink"
            target="_blank"
            title="敦南好好map"
            rel="noopener noreferrer"
          >
            <img src="~@/assets/img/icon-map.png" alt="敦南好好map" />
          </a>
        </div>

        <div
          v-scroll-to="{ element: `#contact` }"
          class="reservation js-reservation-anchor btn-gold reverse"
          title="敦南好好 預約賞屋"
        >
          <span></span>
          <span class="btn-txt">預約賞屋</span>
        </div>
      </div>
      <div class="menupop menupop-menu" :class="`${isOpen ? 'on' : ''}`">
        <div class="cloud cloud-top"></div>
        <div class="menupop_inner">
          <div class="menu">
            <ul class="menu_list">
              <li
                class="menu_item"
                v-for="(item, i) in list"
                :key="`menu_item-${i}`"
                v-scroll-to="{ element: `#${item.section}`, offset: offset }"
                @click="toggleSidebar"
              >
                <div class="menu_link">
                  <!-- span class="menu_count">0{{i+1}}</span -->
                  {{item.name}}
                </div>
              </li>
            </ul>
            <a
              href="#contact"
              class="btn clr:primary btn-reservation btn-gold js-reservation-anchor"
              title="敦南好好 預約賞屋"
            >
              <span></span>
              <span class="btn-txt">預約賞屋</span>
            </a>
          </div>
          <div class="menupop_line"></div>
          <div class="menupop_cover">
            <div class="menupop_banner">
              <div class="menupop_logo">
                <img src="~@/assets/img/contact-logo.png" alt="敦南好好" />
              </div>
            </div>
            <div class="menu_social">
              <div class="menu_social_title">FOLLOW US</div>
              <div class="menu_social_list">
                <a
                  class="menu_social_item"
                  data-mct-method="facebook"
                  rel="noopener noreferrer"
                  :href="info.fbLink"
                  target="_blank"
                  title="敦南好好facebook"
                >
                  <img src="~@/assets/img/icon-facebook.png" alt="敦南好好facebook" />
                </a>
                <a
                  class="menu_social_item"
                  data-mct-method="messenger"
                  rel="noopener noreferrer"
                  :href="info.fbMessage"
                  target="_blank"
                  title="敦南好好messenger"
                >
                  <img src="~@/assets/img/icon-messenger.png" alt="敦南好好messenger" />
                </a>
                <a
                  class="menu_social_item"
                  data-mct-method="googlemap"
                  rel="noopener noreferrer"
                  :href="info.googleLink"
                  target="_blank"
                  title="敦南好好map"
                >
                  <img src="~@/assets/img/icon-map.png" alt="敦南好好map" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cloud cloud-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'
import info from '@/info'

export default {
  name: 'sideNavigation',
  components: {},
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      list: navList,
      info,
    }
  },

  computed: {
    offset() {
      return 0
    },
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';

.navigation {
  height: $nav_phone_height;
  z-index: 110;
}

.nav-container {
  display: block;
  height: auto;
}

.logo {
  width: $logo_phone_width;
  left: 15px;
}

.nav {
  position: static;
  height: $nav_phone_height;
}

// .menu {
//   display: block;
//   position: fixed;
//   z-index: 112;
//   top: 10px;
//   right: 30px;
//   width: 100px;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: 20px;
//   &:before {
//     content: '';
//     width: 40%;
//     height: 100%;
//     display: block;
//     background: #fff;
//     position: absolute;
//     transform: skewX(-20deg);
//     left: -10%;
//     opacity: 0;
//     top: 0;
//     z-index: 5;
//     transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
//   }
//   &:hover:before {
//     opacity: 1;
//     width: 90%;
//     left: 140%;
//   }
//   img {
//     width: 100%;
//   }

//   .close {
//     width: 40px;
//     margin-top: 20px;
//     margin-right: 0px;
//   }
// }

.navlist {
  position: fixed;
  z-index: 111;
  background: $nav_bg;
  width: 0%;
  right: 0;
  top: $nav_phone_height;
  height: calc(100vh - #{$nav_phone_height});
  text-align: center;
  transition: all 0.3s ease-in;
  display: block;
  transform: translateX(40%);
  background-image: url('./nav_bg.png');

  li {
    height: 60px;
    margin-bottom: 0;
    width: 100%;
  }

  .link {
    position: relative;
    overflow: hidden;
    height: 60px;
    width: 100%;
    font-size: 17px;
    align-items: center;
    justify-content: center;
    display: none;
    background-size: cover;
    border-top: 1px solid rgba(250, 250, 250, 0.6);
    border-bottom: 1px solid rgba(60, 30, 0, 0.2);
    transition: all 0.3s;

    img,
    span {
      display: block;
    }
    span {
      line-height: 16px;
    }

    &:hover {
      color: $nav_link_hover_color;
      background: $nav_link_hover_bg;
      background-position: center;
      background-size: cover;
    }
    &:before {
      content: '';
      width: 40%;
      height: 100%;
      display: block;
      background: #fff;
      position: absolute;
      transform: skewX(-20deg);
      left: -10%;
      opacity: 0;
      top: 0;
      z-index: 5;
      transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    }
    &:hover:before {
      opacity: 1;
      width: 90%;
      left: 140%;
    }
  }

  &.open {
    width: 230px;
    transform: translateX(0%);
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    .link {
      display: flex;
      justify-content: center;
      cursor: pointer;
      span {
        white-space: nowrap;
      }

      .title {
        color: $nav_link_color;
      }

      .subTitle {
        color: $nav_link_subtitle_color;
      }
      .divided {
        display: none;
      }

      &:hover {
        .title {
          color: $nav_link_hover_color;
        }
      }
    }
  }
}

.mask {
  width: 100vw;
  top: $nav_phone_height;
  right: 0;
  background: transparent;
  position: fixed;
  z-index: -1;
  height: calc(100vh - #{$nav_phone_height});
  opacity: 0;
  transition: all 0.3s ease-in;
  &.open {
    display: block;
    width: 100vw;
    opacity: 1;
    z-index: 110;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .navigation {
    height: $nav_tablet_height;
    justify-content: center;
  }

  .logo {
    width: $logo_tablet_width;
    // left: -240px;
  }

  .navlist {
    width: 0%;
  }

  .navlist .link {
    font-size: 20px;
    width: 230px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    height: $nav_phone_height;
    z-index: 110;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo {
    width: $logo_phone_width;
    left: 15px;
  }

  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: fixed;
    right: 5px;
    top: 5px;
    width: 60px;
    border-radius: 10px;

    img {
      width: 100%;
    }

    .close {
      width: 40px;
    }

    svg {
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: fixed;
    z-index: 111;
    background-image: url('./nav_bg.png');
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

    li {
    }

    .link {
      display: none;

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }
    }

    &.open {
      width: 100%;
      transform: translateX(0%);

      .link {
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }
      }
    }
  }

  .mask {
    width: 100vw;
    top: $nav_phone_height;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    height: calc(100vh - #{$nav_phone_height});
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      display: block;
      width: 100vw;
      opacity: 1;
      z-index: 110;
    }
  }
}

a,
abbr,
acronym,
address,
article,
aside,
audio,
b,
basefont,
bdi,
bdo,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
command,
datalist,
dd,
del,
details,
dfn,
dialog,
dir,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
font,
footer,
form,
frame,
frameset,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
main,
map,
mark,
menu,
menuitem,
meter,
nav,
noframes,
noscript,
object,
ol,
output,
p,
progress,
q,
rp,
rt,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video,
wbr {
  padding: 0;
  border: none;
  margin: 0;
  outline: 0;
  vertical-align: baseline;
  font: inherit;
  font-size: 100%;
  color: inherit;
  background-color: transparent;
}
article,
aside,
canvas,
command,
datalist,
details,
figcaption,
figure,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
mark,
output {
  display: inline-block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
[hidden],
rp,
template {
  display: none;
}
a {
  background: 0 0;
  cursor: pointer;
}
a:active,
a:hover {
  outline: 0;
}
[disabled] {
  cursor: not-allowed;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
svg:not(:root) {
  overflow: hidden;
}
*,
:after,
:before {
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
  font-family: sans-serif;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
address,
b,
caption,
cite,
code,
dfn,
em,
h1,
h2,
h3,
h4,
h5,
h6,
i,
strong,
th,
var {
  font-style: normal;
  font-weight: 400;
}
a,
del,
ins,
s {
  text-decoration: none;
}
abbr,
acronym {
  font-variant: normal;
  cursor: help;
}
abbr[title],
acronym[title] {
  border-bottom: 1px dotted;
}
dir,
menu,
ol,
ul {
  list-style: none;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-color: transparent;
  color: inherit;
  text-align: left;
  font: inherit;
}
table,
td,
th {
  table-layout: auto;
}
code,
kbd,
pre,
samp,
tt {
  font-size: 1em;
  font-family: monospace, sans-serif;
}
:link,
:visited,
a,
address,
cite,
em,
i,
ins,
s,
u,
var {
  font-style: normal;
  text-align: left;
  text-decoration: none;
}
blockquote,
caption,
dd,
div,
dt,
h1,
h2,
h3,
h4,
h5,
h6,
li,
p,
td,
th {
  word-wrap: break-word;
}
caption,
center,
th {
  font-weight: 400;
  text-align: left;
}
listing,
plaintext,
xmp {
  font-family: inherit;
  white-space: normal;
}
embed,
img,
object {
  max-width: 100%;
  height: auto;
  border: none;
  vertical-align: top;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: '';
  content: none;
}
hr {
  height: 0;
}
pre {
  overflow: auto;
}
:focus {
  outline: 0;
}
button,
datagrid,
input,
isindex,
keygen,
optgroup,
select,
textarea {
  line-height: 1;
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: 100%;
  color: inherit;
  letter-spacing: 0;
  word-spacing: 0;
}
input,
select {
  vertical-align: middle;
}
button,
html input[type='button'],
input[type='reset'],
input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}
button {
  overflow: visible;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: none;
}
button,
select {
  text-transform: none;
}
input[type='checkbox'],
input[type='radio'] {
  padding: 0;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  height: auto;
}
input[type='search'] {
  -webkit-appearance: textfield;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
textarea {
  overflow: auto;
  resize: vertical;
}
.shadow-cover:before,
.section-mixin,
.about_cover_front_pic,
.bottomnav,
.scroll-text:after,
.landing_left,
.landing_right,
.embed_media,
.btn-s-prev:before,
.btn-s-next:before {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.traffic_logo,
.landing_logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.landing_line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
html.edge .checkbox-agreement,
html.ie .checkbox-agreement,
.modal,
.slideshow_ctrl,
.traffic_item,
.traffic_pos,
.catalog_container,
.menupop_inner,
.menupop,
.menu_social_list,
.menu_line,
.checkbox-agreement,
input[type='checkbox']:checked + .checkbox-agreement {
  display: flex;
  align-items: center;
  justify-content: center;
}
.shadow-cover:before,
.shadow-cover:after,
.traffic_bg:before,
.catalog_page:after,
.catalog_cover:after,
.expended_pic:before,
.expended:before,
.scroll-text:after,
.opacity-b:after,
.checkbox_inner:after,
.btn-s-prev:before,
.btn-s-next:before,
.btn-gold span:nth-child(1):before,
.btn-gold:before {
  content: '';
  display: block;
  position: relative;
}
.traffic_time,
.catalog_entitle,
.sidenav_title,
.menu_social_title,
.scroll-text,
.btn-slide-ctrl {
  font-family: Didot, 'Didot LT STD', 'Times New Roman', serif;
  font-style: italic;
  color: #fff;
}
.content-wrapper {
  position: relative;
  max-width: 1440px;
  margin: auto;
  overflow: hidden;
}
.header {
  max-width: 1440px;
  margin: auto;
}
.header_inner {
  position: relative;
  max-width: 1480px;
  padding: 0 20px;
  margin: auto;
}
.footer {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 7px 20px;
  font-size: 0.75rem;
}
@media (min-width: 576px) {
  .footer {
    font-size: 1rem;
  }
}
@media (min-width: 768px) {
  .footer {
    font-size: 1.125rem;
    padding: 1rem 20px;
  }
}
.btn {
  cursor: pointer;
  user-select: none;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  border: 0px solid transparent;
  outline: 0;
}
.btn-gold {
  position: relative;
  font-size: 20px;
  letter-spacing: 6px;
  text-align: center;
  color: #4d3c09;
  font-weight: 600;
  padding: 3px;
  overflow: hidden;
  text-shadow: 2px 0 2px #fff;
  background: #b7a67f;
  background: linear-gradient(193deg, #b7a67f 20%, #eee8cf 51%, #b7a67f 80%);
}
@media (min-width: 768px) {
  .btn-gold {
    font-size: 22px;
    letter-spacing: 3.96px;
  }
}
.btn-gold:before {
  position: absolute;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background: #b7a67f;
  background: linear-gradient(305deg, #b7a67f 20%, #eee8cf 51%, #b7a67f 80%);
}
.btn-gold span:nth-child(1) {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
  background: #b7a67f;
  background: linear-gradient(193deg, #8b7447 20%, #eee8cf 51%, #8b7447 80%);
}
.btn-gold span:nth-child(1):before {
  position: absolute;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background: #b7a67f;
  background: linear-gradient(305deg, #8b7447 20%, #eee8cf 51%, #8b7447 80%);
}
.btn-gold .btn-txt {
  position: relative;
  z-index: 3;
  display: block;
  padding: 8px 22px;
}
.btn-gold.active span:nth-child(1),
.btn-gold:hover span:nth-child(1) {
  opacity: 1;
}
.btn-gold.reverse {
  background: #b7a67f;
  background: linear-gradient(103deg, #b7a67f 20%, #eee8cf 51%, #b7a67f 80%);
}
.btn-gold.reverse:before {
  background: #b7a67f;
  background: linear-gradient(220deg, #b7a67f 20%, #eee8cf 51%, #b7a67f 80%);
}
.btn-gold.reverse span:nth-child(1) {
  background: #b7a67f;
  background: linear-gradient(103deg, #8b7447 20%, #eee8cf 51%, #8b7447 80%);
}
.btn-gold.reverse span:nth-child(1):before {
  background: #b7a67f;
  background: linear-gradient(45deg, #8b7447 20%, #eee8cf 51%, #8b7447 80%);
}
.btn-gold:disabled {
  pointer-events: none;
}
.btn-slide-ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.25;
  border: 0;
  background: transparent;
}
.btn-s-prev:before,
.btn-s-next:before {
  width: 8px;
  height: 16px;
}
.btn-s-prev:before {
  margin-right: 20px;
}
.btn-s-next:before {
  order: 1;
  margin-left: 20px;
}
input[type='checkbox']:checked + .checkbox-agreement {
  overflow: hidden;
  background: #b8a57e;
}
input[type='checkbox']:checked + .checkbox .checkbox_inner {
  background: #fff;
  padding: 3px;
}
.checkbox {
  position: relative;
  border-radius: 50%;
  padding: 2px;
}
.checkbox-agreement {
  width: 16px;
  height: 16px;
  overflow: hidden;
  background: #b8a57e;
  margin: 5px;
  margin-left: 0;
}
.checkbox_inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transition: padding 0.25s ease, background 0.25s ease;
  padding: 6px;
}
.checkbox_inner:after {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #b8a57e;
  transition: background 0.25s ease;
}
.checkbox-hide {
  display: none;
}
.slideshow_item:before,
.slideshow_item,
.embed:before,
.embed {
  display: block;
  position: relative;
  width: 100%;
}
.embed {
  overflow: hidden;
  padding: 0;
}
.embed:before {
  content: '';
  z-index: 1;
  padding-top: 62.5%;
}
.embed_media {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  border: 0;
}
.embed_img {
  display: none;
}
.embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  border: 0;
}
::placeholder {
  color: #a2a2a2;
  opacity: 1;
}
:-ms-input-placeholder {
  color: #a2a2a2;
}
::-ms-input-placeholder {
  color: #a2a2a2;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select::-ms-expand {
  display: none;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background: #000;
}
.loading_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 80px;
  height: 80px;
}
.loading_icon div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.loading_icon div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.loading_icon div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.loading_icon div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.loading_icon div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.loading_icon div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.loading_icon div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.loading_icon div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.loading_icon div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.loading_icon div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.loading_icon div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.loading_icon div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.loading_icon div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@keyframes lds-default {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
html,
body {
  height: 100%;
  font-family: 'Noto Serif JP', '微軟正黑體', serif;
  font-style: normal;
}
html.stop-scroll,
body.stop-scroll {
  overflow: hidden;
}
body {
  position: relative;
  opacity: 1;
  color: #fff;
  background: #000;
}
[v-cloak] {
  display: none;
}
.clearfix:after {
  content: ' ';
  display: table;
  clear: both;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.loading-enter-active,
.loading-leave-active {
  transition: opacity 1s;
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}
.flag {
  position: absolute;
}
.flag-1 {
  max-width: 37px;
  width: 9.8666666667%;
}
@media (min-width: 768px) {
  .flag-1 {
    max-width: 98px;
    width: 5.1041666667%;
  }
}
.flag-2 {
  max-width: 43px;
  width: 11.4666666667%;
}
@media (min-width: 768px) {
  .flag-2 {
    max-width: 112px;
    width: 5.8333333333%;
  }
}
@media screen and (max-height: 800px) and (min-width: 992px) and (max-width: 1199px) {
  .flag-1 {
    max-width: 49px;
  }
  .flag-2 {
    max-width: 46px;
  }
}
.ball {
  position: absolute;
}
.opacity-b {
  position: relative;
  width: 100%;
}
.opacity-b:after {
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 50px;
}
.opacity-b-red:after {
  background: #fff;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cb191d);
}
.opacity-b-black:after {
  background: #fff;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, black);
}
.opacity-b-black-red:after {
  background-position: center top;
  background-size: auto 72px;
  background-repeat: repeat-x;
  bottom: -5px;
}
.landing {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;
  pointer-events: all;
}
.landing_left,
.landing_right {
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 50vw;
  transition-delay: 1s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.landing_left {
  left: 0;
  transition-property: left;
  transition-duration: 1s;
}
.landing_right {
  right: 0;
  transition-property: right;
  transition-duration: 1s;
}
.landing_line {
  position: absolute;
  height: 100%;
  width: 4px;
  top: 0;
  z-index: 2;
  background: #ba9527;
  transform: translateY(-100%);
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-delay: 1s;
}
.landing_logo {
  position: absolute;
  z-index: 3;
  width: 100%;
  max-width: 200px;
  transition-property: opacity;
  transition-duration: 1s;
  transition-delay: 1s;
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .landing_logo {
    max-width: 220px;
  }
}
@media (min-width: 768px) {
  .landing_logo {
    max-width: 308px;
  }
}
.landing.off {
  z-index: -1;
  pointer-events: none;
  opacity: 0;
}
.landing.active .landing_left {
  left: -100%;
}
.landing.active .landing_right {
  right: -100%;
}
.landing.active .landing_line {
  opacity: 0;
  animation: 1s landing-slice cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
.landing.active .landing_logo {
  opacity: 0;
}
@keyframes landing-slice {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
.scroll-down {
  position: absolute;
  display: block;
  z-index: 2;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .scroll-down {
    bottom: 20px;
  }
}
.scroll-text {
  font-size: 20px;
  margin-bottom: 5px;
}
.scroll-text:after {
  width: 16px;
  height: 8px;
  margin: 5px auto 0;
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .scroll-text {
    font-size: 16px;
  }
}
.expended {
  position: relative;
  transition-property: height;
  transition-duration: 0.3s;
}
.expended:before {
  padding-top: 112.3745819398%;
}
.expended_pic {
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  z-index: 2;
  overflow: hidden;
  transition-property: height;
  transition-duration: 0.9s;
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.expended_pic:before {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  transition-property: all;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition-delay: 0.4s;
}
.reverse .expended_pic {
  top: auto;
  left: 0;
  bottom: 0;
}
.js-on.animated .expended_pic {
  height: 100%;
}
.js-on.animated .expended_pic:before {
  transform: translateY(100%);
}
.js-on.animated .expended.reverse .expended_pic:before {
  transform: translateY(-100%);
}
.text-justify {
  text-align: justify;
}
.menu {
  flex: 1 0 50%;
  margin-bottom: 1rem;
  text-align: center;
}
@media (min-width: 768px) {
  .menu {
    margin-bottom: 0rem;
    padding-left: 55px;
    text-align: left;
  }
}
.menu_switch {
  cursor: pointer;
  position: fixed;
  z-index: 1002;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 768px) {
  .menu_switch {
    top: 45px;
    right: 45px;
    width: 35px;
    height: 40px;
  }
}
.menu_switch_inner {
  position: relative;
  width: 20px;
  height: 17px;
}
@media (min-width: 768px) {
  .menu_switch_inner {
    width: 35px;
    height: 30px;
  }
}
.menu_switch.active .menu_line_item {
  pointer-events: none;
}
.menu_switch.active .menu_line_item:nth-child(1) {
  background: #fff;
  width: 0;
  transition: width 0.5s, background 0.3s;
}
.menu_switch.active .menu_line_item:nth-child(2),
.menu_switch.active .menu_line_item:nth-child(3) {
  opacity: 0;
  transition: opacity 0.2s;
}
.menu_switch.active .menu_line_item:nth-child(3) {
  transition-delay: 0.1s;
}
.menu_switch.active .menu_circle {
  pointer-events: all;
  opacity: 1;
  transition: opacity 0.3s;
}
.menu_switch.active .menu_circle_path {
  stroke: #fff;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s;
}
.menu_list {
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.7s 0.5s;
}
@media (min-width: 768px) {
  .menu_list {
    margin-bottom: 42px;
  }
}
.menu_item {
  font-size: 20px;
  letter-spacing: 2px;
}
.menu .btn-gold {
  opacity: 0;
  font-size: 16px;
  letter-spacing: 6px;
  transition: 0.7s opacity 0.9s;
  margin-bottom: 40px;
}
.menu .btn-gold span {
  padding: 6px 24px;
}
@media (min-width: 768px) {
  .menu .btn-gold span {
    padding: 4px 28px;
  }
}
@media (min-width: 768px) {
  .menu .btn-gold {
    font-size: 20px;
    margin-bottom: 0px;
  }
}
.menu_link {
  padding: 1rem 0;
  display: flex;
  align-items: flex-end;
  line-height: 1;
  justify-content: flex-start;
  transition: color 0.5s;
  color: #fff;
  cursor: pointer;
}
@media (min-width: 768px) {
  .menu_link {
    padding: 20px 0;
  }
}
.menu_link:hover {
  color: #646464;
}
.menu_count {
  display: inline-block;
  margin-right: 22px;
  letter-spacing: initial;
  font-size: 18px;
  font-style: italic;
  font-family: 'GFS Didot', serif;
}
.menu_line {
  position: relative;
  width: 100%;
  height: 100%;
}
.menu_line_item {
  position: absolute;
  display: block;
  height: 1px;
  background: #fff;
  pointer-events: all;
}
@media (min-width: 768px) {
  .menu_line_item {
    height: 3px;
  }
}
.menu_line_item:nth-child(1) {
  width: 100%;
  top: 0;
  right: 0;
  transition: width 0.5s, background 0.2s;
}
.menu_line_item:nth-child(2) {
  width: 60%;
  top: calc(50% - 0.5px);
  left: 0;
  transition: 0.3s opacity 0.6s;
}
@media (min-width: 768px) {
  .menu_line_item:nth-child(2) {
    top: calc(50% - 1.5px);
  }
}
.menu_line_item:nth-child(3) {
  width: 100%;
  left: 0;
  bottom: 0;
  transition: 0.3s opacity 0.5s;
}
.menu_svg {
  position: absolute;
  top: 0px;
  transform: rotate(-90deg);
  right: -1px;
  width: 13px;
  height: 13px;
}
@media (min-width: 768px) {
  .menu_svg {
    right: -15px;
    width: 30px;
    height: 30px;
  }
}
.menu_svg.max {
  display: none;
}
@media (min-width: 768px) {
  .menu_svg.max {
    display: block;
  }
}
.menu_svg.min {
  display: block;
}
@media (min-width: 768px) {
  .menu_svg.min {
    display: none;
  }
}
.menu_circle {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.menu_circle_path {
  stroke: #fff;
  stroke-dasharray: 94.245;
  stroke-dashoffset: 94.245;
  transition: stroke-dashoffset 1.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s;
  stroke-width: 1px;
}
@media (min-width: 768px) {
  .menu_circle_path {
    stroke-width: 3px;
  }
}
.menu_social {
  display: block;
  opacity: 0;
  width: 174px;
  margin: auto;
  text-align: center;
  transition: 0.7s opacity 0.9s;
}
.menu_social_title {
  font-size: 18px;
  letter-spacing: 1.8px;
  margin-bottom: 30px;
}
.menu_social_list {
  justify-content: space-between;
}
.sidenav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 120px;
  height: 100%;
  display: none;
  background-image: url("~@/assets/img/contact_mb-bg.png");
}
@media (min-width: 992px) {
  .sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .sidenav {
    justify-content: flex-start;
    padding-top: 140px;
  }
}
.sidenav_title {
  position: relative;
  font-size: 14px;
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0 10px;
}
@media (min-width: 768px) {
  .sidenav_title {
    text-align: left;
    white-space: nowrap;
    transform: rotate(90deg);
    font-size: 20px;
    line-height: 1.2;
    margin: 0 0 95px;
  }
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .sidenav_title {
    font-size: 12px;
    margin: 0 0 50px;
  }
}
.sidenav_line {
  width: 1px;
  height: 120px;
  background: #fff;
  margin-bottom: 35px;
}
@media screen and (max-height: 890px) and (min-width: 992px) {
  .sidenav_line {
    height: 60px;
    margin-bottom: 15px;
  }
}
.social {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
@media (min-width: 768px) {
  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .social {
    margin-bottom: 5px;
  }
}
@media (min-width: 768px) {
  .social_item {
    margin-bottom: 22px;
  }
}
@media screen and (min-height: 0px) and (max-height: 550px) and (min-width: 992px) {
  .social_item {
    margin-bottom: 15px;
  }
}
@media screen and (min-height: 551px) and (max-height: 800px) and (min-width: 992px) {
  .social_item {
    margin-bottom: 15px;
  }
  .social_item img {
    width: 80%;
  }
}
.reservation {
  display: block;
  width: 50px;
  font-size: 20px;
  line-height: 1.5;
  cursor: pointer;
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .reservation {
    font-size: 16px;
    width: 40px;
  }
}
.reservation.btn-gold {
  padding: 24px 0;
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .reservation.btn-gold {
    padding: 14px 0;
  }
}
.reservation.btn-gold span:nth-child(2) {
  padding: 0;
  width: 20px;
  margin: auto;
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .reservation.btn-gold span:nth-child(2) {
    width: 16px;
  }
}
.menupop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: 0.36s ease;
  visibility: visible;
}
.menupop-menu {
  background: #000;
}
@media (min-width: 768px) {
  .menupop-menu {
    padding-left: 5.2083333333%;
  }
}
.menupop_inner {
  max-width: 1100px;
  width: 100%;
  flex-direction: column;
}
@media (min-width: 768px) {
  .menupop_inner {
    flex-direction: row;
  }
}
.menupop_line {
  flex: 1 0 1px;
  background: #fff;
  max-height: 771px;
  height: 70.5vh;
  display: none;
}
@media (min-width: 768px) {
  .menupop_line {
    background-position: top right;
    display: block;
  }
}
.menupop_banner {
  width: 223px;
  margin: auto;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.7s all 0.2s;
}
.menupop_cover {
  position: relative;
  flex: 1 0 50%;
  display: none;
}
@media (min-width: 768px) {
  .menupop_cover {
    background-position: top right;
    display: block;
  }
}
.menupop .menu .menu_social {
  display: block;
}
@media (min-width: 768px) {
  .menupop .menu .menu_social {
    display: none;
  }
}
.menupop .menu .menu_social_title {
  margin-bottom: 18px;
}
@media (min-width: 768px) {
  .menupop .menu .menu_social_title {
    margin-bottom: 0px;
  }
}
.menupop_logo {
  margin-bottom: 50px;
}
.menupop.on {
  z-index: 1001;
  pointer-events: auto;
  opacity: 1;
}
.menupop.on .menu_list {
  opacity: 1;
  transform: translateY(0px);
}
.menupop.on .menupop_banner {
  opacity: 1;
  transform: translateY(0px);
}
.menupop.on .menu_social,
.menupop.on .btn-reservation {
  opacity: 1;
}
.bottomnav {
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 77px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.bottomnav.on {
  opacity: 1;
  pointer-events: all;
  z-index: 1000;
}
@media (min-width: 768px) {
  .bottomnav {
    display: none;
  }
}
.bottomnav_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.bottomnav_item {
  width: 25%;
  flex: 1 0 25%;
  height: 100%;
}
.bottomnav_link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #e3bc4d;
}
.bottomnav_link span {
  display: block;
  margin-top: 5px;
}
.kv {
  position: relative;
  z-index: 3;
  height: 100%;
  width: 100%;
  background-color: #cb191d;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 1080px;
}
.kv.opacity-b:after {
  height: 22px;
}
.kv_banner {
  position: absolute;
  top: 22.4887556222%;
  left: 50%;
  transform: translateX(-50%);
  width: 56.8%;
  z-index: 2;
  opacity: 0;
  transition: 0.7s opacity;
}
@media (min-width: 768px) {
  .kv_banner {
    max-width: 300px;
  }
}
@media (min-width: 1200px) {
  .kv_banner {
    max-width: 423px;
  }
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .kv_banner {
    max-width: 212px;
    top: 22.2222222222%;
  }
}
.kv_logo {
  position: relative;
  z-index: 1;
  margin-bottom: 13px;
}
.kv_decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.kv .ball {
  z-index: 1;
  transition-property: all;
  transition-duration: 0.7s;
}
.kv .ball-1 {
  width: 214px;
  bottom: -100%;
  left: -100%;
  z-index: 2;
}
@media (min-width: 768px) {
  .kv .ball-1 {
    max-width: 571px;
    width: 29.7395833333%;
  }
}
.kv .ball-2 {
  width: 160px;
  top: -100%;
  left: -100%;
}
@media (min-width: 1440px) {
  .kv .ball-2 {
    max-width: 321px;
    width: 16.71875%;
  }
}
.kv .ball-3 {
  width: 192px;
  top: -100%;
  right: -100%;
}
@media (min-width: 768px) {
  .kv .ball-3 {
    max-width: 571px;
    width: 29.7395833333%;
  }
}
.kv .ball-4 {
  width: 32.8638497653%;
  top: -10.6666666667%;
  left: -16.4319248826%;
  opacity: 0;
}
@media (min-width: 768px) {
  .kv .ball-4 {
    max-width: 185px;
  }
}
.kv .ball-5 {
  width: 150px;
  right: -100%;
  bottom: -100%;
}
@media (min-width: 768px) {
  .kv .ball-5 {
    max-width: 389px;
    width: 20.2604166667%;
  }
}
.kv .ball-1,
.kv .ball-3 {
  transition-delay: 0.49s;
}
.kv .ball-4 {
  transition-delay: 0.9s;
}
.kv .ball-2,
.kv .ball-5 {
  transition-delay: 0.21s;
}
.kv .ring {
  position: absolute;
  z-index: 2;
  width: 57.476635514%;
  top: -59.3457943925%;
  right: 7.476635514%;
}
@media (min-width: 768px) {
  .kv .ring {
    width: 57.6182136602%;
    top: -56.7425569177%;
    right: 1.9264448336%;
  }
}
.kv .perfume {
  position: absolute;
  z-index: 2;
}
.kv .perfume-1 {
  width: 88%;
  right: 18%;
  top: -73.3333333333%;
}
@media (min-width: 768px) {
  .kv .perfume-1 {
    width: 117.9948586118%;
    right: 2.5706940874%;
    top: -104.1131105398%;
  }
}
.kv .perfume-2 {
  width: 13.8666666667%;
  bottom: 13.1934032984%;
  left: 30.6666666667%;
}
@media screen and (max-height: 800px) and (min-width: 992px) and (max-width: 1199px) {
  .kv .perfume-2 {
    max-width: 120px;
  }
}
@media (min-width: 768px) {
  .kv .perfume-2 {
    width: 12.5%;
    bottom: 7.037037037%;
    left: 23.75%;
  }
}
.kv .flag {
  z-index: 2;
}
.kv .flag-1 {
  top: 44.0779610195%;
  left: 5.8666666667%;
}
@media (min-width: 768px) {
  .kv .flag-1 {
    top: 31.5740740741%;
    left: 20.9375%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .kv .flag-1 {
    left: 15%;
  }
}
.kv .flag-2 {
  top: 27.5862068966%;
  right: 5.8666666667%;
}
@media (min-width: 768px) {
  .kv .flag-2 {
    top: 37.962962963%;
    right: 25.3125%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .kv .flag-2 {
    right: 15%;
  }
}
.kv .ring,
.kv .perfume,
.kv .flag-1,
.kv .flag-2 {
  opacity: 0;
  transition-property: all;
  transition-duration: 0.7s;
  transition-delay: 1.2s;
}
.section-kv.animated .kv_banner {
  opacity: 1;
}
.section-kv.animated .ball {
  z-index: 1;
}
.section-kv.animated .ball-2 {
  top: -80px;
  left: -74px;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-2 {
    top: -5.2777777778%;
    left: -2.3958333333%;
  }
}
.section-kv.animated .ball-5 {
  bottom: -46px;
  right: -43px;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-5 {
    bottom: -11.4814814815%;
    right: 4.375%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-kv.animated .ball-5 {
    bottom: -5%;
  }
}
.section-kv.animated .ball-1 {
  bottom: -42px;
  left: -116px;
  z-index: 2;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-1 {
    bottom: -14.4444444444%;
    left: -8.90625%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-kv.animated .ball-1 {
    bottom: -5%;
  }
}
.section-kv.animated .ball-3 {
  top: -57px;
  right: -56px;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-3 {
    top: -13.5185185185%;
    right: -4.1145833333%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-kv.animated .ball-3 {
    top: -5%;
    right: -4%;
  }
}
.section-kv.animated .ball-4 {
  opacity: 1;
}
.section-kv.animated .ring,
.section-kv.animated .perfume,
.section-kv.animated .flag-1,
.section-kv.animated .flag-2 {
  opacity: 1;
}
.catalog {
  position: relative;
  padding: 120px 0 90px;
}
@media (min-width: 768px) {
  .catalog {
    padding: 180px 0 92px;
  }
}
.catalog_container {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 267px;
  margin: auto;
  align-items: flex-start;
  flex-wrap: wrap;
}
@media (min-width: 768px) {
  .catalog_container {
    opacity: 1;
    position: relative;
    top: auto;
    left: auto;
    padding: 0 12px;
    max-width: 972px;
    flex-wrap: nowrap;
  }
}
.catalog_content {
  opacity: 0;
  transform: translateY(-30px);
  transition-property: all;
  transition-duration: 0.7s;
  transition-delay: 0.3s;
}
.catalog_item {
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s;
  position: relative;
}
.catalog_item:nth-child(1),
.catalog_item:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.catalog_item.active {
  opacity: 1;
}
@media (min-width: 768px) {
  .catalog_item {
    opacity: 1;
    width: 33.3333%;
    top: auto;
    left: auto;
    padding: 0 12px;
  }
  .catalog_item:nth-child(1),
  .catalog_item:nth-child(2) {
    position: relative;
    width: 33.3333%;
  }
}
.catalog_item:hover .catalog_cover:after {
  background: #c9171b;
}
.catalog_item:nth-child(1) .catalog_pic,
.catalog_item:nth-child(1) .catalog_cover {
  transition-delay: 0.5s;
}
.catalog_item:nth-child(1) .catalog_content {
  transition-delay: 0.7s;
}
.catalog_item:nth-child(1) .catalog_pic:before {
  transition-delay: 0.9s;
}
.catalog_item:nth-child(2) .catalog_pic,
.catalog_item:nth-child(2) .catalog_cover {
  transition-delay: 1s;
}
.catalog_item:nth-child(2) .catalog_content {
  transition-delay: 1.2s;
}
.catalog_item:nth-child(2) .catalog_pic:before {
  transition-delay: 1.4s;
}
.catalog_item:nth-child(3) .catalog_pic,
.catalog_item:nth-child(3) .catalog_cover {
  transition-delay: 1.5s;
}
.catalog_item:nth-child(3) .catalog_content {
  transition-delay: 1.7s;
}
.catalog_item:nth-child(3) .catalog_pic:before {
  transition-delay: 1.9s;
}
.catalog_cover {
  margin-bottom: 37px;
  position: relative;
}
.catalog_cover:before {
  padding-top: 112.3745819398%;
}
.catalog_cover:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  background: transparent;
  opacity: 0.3;
  transition-property: background;
  transition-duration: 0.5s;
}
@media (min-width: 768px) {
  .catalog_cover {
    margin-bottom: 36px;
  }
}
.catalog_title {
  font-size: 27px;
  font-weight: 600;
  letter-spacing: 4.64px;
  margin-bottom: 9px;
}
@media (min-width: 768px) {
  .catalog_title {
    font-size: 26px;
    letter-spacing: 5.5px;
  }
}
@media (min-width: 992px) {
  .catalog_title {
    font-size: 32px;
    letter-spacing: 5.5px;
  }
}
.catalog_entitle {
  font-size: 20px;
  letter-spacing: 2px;
}
@media (min-width: 768px) {
  .catalog_entitle {
    font-size: 23px;
  }
}
.catalog_info {
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 1.8px;
  padding-right: 7px;
}
.catalog_pager {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  margin-left: 5px;
}
@media (min-width: 768px) {
  .catalog_pager {
    display: none;
  }
}
.catalog_page {
  cursor: pointer;
  display: block;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: solid 1px #ba9527;
  margin-right: 16px;
}
.catalog_page:after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  transform: translate(-50%, -50%);
  transition-property: width, height;
  transition-duration: 0.12s;
  border-radius: 14px;
  opacity: 0;
  background-image: linear-gradient(
    to bottom,
    #e3bc4d 1%,
    #f8f4c5 25%,
    #f1e9b3 44%,
    #decd87 81%,
    #dcc980 87%,
    #f8f4c5
  );
}
.catalog_page.active:after {
  opacity: 1;
  width: 14px;
  height: 14px;
}
.catalog_pic {
  background-size: 100%;
  background-position: center 0%;
}
.catalog_img {
  display: none;
}
.catalog_decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.catalog .flag {
  z-index: 2;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.7s;
  transition-delay: 0.3s;
}
.catalog .flag-1 {
  top: 102.9985007496%;
  right: 20.2666666667%;
}
@media (min-width: 768px) {
  .catalog .flag-1 {
    top: 50.9259259259%;
    right: 4.6875%;
  }
}
.catalog .flag-2 {
  top: 49.7751124438%;
  left: 9.8666666667%;
}
@media (min-width: 768px) {
  .catalog .flag-2 {
    top: 30.7407407407%;
    left: 12.2395833333%;
  }
}
.catalog .bulid {
  position: absolute;
  width: 130px;
  right: -92px;
  bottom: 0;
}
@media (min-width: 768px) {
  .catalog .bulid {
    width: 148px;
    right: -135px;
  }
}
@media (min-width: 992px) {
  .catalog .bulid {
    width: 148px;
    right: -10%;
  }
}
@media (min-width: 1200px) {
  .catalog .bulid {
    right: 1%;
  }
}
@media (min-width: 1440px) {
  .catalog .bulid {
    right: 4%;
  }
}
@media (min-width: 1920px) {
  .catalog .bulid {
    right: 12.2395833333%;
  }
}
.catalog .ball-6 {
  max-width: 129px;
  width: 34.4%;
  left: -85px;
  top: 65.6671664168%;
}
@media (min-width: 768px) {
  .catalog .ball-6 {
    top: auto;
    max-width: none;
    left: -110px;
    bottom: 13.6111111111%;
  }
}
@media (min-width: 992px) {
  .catalog .ball-6 {
    left: -8%;
    width: 197px;
  }
}
@media (min-width: 1200px) {
  .catalog .ball-6 {
    left: 0%;
  }
}
@media (min-width: 1440px) {
  .catalog .ball-6 {
    left: 5%;
  }
}
@media (min-width: 1920px) {
  .catalog .ball-6 {
    left: 12.2395833333%;
  }
}
.catalog.animated .flag {
  opacity: 1;
}
.catalog.animated .catalog_content {
  opacity: 1;
  transform: translateY(0);
}
.catalog.animated .catalog_item:hover .catalog_cover:after {
  background: #c9171b;
}
.traffic {
  background: #cb191d;
}
.traffic_bg {
  position: relative;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 768px) {
  .traffic_bg {
    background-size: 150%;
  }
}
@media (min-width: 1440px) {
  .traffic_bg {
    background-size: cover;
  }
}
.traffic_bg:before {
  padding-top: 86.2068965517%;
}
@media (min-width: 768px) {
  .traffic_bg:before {
    padding-top: 39.0625%;
  }
}
@media (min-width: 1440px) {
  .traffic_bg:before {
    padding-top: 28.6458333333%;
  }
}
.traffic_logo {
  max-width: 192px;
  width: 51.2%;
}
@media (min-width: 768px) {
  .traffic_logo {
    max-width: 278px;
    width: 14.4791666667%;
  }
}
.traffic_content {
  background: #cb191d;
  padding: 50px 0 70px;
  width: 100%;
  max-width: 374px;
  margin: auto;
  padding-left: 18px;
  padding-right: 18px;
}
@media (min-width: 768px) {
  .traffic_content {
    max-width: 884px;
    padding: 74px 30px 128px;
  }
}
.traffic_title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 6.19px;
  margin-bottom: 9px;
}
@media (min-width: 768px) {
  .traffic_title {
    margin-bottom: 14px;
  }
}
.traffic_info {
  text-align: center;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 1.8px;
  margin-bottom: 36px;
}
@media (min-width: 768px) {
  .traffic_info {
    margin-bottom: 56px;
  }
}
.traffic_head,
.traffic_pos {
  opacity: 0;
  transform: translateY(30px);
  transition-property: all;
  transition-duration: 0.5s;
}
.traffic_pos {
  flex-wrap: wrap;
  justify-content: center;
  transition-delay: 0.3s;
}
@media (min-width: 1200px) {
  .traffic_pos {
    justify-content: space-around;
  }
}
.traffic_item {
  padding: 19px 0;
}
@media (min-width: 768px) {
  .traffic_item {
    padding: 19px;
  }
}
@media (min-width: 1200px) {
  .traffic_item {
    padding: 19px 0;
  }
}
@media (min-width: 1200px) {
  .traffic_item:nth-child(4) {
    padding-left: 12.1359223301%;
  }
}
@media (min-width: 1200px) {
  .traffic_item:nth-child(5) {
    padding-right: 12.1359223301%;
  }
}
.traffic_time {
  font-size: 35px;
  letter-spacing: 3.5px;
  padding-right: 19px;
  margin-right: 19px;
  border-right: 1px solid #fff;
  flex: 0 0 auto;
}
.traffic_place {
  font-size: 18px;
  letter-spacing: 1.8px;
}
.traffic_place .small {
  display: block;
  font-size: 14px;
  letter-spacing: 1.4px;
}
.animated .traffic_head,
.animated .traffic_pos {
  opacity: 1;
  transform: translateY(0);
}
.mixin_head {
  text-align: center;
  margin-bottom: 28px;
  opacity: 0;
  transition: all 0.5s;
}
.mixin_ctrl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto 35px;
  max-width: 375px;
  opacity: 0;
  transition: all 0.5s;
}
.mixin_ctrl .btn {
  font-size: 14px;
  letter-spacing: 2.4px;
  width: calc(33.3333% - 4px);
  max-width: 108px;
  white-space: nowrap;
}
.mixin_ctrl .btn-txt {
  padding: 3px 3px;
}
@media (min-width: 768px) {
  .mixin_ctrl {
    display: block;
    margin-bottom: 98px;
    max-width: none;
  }
  .mixin_ctrl .btn {
    margin: 0 16px;
    width: auto;
    max-width: none;
    font-size: 22px;
    letter-spacing: 3.96px;
  }
  .mixin_ctrl .btn-txt {
    padding: 8px 22px;
  }
}
.mixin_content {
  max-width: 384px;
  margin: auto;
  width: 100%;
  opacity: 0;
  transition: 0.5s opacity;
}
.mixin_content.active {
  opacity: 1;
}
.mixin_content:nth-child(2),
.mixin_content:nth-child(3) {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.mixin_title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 6.19px;
  margin-bottom: 19px;
}
.mixin_info {
  text-align: center;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 1.8px;
}
.mixin_img {
  display: none;
  margin: auto;
}
@media (min-width: 768px) {
  .mixin_img {
    display: block;
  }
}
.mixin_img_sm {
  display: block;
  margin: auto;
}
@media (min-width: 768px) {
  .mixin_img_sm {
    display: none;
  }
}
.section-mixin.animated .mixin_head,
.section-mixin.animated .mixin_ctrl {
  opacity: 1;
}
.section-mixin.animated .slideshow_info {
  opacity: 1;
  transform: translateY(0);
}
.about {
  position: relative;
  width: 100%;
  padding: 100px 0;
  background-color: #000;
}
.about_inner {
  margin: auto;
  max-width: 1060px;
}
@media (min-width: 768px) {
  .about_inner {
    padding: 0 30px;
  }
}
@media (min-width: 768px) {
  .about_inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 1200px) {
  .about_inner {
    max-width: 1628px;
  }
}
.about_entitle {
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 4px;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans';
}
@media (min-width: 576px) {
  .about_entitle {
    font-size: 26px;
  }
}
@media (min-width: 768px) {
  .about_entitle {
    letter-spacing: 5.2px;
    font-size: 44px;
  }
}
@media (min-width: 1200px) {
  .about_entitle {
    font-size: 36px;
  }
}
@media (min-width: 1920px) {
  .about_entitle {
    font-size: 52px;
  }
}
.about_title {
  display: block;
  letter-spacing: 2.6px;
  margin-bottom: 1rem;
  position: relative;
  width: 29.7427652733%;
}
.about_title_img {
  position: relative;
  z-index: 2;
}
.about_title .ball {
  position: absolute;
  z-index: 1;
  top: -27.0833333333%;
  right: -26.7716535433%;
  width: 55.905511811%;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s all 0.6s;
}
.about_cover .about_title {
  display: block;
  position: absolute;
  top: 20.243902439%;
  right: 14.4%;
  z-index: 2;
  width: 33.8666666667%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s 0.4s;
}
@media (min-width: 768px) {
  .about_cover .about_title {
    display: none;
  }
}
.about_content .about_title {
  display: none;
}
@media (min-width: 768px) {
  .about_content .about_title {
    display: block;
  }
}
@media (min-width: 768px) {
  .about_title {
    font-size: 44px;
    letter-spacing: 4.4px;
  }
  .about_title .ball {
    top: -22.380952381%;
    right: -47.027027027%;
    width: 67.5675675676%;
  }
}
.about_cover_front_pic {
  background-position: 138% 50%;
  width: 100%;
  height: 100%;
}
.about_cover_front_img,
.about_cover_shadow_img {
  top: 0;
  position: absolute;
}
.about_cover_front_img {
  display: none;
  left: 0px;
}
.about_cover_shadow_img {
  right: 0px;
}
.about_content {
  z-index: 2;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s 0.8s;
}
@media (min-width: 768px) {
  .about_content {
    order: 2;
    flex: 1 0 45%;
    max-width: 622px;
    padding: 60px 0 0;
    transition: all 0.5s;
  }
}
@media (min-width: 992px) {
  .about_content {
    padding-right: 60px;
  }
}
@media (min-width: 1200px) {
  .about_content {
    padding-right: 0px;
  }
}
.about_entitle {
  color: #b8a57e;
}
@media (min-width: 768px) {
  .about_entitle {
    font-size: 3.25rem;
  }
}
.about_info {
  font-size: 1.125rem;
  line-height: 1.5;
  letter-spacing: 1.8px;
  margin-bottom: 30px;
  padding: 0 20px;
}
@media (min-width: 375px) {
  .about_info {
    padding: 0 30px;
  }
}
@media (min-width: 768px) {
  .about_info {
    padding: 0;
  }
}
.about_cover {
  position: relative;
  z-index: 1;
  max-width: 906px;
  margin: 0;
  margin-bottom: 30px;
  flex: 1 0 55%;
}
@media (min-width: 768px) {
  .about_cover {
    margin-bottom: 0;
  }
}
.about_cover_front,
.about_cover_shadow {
  position: absolute;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.about_cover_front {
  z-index: 2;
  top: 0;
}
@media (min-width: 768px) {
  .about_cover_front_img {
    padding-right: 30px;
  }
}
.about_cover_shadow {
  z-index: 1;
  right: -80px;
  top: 20px;
  transition-duration: 0.7s;
  transition-property: width, right;
  transition-delay: 0.5s;
}
@media (min-width: 1200px) {
  .about_cover_shadow {
    top: 40px;
    right: -136px;
  }
}
.about_void {
  padding-top: 109.3333333333%;
}
@media (min-width: 768px) {
  .about_void {
    padding-top: 92.4944812362%;
  }
}
.about_dl {
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
  width: 100%;
  font-size: 16px;
  margin: auto;
}
@media (min-width: 768px) {
  .about_dl {
    margin: 0;
  }
}
.about_dt {
  flex: 1 0 5.625rem;
  width: 4.95rem;
  position: relative;
}
.about_dd {
  flex: 1 1 calc(100% - 5.625rem);
  width: calc(100% - 5.625rem);
}
.about.animated .about_content {
  opacity: 1;
  transform: translateY(0);
}
.about.animated .about_cover .about_title,
.about.animated .about_cover .ball {
  opacity: 1;
  transform: translateY(0);
}
.about.animated .about_content .ball {
  opacity: 1;
  transform: translateY(0);
}
.contact {
  position: relative;
  height: 100%;
  padding: 29.3333333333% 0px 350px;
  margin-bottom: 77px;
  overflow: hidden;
  background: #c5171b;
}
@media (min-width: 768px) {
  .contact {
    padding: 130px 30px 350px;
    margin-bottom: 0px;
  }
}
.contact .form {
  position: relative;
  z-index: 3;
  overflow-y: auto;
  height: 100%;
}
@media (min-width: 768px) {
  .contact .form {
    height: auto;
  }
}
@media (min-width: 576px) {
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
.contact_title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.61;
  letter-spacing: 6.19px;
  color: #fff;
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.7s;
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .contact_title {
    margin-bottom: 80px;
  }
}
.contact_decoration {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.contact .ball-1 {
  width: 254px;
  bottom: -74px;
  right: -174px;
}
@media (min-width: 768px) {
  .contact .ball-1 {
    width: 342px;
    bottom: -162px;
    right: -185px;
  }
}
@media (min-width: 1200px) {
  .contact .ball-1 {
    right: -2.7604166667%;
    bottom: -132px;
  }
}
@media (min-width: 1440px) {
  .contact .ball-1 {
    max-width: 513px;
    width: 26.71875%;
    bottom: -21.9026548673%;
  }
}
.contact .ball-2 {
  width: 114px;
  left: -62px;
  top: 476px;
  z-index: 2;
}
@media (min-width: 768px) {
  .contact .ball-2 {
    width: 119px;
    left: -67px;
  }
}
@media (min-width: 1200px) {
  .contact .ball-2 {
    left: 4.6354166667%;
  }
}
@media (min-width: 1200px) {
  .contact .ball-2 {
    top: auto;
    width: 9.3229166667%;
    bottom: 52.2123893805%;
  }
}
.contact .ball-3 {
  width: 230px;
  bottom: -74px;
  left: -125px;
}
@media (min-width: 768px) {
  .contact .ball-3 {
    width: 284px;
    bottom: -134px;
    left: -179px;
  }
}
@media (min-width: 1200px) {
  .contact .ball-3 {
    left: -3.6458333333%;
    bottom: -74px;
  }
}
@media (min-width: 1440px) {
  .contact .ball-3 {
    max-width: 497px;
    width: 25.8854166667%;
    bottom: -10.3982300885%;
  }
}
.contact .ball-4 {
  width: 147px;
  top: 48px;
  right: -74px;
}
@media (min-width: 768px) {
  .contact .ball-4 {
    width: 162px;
    right: -89px;
  }
}
@media (min-width: 1200px) {
  .contact .ball-4 {
    right: 2.7083333333%;
  }
}
@media (min-width: 1440px) {
  .contact .ball-4 {
    max-width: 243px;
    width: 12.65625%;
    top: 3.982300885%;
  }
}
.contact .flag-1 {
  max-width: none;
  width: 62px;
  top: 603px;
  right: -14px;
}
@media (min-width: 1200px) {
  .contact .flag-1 {
    right: 7.5%;
  }
}
@media (min-width: 1440px) {
  .contact .flag-1 {
    top: auto;
    bottom: 45.685840708%;
  }
}
.contact .flag-2 {
  max-width: none;
  width: 71px;
  top: 73px;
  left: -14px;
}
@media (min-width: 1200px) {
  .contact .flag-2 {
    left: 14.21875%;
  }
}
@media (min-width: 1440px) {
  .contact .flag-2 {
    top: auto;
    bottom: 71.3495575221%;
  }
}
.contact .slogan {
  position: absolute;
  z-index: 1;
  width: 46px;
  top: 132px;
  right: -15px;
}
@media (min-width: 768px) {
  .contact .slogan {
    right: -5px;
  }
}
@media (min-width: 1200px) {
  .contact .slogan {
    right: 18.0208333333%;
    top: 80px;
  }
}
@media (min-width: 1440px) {
  .contact .slogan {
    top: auto;
    width: 3.3854166667%;
    bottom: 250px;
  }
}
.contact_map {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 300px;
  max-width: 375px;
  padding: 0 30px;
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 0.7s 0.7s;
}
.contact_map iframe {
  width: 100%;
  height: 100%;
}
@media (min-width: 576px) {
  .contact_map {
    padding: 0 20px;
    max-width: none;
  }
}
@media (min-width: 768px) {
  .contact_map {
    padding: 0;
    width: calc(100% - 100px);
    max-width: 778px;
  }
}
.contact.animated .contact_title {
  opacity: 1;
  transform: translateY(0);
}
.contact.animated .contact_map {
  opacity: 1;
}
.contact.animated .form_wrap {
  opacity: 1;
}
.section {
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.section-kv {
  background-color: #cb191d;
}
.section-traffic {
  height: auto;
}
.section-mixin {
  height: auto;
  padding: 90px 17px 100px;
}
@media (min-width: 768px) {
  .section-mixin {
    padding: 136px 30px;
  }
}
.section-contact {
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: auto;
}
main {
  position: relative;
}
.shadow {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.shadow-cover:before,
.shadow-cover:after {
  pointer-events: none;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.shadow-cover:before {
  width: 100%;
}
.slideshow_inner {
  margin: auto;
}
@media (min-width: 768px) {
  .slideshow_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1091px;
  }
}
.slideshow_container {
  position: relative;
  width: 100%;
  max-width: 342px;
  margin: auto;
}
@media (min-width: 768px) {
  .slideshow_container {
    width: 57.9285059578%;
    max-width: 632px;
    flex: 1 0 400px;
    margin: 0 auto;
  }
}
.slideshow_item {
  overflow: hidden;
  padding: 0;
  opacity: 0;
  transition: 0.9s opacity;
}
.slideshow_item:not(:first-child) {
  position: absolute;
  top: 0;
  left: 0;
}
.slideshow_item:before {
  content: '';
  z-index: 1;
  padding-top: 71.2025316456%;
}
.slideshow_item.active {
  opacity: 1;
}
.slideshow_cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  border: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center 0;
}
.slideshow-hide {
  display: none;
}
.slideshow_content {
  position: relative;
  margin-bottom: 36px;
}
.slideshow_txt {
  text-align: center;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .slideshow_txt {
    margin-bottom: 40px;
  }
}
.slideshow_info {
  opacity: 0;
  transform: translateY(-30px);
  transition-property: all;
  transition-duration: 0.5s;
  transition-delay: 0.3s;
  flex: 1;
  padding-left: 3.2997250229%;
}
@media (min-width: 768px) {
  .slideshow_info {
    order: 2;
  }
}
@media (min-width: 1200px) {
  .slideshow_info {
    padding-left: 6.7827681027%;
  }
}
.slideshow_container .slideshow_pager {
  display: block;
  margin-top: 24px;
}
@media (min-width: 768px) {
  .slideshow_container .slideshow_pager {
    display: none;
  }
}
.slideshow_info .slideshow_pager {
  display: none;
}
@media (min-width: 768px) {
  .slideshow_info .slideshow_pager {
    display: block;
  }
}
.slideshow_line {
  width: 1px;
  height: 18px;
  background: #fff;
  margin: 0 48px;
}
.slideshow .expended {
  z-index: 3;
}
.slideshow .expended:before {
  padding-top: 71.2025316456%;
}
.slideshow .expended_pic {
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 100%;
}
.slideshow .expended_img {
  display: none;
}
.slideshow .expended.hide {
  opacity: 0;
  z-index: 1;
}
.form {
  position: relative;
  z-index: 2;
}
.form_grp {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  margin: 0 auto 26px;
}
@media (min-width: 768px) {
  .form_grp {
    max-width: 369px;
    width: 100%;
    margin: 0 auto 20px;
  }
}
.form_grp.no-bg {
  background: transparent;
  color: #fff;
}
.form_grp_btn {
  margin: 8px auto 0;
}
.form_wrap {
  max-width: 375px;
  padding: 0 30px;
  width: 100%;
  margin: auto;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.7s;
  transition-delay: 0.3s;
}
@media (min-width: 576px) {
  .form_wrap {
    width: 100%;
    max-width: 818px;
    padding: 0 0px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
@media (min-width: 576px) {
  .form .box\@md\:4 {
    padding: 0 20px;
    flex: 1 1 50%;
    max-width: 50%;
    width: 50%;
  }
}
@media (min-width: 576px) {
  .form .box\@md\:12 {
    padding: 0 35px;
    flex: 1 1 100%;
    max-width: 100%;
    width: 100%;
    margin: 30px 0 0;
  }
  .form .box\@md\:12 .form_grp {
    margin: 0 auto 20px;
    width: auto;
    max-width: none;
  }
}
@media screen and (max-height: 600px) and (min-width: 576px) {
  .form .box\@md\:12 {
    margin: 0;
  }
}
.form_ctrl {
  width: calc(100% - 92px);
}
@media (min-width: 768px) {
  .form_ctrl {
    width: calc(100% - 64px);
  }
}
.form .input {
  padding: 9px 10px;
  border: 0;
  width: 100%;
  height: 41px;
  font-size: 15px;
}
@media (min-width: 768px) {
  .form .input {
    height: 36px;
    padding: 9px 10px;
    font-size: 14px;
  }
}
.form_textarea {
  width: 100%;
}
.form_textarea .input {
  padding-right: 25px;
  padding-left: 25px;
  height: 240px;
  color: #000;
  border-radius: 0;
}
@media (min-width: 576px) {
  .form_textarea .input {
    height: 204px;
  }
}
.form select {
  background-repeat: no-repeat;
  background-position: 90% 50%;
  background-size: 10px 6px;
  background-color: #fff;
  color: #818181;
}
.form label.form_label {
  font-size: 17px;
  text-align: center;
  width: 80px;
  white-space: nowrap;
  border-right: 1px solid #ba9527;
  font-weight: 500;
  color: #80630d;
}
@media (min-width: 768px) {
  .form label.form_label {
    font-size: 16px;
  }
}
.form label[for='agreement'] {
  cursor: pointer;
}
.form .contact_agreement {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 0px;
}
@media (min-width: 768px) {
  .form .contact_agreement {
    margin-bottom: 20px;
    margin-top: 10px;
  }
}
.agreement_info {
  flex: 1;
  font-size: 15px;
  letter-spacing: 1.5px;
}
@media (min-width: 768px) {
  .agreement_info {
    letter-spacing: 2.56px;
    line-height: 1.63;
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1005;
  font-family: 'Noto Serif JP', '微軟正黑體', serif;
}
.modal_inner {
  position: relative;
  z-index: 2;
}
.modal_content {
  background: #fff;
}
.modal_info {
  color: #000;
}
.modal_btn.btn-confirm {
  border: 1px solid #b8a57e;
  color: #b8a57e;
  padding: 5px 10px;
}
.modal_overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
}
.modal-message .modal_ctrl {
  text-align: center;
  margin-top: 1rem;
}
.modal-message .modal_info {
  text-align: center;
}
.modal-message .modal_content {
  width: 300px;
  padding: 30px 40px;
}
.modal-agreement {
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: 0.36s ease;
}
.modal-agreement ::-webkit-scrollbar {
  position: relative;
  border-radius: 30px;
  width: 7px;
  height: 16px;
  background-color: transparent;
}
.modal-agreement ::-webkit-scrollbar-track {
  width: 3px;
  border-radius: 2.5px;
  background-color: #d2d2d2;
}
.modal-agreement ::-webkit-scrollbar-thumb {
  border-radius: 30px;
  width: 11px;
  background-color: #b8a57e;
}
.modal-agreement .modal_inner {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 811px;
  overflow: hidden;
  background: #fff;
  padding: 50px 23px 40px 30px;
}
@media (min-width: 576px) {
  .modal-agreement .modal_inner {
    padding-left: 40px;
    max-height: 600px;
  }
}
.modal-agreement .modal_content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 15px;
  background: transparent;
}
@media (min-width: 576px) {
  .modal-agreement .modal_content {
    padding-right: 30px;
  }
}
.modal-agreement .modal_scrollline {
  position: absolute;
  z-index: 1;
  width: 27px;
  top: 50px;
  right: 0px;
  bottom: 40px;
  z-index: 1;
  border-left: 2px solid #d2d2d2;
  z-index: 1;
}
.modal-agreement .modal_ctrl {
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  z-index: 1;
}
.modal-agreement .modal_svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}
.modal-agreement .modal_circle {
  width: 100%;
  height: 100%;
}
.modal-agreement .modal_circle_path {
  stroke: #b8a57e;
  stroke-dasharray: 94.245;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s;
  stroke-width: 2px;
}
.modal-agreement.on {
  z-index: 1005;
  pointer-events: auto;
  opacity: 1;
}
.modal-agreement.on .modal_circle_path {
  stroke: #b8a57e;
  stroke-dashoffset: 0;
  åtransition: stroke-dashoffset 1.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s;
}
.modal-agreement .agreement_title {
  font-size: 1.25rem;
  color: #000;
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.modal-agreement .agreement_info,
.modal-agreement .agreement_list {
  color: #646262;
  line-height: 1.6;
  letter-spacing: 1.5px;
}
.modal-agreement .agreement_list {
  margin-bottom: 1rem;
}
.modal-agreement .agreement_info {
  margin-bottom: 1rem;
}
.modal-agreement .agreement_list_item {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.modal-agreement .agreement_list_item:before {
  content: '・';
  width: 1rem;
  display: block;
  margin-right: 5px;
}
.agreement_link {
  font-weight: 700;
  cursor: pointer;
}
html#iphone.mobile.chrome .menupop,
html#iphone.mobile.chrome .modal_agreement {
  transition: 1s ease;
}
html#iphone.mobile.chrome .menu_line_item {
  transition: none;
}
html#iphone.mobile.chrome .menu_line_item:nth-child(1),
html#iphone.mobile.chrome .menu_line_item:nth-child(2) {
  transition: none;
}
html#iphone.mobile.chrome .menu_switch .menu_line {
  opacity: 1;
}
html#iphone.mobile.chrome .menu_switch .menu_svg {
  opacity: 0;
}
html#iphone.mobile.chrome .menu_switch.active .menu_line {
  opacity: 0;
}
html#iphone.mobile.chrome .menu_switch.active .menu_svg {
  opacity: 1;
}
@media screen and (max-width: 576px) {
  html.android.mobile .kv {
    height: 93vh;
  }
}
@media screen and (max-width: 576px) {
  html.xiaomi.mobile {
    height: 100vh;
  }
}
html.ie .form {
  width: 880px;
  max-width: 100%;
}
html.ie .agreement_info {
  flex: auto;
}
html.ie .kv_logo {
  max-height: 305px;
}
html.mobile .modal_scrollline,
html.ie .modal_scrollline,
html.firefox .modal_scrollline {
  display: none;
}
html.edge .checkbox-agreement,
html.ie .checkbox-agreement {
  width: 17px;
  height: 17px;
}
html.edge .menu_switch .menu_circle_path {
  transition: stroke-dashoffset 1.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s;
}
html.edge .menu_switch.active {
  transition: stroke-dashoffset 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s;
}
</style>
