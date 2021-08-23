<template>
  <div class="order-bg">
    <!-- <img src="@/projects/fs/order/bg.png" alt="" class="bg-img"> -->
    <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->

    <img
      v-if="!isMobile"
      class="bird"
      src="@/assets/img/bird.svg"
      alt=""
      srcset=""
    />
    <img v-else class="bird" src="@/assets/img/bird_m.svg" alt="" srcset="" />

    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <h3 class="order-title" v-html="order.title"></h3>
      <!-- <div class="order-title-img">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 261.49 117.69'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23bd802f;%7D.cls-2%7Bfill:%23231815;%7D.cls-3%7Bfill:%230071b6;%7D%3C/style%3E%3C/defs%3E%3Cg id='圖層_2' data-name='圖層 2'%3E%3Cg id='圖層_2-2' data-name='圖層 2'%3E%3Cpath class='cls-1' d='M68.15,33.68c.38-1.16.81-2.77,1.2-4.41h-2.1l0,11.87c0,2-.33,3-1.62,3.67s-3,.73-5.39.72a14.21,14.21,0,0,0-1.25-4c1.5,0,3.15,0,3.6,0s.63-.14.63-.52l0-11.8H58V25.56l7.49,0a43.66,43.66,0,0,0-6.05-3.69l2.07-2.69c1,.46,2.14,1,3.22,1.62A23.7,23.7,0,0,0,67,18l-8.12,0v-3.6l10.71,0,.73-.24,2.38,1.75V14.29l17.78.05v3.5l-6.58,0q-.37,1.21-.75,2.31l6.31,0,0,18.51-15.58,0,0-18.51H79c.14-.77.25-1.54.35-2.31l-6.65,0V16.25a39,39,0,0,1-5,6.4,15.87,15.87,0,0,1,2.1,1.65l-.92,1.29h1.68l.57-.11,2.51.57C73,29,72,32.25,71.22,34.31Zm12.51,7.2a26.83,26.83,0,0,1-7.92,4.85A23.51,23.51,0,0,0,69.94,43a21.42,21.42,0,0,0,7.33-4.32Zm4.81-7.51-7.8,0v2.24l7.81,0Zm0-5.11-7.8,0v2.24l7.81,0Zm0-5-7.81,0v2.2l7.8,0Zm-.08,15.71a46.27,46.27,0,0,1,5.94,4.5l-3.29,2.34A42.14,42.14,0,0,0,82.34,41Z'/%3E%3Cpath class='cls-1' d='M99,36.73a41.69,41.69,0,0,1-2.26,8.39,18.4,18.4,0,0,0-3.53-1.23A30.16,30.16,0,0,0,95.4,36Zm6.24-2.12a13.28,13.28,0,0,0-.35-1.76c-8,1.21-9.35,1.59-10.22,2-.21-.77-.84-2.7-1.29-3.78,1-.21,1.79-.91,3-2.2A30.42,30.42,0,0,0,99,26a17.37,17.37,0,0,0-4.44.83,26.51,26.51,0,0,0-1.26-3.64,4.83,4.83,0,0,0,2.18-1.85,39.72,39.72,0,0,0,4.82-8.46L104,14.48a53.62,53.62,0,0,1-5.34,8.21l2.91-.2c1-1.37,1.89-2.91,2.74-4.41l3.42,2.32a62.18,62.18,0,0,1-7.69,9.71l3.92-.55c-.24-.91-.55-1.78-.83-2.59l3.22-.83a50.76,50.76,0,0,1,2.33,7.46ZM103,35.69a61.46,61.46,0,0,1,1.21,7.8l-3.47.91a56.16,56.16,0,0,0-1-7.88Zm4-.87a42.42,42.42,0,0,1,2.19,6.45L106,42.48a45.25,45.25,0,0,0-2-6.62Zm18-15.53s0,1.47,0,2c-.42,15.08-.86,20.44-2.19,22.25a4.58,4.58,0,0,1-3.44,1.92,27.18,27.18,0,0,1-5.46.09,10.5,10.5,0,0,0-1.35-4.17c2.13.18,4.06.19,5,.19A1.57,1.57,0,0,0,119,41c1-1,1.38-6,1.72-17.74l-8.26,0a29.53,29.53,0,0,1-2.67,4.65,24.25,24.25,0,0,0-3.57-2.35c2.43-2.94,4.29-7.76,5.29-12.45l4.09.81A47.63,47.63,0,0,1,114,19.26Zm-9.18,17.44a32.34,32.34,0,0,0-6-7.61L112.65,27a34.45,34.45,0,0,1,6.25,7.33Z'/%3E%3Cpath class='cls-1' d='M151,40.74c3.29.92,6.86,2.08,9.06,2.92l-4.34,2.2a86.49,86.49,0,0,0-9.41-3.31l2.7-1.82-10,0,3.63,1.37C140,43.9,135.56,45.21,131.92,46a25.86,25.86,0,0,0-3.07-3.12,36.32,36.32,0,0,0,9.52-2.18l-5,0,0-12.56,22.86.05,0,12.57ZM133.69,23.37h-3.85V16.71h4.84A26.41,26.41,0,0,0,133,14.23l3.71-1a18.4,18.4,0,0,1,2.34,3.37l-.42.14h3.78V13.1h4.13v3.64h3.85a24.32,24.32,0,0,0,2.22-3.6l4.26,1a30.82,30.82,0,0,1-2.1,2.59h4.86v6.65h-4.06V19.61l-21.88-.06Zm1.71,3.57V20.85l18.59,0L154,27Zm1.89,11.49,14.77,0V37.2l-14.77,0Zm0-3.43,14.77,0V33.81l-14.78,0Zm0-3.4,14.77,0V30.41l-14.77,0Zm1.94-7,10.61,0V23.2l-10.6,0Z'/%3E%3Cpath class='cls-1' d='M195.18,41.79v3.29L169.62,45V41.73l10.61,0V39.34l-8.23,0V36l8.22,0V34c-5.5.4-6.72.58-7.6.89a34.87,34.87,0,0,0-1.18-3.54,5.44,5.44,0,0,0,2-1.08,19.35,19.35,0,0,0,2.1-1.81l-4.79,0c-.26,5.71-1.19,12.64-4.07,17.36A17.18,17.18,0,0,0,163,43.67c3.37-5.38,3.67-13.22,3.69-18.79l0-10.11,26.81.06,0,8.86-22.61-.06v1.58l23.6.06v3.25h-5.53a40,40,0,0,1,5.52,5l-3.33,2a23.74,23.74,0,0,0-1.85-2l-4.94.31v2.31l8.37,0v3.29l-8.36,0v2.41ZM170.87,18.14v2.13l18.41.05V18.18Zm9.92,10.35c-.84.8-1.79,1.6-2.7,2.37l7.84-.4c-.42-.39-.91-.74-1.36-1.09L186,28.5Z'/%3E%3Cpath class='cls-2' d='M227.11.11c-1.48,4.58-3,9.14-4.56,13.71l-4.71,13.66c-1.58,4.55-2.93,9.18-4.84,13.61a114.46,114.46,0,0,1-6.39,13l-.28-.11a113.63,113.63,0,0,1,3.86-14c1.51-4.58,3.58-8.94,5.41-13.39l5.54-13.34C223,8.86,224.9,4.42,226.83,0Z'/%3E%3Cpath class='cls-2' d='M25.61,0c1.93,4.42,3.79,8.86,5.69,13.29l5.54,13.34c1.83,4.45,3.91,8.81,5.41,13.39a111.89,111.89,0,0,1,3.86,14l-.28.11a114.46,114.46,0,0,1-6.39-13C37.53,36.66,36.19,32,34.6,27.48L29.89,13.82C28.38,9.25,26.81,4.69,25.33.11Z'/%3E%3Cpath class='cls-3' d='M7.48,97.28a20,20,0,0,1-2.83,5.77,14.81,14.81,0,0,0-3.19-2.27,20.81,20.81,0,0,0,4.23-8.85l-5,1L0,89.51l5.62-1.18-1-4.83,3.87-.8,1,4.83,4.83-1L15,90l-4.83,1,.27,1.26c1.53.5,5.27,2.16,6.19,2.64l-1.44,3.7c-1-.69-2.49-1.66-4-2.53l1.49,7.15L8.89,104ZM4.27,113a24.16,24.16,0,0,0,1.51-7.68l3.93.68a34.55,34.55,0,0,1-1.32,8.07Zm19.44-4.63c1.61-.34,1.75-.87,1.24-4.37a9.88,9.88,0,0,0,4,.67c.51,5-.37,6.45-4.14,7.23l-6.16,1.29c-4.66,1-6.06.09-6.81-3.48l-1-4.69,4-.84,1,4.63c.21,1,.58,1.09,2.43.7ZM18,100.73l.81.48L15,83.09l13.9-2.91,3.85,18.43-13.56,2.84c1.59,1,3.36,2.08,4.39,2.87l-2.43,3.08a53.72,53.72,0,0,0-5.52-3.82Zm1.81-13.21,6.31-1.32-.42-2-6.3,1.31Zm1,5,6.3-1.31-.41-2-6.31,1.32Zm1.05,5,6.3-1.32-.43-2-6.3,1.31Zm8.71,2.15c1.81,1.84,4.4,4.33,5.7,5.92l-3.39,2.75c-1.2-1.65-3.72-4.27-5.53-6.28Z'/%3E%3Cpath class='cls-3' d='M65.35,77.88A57.92,57.92,0,0,1,54.74,89.14l1.82,13.39c.32,2.35-.08,3.54-1.69,4.39s-4.1,1.3-7.43,1.72a15.11,15.11,0,0,0-2.23-3.93c2.47-.23,5.31-.65,6.07-.76s1-.35.94-.94l-2.1-15.36a43.11,43.11,0,0,0,7.2-6.77l-20,2.73-.56-4.06,24.07-3.28.86-.37Z'/%3E%3Cpath class='cls-3' d='M105.07,97.16l-5.93.39.38,5.76-4,.26-.38-5.76-6.46.42-.23-3.56L95,94.25l-.21-3.15-2.9.19a14.9,14.9,0,0,1-1.22,2.78,18.74,18.74,0,0,0-2.82-1.28l.49,7.37c.1,1.64-.11,2.7-1.11,3.37s-2.47.86-4.6,1a11.2,11.2,0,0,0-1.42-3.45c1.4,0,2.76-.11,3.18-.14s.58-.18.55-.63l-.33-5-6.95.46a21.77,21.77,0,0,1-2.15,9.36,14.23,14.23,0,0,0-3-1.66c2.11-3.75,1.94-9,1.68-12.88l-.34-5.16A21.23,21.23,0,0,0,71,83.34c2.21-2.71,3.79-6.91,4.46-11.06l3.72.53c-.15.85-.34,1.7-.57,2.52l3.18-.21.51-.21,2.47,1.32a39.43,39.43,0,0,1-1.63,4.52L87,80.49l.14,2.13a7.32,7.32,0,0,0,4-6.19l-3.91.26-.22-3.39,15.5-1s0,.88,0,1.33c.19,5.57.07,8-.64,9a3.12,3.12,0,0,1-2,1.3,26.06,26.06,0,0,1-3.53.33A8.29,8.29,0,0,0,95.2,80.9c1.09,0,2,0,2.53,0a1,1,0,0,0,.91-.45c.29-.4.39-1.6.34-4.51l-4,.27C94.57,79.86,93.44,82.84,90,85l3.15.43c-.09.74-.18,1.52-.34,2.26l1.71-.11-.21-3.14,4-.26.21,3.14,5.24-.34.22,3.49-5.23.34L98.9,94l5.94-.39ZM77.62,78.55c-.33.9-.66,1.8-1,2.63l3-.2c.3-.79.55-1.72.81-2.61Zm-.34,8.27,2-.13-.17-2.62-2,.13Zm.23,3.52c0,.74.1,1.5.12,2.31l2-.13-.19-2.9-2,.13ZM82,86.51l2-.14-.18-2.61-2,.13Zm2.37,5.7-.19-2.9-2,.13.19,2.9Zm3.4,0a18.75,18.75,0,0,0,2-7c-.23.13-.47.28-.71.4a9.93,9.93,0,0,0-1.83-2.26Z'/%3E%3Cpath class='cls-3' d='M118.14,82.59a44.06,44.06,0,0,1-2.73,12.71c3.23,2.76,7.57,3.36,12.71,3.39,2,0,9.28,0,11.66-.11a13.3,13.3,0,0,0-1.47,3.82H128c-5.88,0-10.68-.77-14.29-3.74a15.07,15.07,0,0,1-3.84,4.37,13.3,13.3,0,0,0-3-2.73A13.93,13.93,0,0,0,111,95.68,26.05,26.05,0,0,1,108,88.89l3-1a17.58,17.58,0,0,0,1.72,4.06,31,31,0,0,0,1.36-6.2h-5.6c1.4-2.59,3.18-6.33,4.65-9.83H108V72.3h10.78c-1.33,3.15-3,6.82-4.44,9.84h.84l.7-.07Zm7.35-6.34h-5.95V73.1h5.95V70.48h3.92V73.1h7.67v4.69H139V81h-1.92v4.66h-7.67v1.68h8v3h-8V92h9.17v3.3h-9.17v2.38H125.5V95.33h-7.74V92h7.73V90.32h-6.33v-3h6.33V85.63h-6.12V82.48h6.12V81h-7.87V77.79h7.88Zm3.92,0v1.54h4V76.25Zm4,4.73h-4v1.5h4Z'/%3E%3Cpath class='cls-3' d='M174.17,97.69l-8.06-.59a50,50,0,0,1,7.51,5.32l-3.45,2.66a50.13,50.13,0,0,0-8.39-6.29L164.3,97l-4-.29-.56,7.82-4.16-.3.57-7.82L150.27,96l4,1.65a25.28,25.28,0,0,1-8.83,5.26,30.64,30.64,0,0,0-3.3-3c3-.76,6.27-2.21,8-3.91l-7.61-.55.25-3.42,13.61,1,.17-2.41,4.15.3-.17,2.41,13.89,1Zm-4-4.57a75.54,75.54,0,0,0-9.7-3.72c-4,1.32-9.27,1.68-16.18,1.57a11.36,11.36,0,0,0-1.18-3.53,72.93,72.93,0,0,0,10.32-.13c-1.92-.52-3.85-1-5.89-1.48a34.43,34.43,0,0,0,3.1-2.65l-6.94-.5.23-3.25,9.81.71a34.92,34.92,0,0,0,2.42-2.88l-7.57-.54-.14,1.92-3.84-.28L145,73l12.39.89c-.2-.54-.41-1-.62-1.51l4.46-.56a26.43,26.43,0,0,1,1.19,2.44l12.46.9-.39,5.34-4-.29.14-1.92-12.81-.93,2.46,1c-.61.7-1.23,1.42-1.95,2.14l6.74.49a19.81,19.81,0,0,0,1-2.07l4,1.1c-.17.44-.38.88-.58,1.29l5.48.39-.24,3.25-7.12-.52a12.91,12.91,0,0,1-2.87,2.81c3.71,1.18,7.06,2.41,9.61,3.51ZM155.06,83.5a12,12,0,0,1-.93.81c1.89.45,3.82,1,5.64,1.49A11.44,11.44,0,0,0,162.6,84Z'/%3E%3Cpath class='cls-3' d='M199.51,103.18c3,1.63,6.22,3.5,8.12,4.8l-4,1.68a66.2,66.2,0,0,0-8.43-5.37l2.36-1.4-9.77-1.39,2.81,1.81a45.63,45.63,0,0,1-11.45,3,28.88,28.88,0,0,0-2.62-3.46,39.33,39.33,0,0,0,9.87-1.52l-5-.71,2-14.07,23.18,3.31-2,14.07Zm2-20.51c1.61,2.1,5.15,3.49,9.8,4.4a13.4,13.4,0,0,0-2.76,3c-3.81-1-6.67-2.58-8.58-4.8-1.53,1.34-4.6,2.28-10.52,2.11a11.42,11.42,0,0,0-1.06-2.45l-9.18-1.31.45-3.16,10.46,1.5L189.8,84c6.72.25,7.81-1.18,8-2.46l.07-.52-2.08-.3a15.1,15.1,0,0,1-2.85,2.63,20.31,20.31,0,0,0-2.74-2.55,14,14,0,0,0,4.93-5.59l3.49,1.32c-.25.49-.53,1-.81,1.44l9.84,1.4.65-.08L211,80.6a31.29,31.29,0,0,1-4,5L204,84a20.73,20.73,0,0,0,1.5-1.84l-3.85-.54-.1.69Zm-11.85-3.18-8.87-1.27.43-3,8.87,1.27Zm-3.92,19.24,15,2.14.23-1.55-15-2.15Zm.56-3.88,15,2.14.21-1.49-15-2.14Zm.54-3.81,15,2.14.22-1.49-15-2.14Z'/%3E%3Cpath class='cls-3' d='M221.75,111.26l-6.84-1.47-.31,1.43-3.12-.67L214,98.75,224,100.9ZM215,94l10,2.15-.66,3.08-10-2.15Zm12.44-3.73L214.93,87.6l.69-3.22,5.44,1.17A30.43,30.43,0,0,0,220,80.81L223.2,80A36.67,36.67,0,0,1,224.51,85l-2.35.78,6,1.29Zm-12.11,2.23.66-3.08,9.92,2.14-.66,3.08Zm1.1,10.15-.82,3.83,3.62.78.83-3.83Zm28.38-16.08c-2.73,11.19-5.72,25.23-4.54,25.91.15.1.8-2.08,1.38-4.25a19.2,19.2,0,0,0,1.41,3.74c-1.59,4.88-3.56,5.57-5.49,4.22-3-2.07-.44-13.91,2.34-26.63l-4.14-.89-1.95,9,3.29.71-.82,3.8-3.29-.71L230.11,115l-3.8-.82,2.91-13.48-3.83-.83.81-3.79,3.84.82,1.94-9-3.35-.72.83-3.87Z'/%3E%3Cpath class='cls-3' d='M248.82,113.27a3.65,3.65,0,0,1,7,1.91,3.65,3.65,0,0,1-7-1.91Zm5.25-17.07,1.23-5.07,6.19,1.68-1.54,5L255.63,109l-3.48-.94Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="" />
      </div> -->
      <div class="order-subtitle" v-html="order.subTitle"></div>
      <div class="order">
        <div class="form">
          <div class="group">
            <div class="row">
              <label>姓名</label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row">
              <label>手機</label>
              <el-input v-model="form.phone" placeholder></el-input>
            </div>
            <div class="row">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option
                  v-for="city in cityList"
                  :key="city.value"
                  :label="city.label"
                  :value="city.value"
                  no-data-text="無數據"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
                <el-option
                  v-for="area in areaList"
                  :key="area.value"
                  :label="area.label"
                  :value="area.value"
                  no-data-text="請先選擇居住城市"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>性別</label>
              <el-select v-model="form.gender" placeholder>
                <el-option
                  v-for="gender in ['女', '男', '其他']"
                  :key="gender"
                  :label="gender"
                  :value="gender"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>資訊來源</label>
              <el-select v-model="form.info_source" placeholder>
                <el-option
                  v-for="info_source in [
                    '戶外廣告看版',
                    'FB',
                    '聯播網',
                    '邀請卡',
                    '簡訊',
                    '介紹',
                    '其他',
                  ]"
                  :key="info_source"
                  :label="info_source"
                  :value="info_source"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="group">
            <div class="row">
              <label>房型需求</label>
              <el-select v-model="form.houseStyle" placeholder>
                <el-option
                  v-for="houseStyle in ['2房', '3房', '店面']"
                  :key="houseStyle"
                  :label="houseStyle"
                  :value="houseStyle"
                  no-data-text="4"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>車位需求</label>
              <el-select v-model="form.parking" placeholder>
                <el-option
                  v-for="parking in ['有', '無']"
                  :key="parking"
                  :label="parking"
                  :value="parking"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div>
            <div class="row" style="height: 65%">
              <el-input
                type="textarea"
                :rows="7"
                placeholder="請輸入您的留言 (選填)"
                v-model="form.msg"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="control">
          <el-checkbox v-model="checked">
            <h3 style="color: #fff !important">
              本人知悉並同意
              <span style="color: #ffdd00 !important" @click="showPolicyDialog"
                >「個資告知事項聲明」</span
              >
              內容
            </h3>
          </el-checkbox>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="!isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <el-button
          class="form-submit bt_registration"
          type="primary"
          :disabled="!checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
          >立即預約</el-button
        >
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>

    <ContactInfo />
    <GoogleMap />
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import PolicyDialog from "@/components/PolicyDialog.vue";
import info from "@/info";
import { cityList, renderAreaList } from "@/info/address";
import { isMobile } from "@/utils";
import Loading from "@/components/Loading.vue";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "order",
  components: {
    GoogleMap,
    ContactInfo,
    PolicyDialog,
    Loading,
    VueRecaptcha,
  },

  data() {
    return {
      cityList,
      info,
      order: info.order,
      isMobile,
      form: {
        name: "",
        phone: "",
        email: "",
        city: "",
        area: "",
        gender: "",
        info_source: "",
        parking: "",
        houseStyle: "",
        room: "",
        msg: "",
        time_start: "",
        time_end: "",
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
    };
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city);
    },
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true;
    },

    alertValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "請填寫必填欄位",
        message: h(
          "i",
          { style: "color: #82191d" },
          "「姓名、手機」是必填欄位"
        ),
      });
    },

    alertPhoneValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "格式錯誤",
        message: h("i", { style: "color: #82191d" }, "「手機」需為 10 碼數字"),
      });
    },

    submit() {
      if (this.isSubmit) return;
      if (!this.isVerify) return;
      if (!this.checked) return;
      this.isSubmit = true;
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
        // !this.form.city ||
        // !this.form.area
      ) {
        this.alertValidate();
        this.isSubmit = false;
        return;
      }
      if (this.form.phone.length != 10) {
        this.alertPhoneValidate();
        this.isSubmit = false;
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmContent = urlParams.get("utm_content");
      const utmCampaign = urlParams.get("utm_campaign");
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("msg", this.form.msg);
      formData.append("room", this.form.room);
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append("city", this.form.city);
      formData.append("area", this.form.area);
      formData.append("gender", this.form.gender);
      formData.append("info_source", this.form.info_source);
      formData.append("parking", this.form.parking);
      formData.append("houseStyle", this.form.houseStyle);
      formData.append("utm_source", utmSource);
      formData.append("utm_medium", utmMedium);
      formData.append("utm_content", utmContent);
      formData.append("utm_campaign", utmCampaign);
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: "GET",
        }
      );
      fetch("contact-form.php", {
        method: "POST",
        body: formData,
      }).then((response) => {
        this.isSubmit = false;
        if (response.status === 200) {
          window.location.href = "formThanks";
        }
      });
    },
  },
};
</script>

<style lang="scss">
.el-input {
  border-left: 1px solid #eee !important;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";

.bird {
  position: absolute;
  top: 0%;
  left: 50%;
  z-index: 1;
  width: 80vw;
  transform: translate(-50%, 10%) skew(0deg, 0deg) scale(1);
  animation: fly infinite alternate-reverse 7s;

  @keyframes fly {
    0% {
      transform: translate(-50%, 10%) skew(0deg, 0deg) scale(0.9);
    }
    100% {
      transform: translate(-55%, 12%) skew(20deg, 2deg) scale(1.1);
    }
  }
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  // mix-blend-mode: screen;
  //background: ("~@/projects/fs/order/bg_m.jpg");
  &.no-mix {
    mix-blend-mode: normal;
    height: 100%;
  }
  padding: 0 2vw;
}
.order-bg {
  //background-color: $order_bg_color;
  //background-image: $order_bg_image;
  background-repeat: no-repeat;
  position: relative;
  background-size: 100vw auto;
  background-position: top;
  font-family: $family3;
  // padding-top: 10vw;

  input,
  textarea,
  button {
    font-family: $family3;
    background: $order_submit_bg;
    border-radius: $order_submit_borderradius !important;
  }
  .order-top {
    background-color: $order_bg_color;
    position: relative;
    //overflow: hidden;
    padding: 5vw 0;
    // padding-bottom: 20vh;
    //margin: 0 2vw;
  }
  .order-title {
    font-family: $family1;
    width: 80vw;
    padding-top: 20px;
    padding-bottom: 8px;
    font-weight: bold;
    line-height: 1.3;
    font-size: calc(100vw * 60 / 1920);
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
  }
  .order-title-img {
    width: 12vw;
    margin: 0 auto;
    margin-bottom: 1vw;

    img {
      width: 100%;
      max-width: 500px;
    }
  }

  .contact-brick {
    position: absolute;
    width: 20vw;
    left: 15vw;
    top: 42vw;
  }

  .order-subtitle {
    width: 100vw;
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
    padding-bottom: 18px;
  }

  .order {
    position: relative;
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    justify-content: space-between;
    z-index: 1;
  }

  .form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    > .group {
      flex: 1;
      align-items: flex-start;
    }
  }

  .group {
    height: 400px;
    margin-bottom: 40px;
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      margin-right: 40px;
      padding-right: 40px;
      .row {
        width: 100%;
        // justify-content: flex-start;
        .el-input {
          width: auto;
        }
      }
    }
    &:nth-child(2) {
      .row {
        //justify-content: flex-end;
        //align-items: flex-start;
        //height: 100%;
        width: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    //margin-bottom: 15px;
    background: #f7f4f2;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 5vw;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.8;
      color: $order_input_label_color;
      text-align: left;
      padding-left: 15px;
    }
  }

  .control {
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-title-img {
    width: 90vw;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
    width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .bird {
    width: 100vw;
  }
  .order-bg {
    background-color: $order_bg_color;
    background-image: $order_bg_image_m;
    background-size: cover;
    padding-top: 0;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: calc(100vw * 30 / 375);
    }
    .order-title-img {
      width: 60vw;
    }

    .order-subtitle {
      // display: none;
      font-size: 14px;
      max-width: 80vw;
      margin: 0 auto;
      margin-bottom: 10vw;
      line-height: 1.5;
    }
    .order-top {
      top: 10vw;
    }
    .order {
      width: 85% !important;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }

    .group {
      width: 100%;
      height: auto !important;
      margin-bottom: 0px !important;
      border: none !important;
      padding-right: 0 !important;
      &:nth-child(1) {
        .row {
          .el-input {
            width: 100%;
          }
        }
      }
    }
    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 40% !important;
        text-align: left;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .hint {
      width: calc(100vw * 334 / 375);
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    @keyframes leaf {
      100% {
        transform: skew(2deg);
      }
    }
  }
}
</style>
