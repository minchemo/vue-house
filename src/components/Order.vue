<template>
  <div class="order-bg" ref="parallax2">
    <div class="order-top">
      <h3 class="order-title" v-html="order.title"></h3>
      <!-- <div class="order-title-img">
        <img src="~@/assets/img/order-title.png" alt="" srcset="">
      </div> -->
      <!-- <div class="order-subtitle" v-html="order.subTitle"></div> -->
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
            <!-- <div class="row">
              <label>電子郵件</label>
              <el-input v-model="form.email" placeholder></el-input>
            </div> -->
            <div class="row">
              <label>需求房型<span>*</span></label>
              <el-select v-model="form.room_type" placeholder>
                <el-option
                  v-for="city in ['2房', '3房']"
                  :key="city"
                  :label="city"
                  :value="city"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div>
            <!-- <div class="row">
              <label>方便接聽<br />電話時間</label>
              <el-select v-model="form.contacttime" placeholder>
                <el-option
                  v-for="contacttime in ['上午', '中午', '下午', '晚上']"
                  :key="contacttime"
                  :label="contacttime"
                  :value="contacttime"
                ></el-option>
              </el-select>
            </div> -->
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
            <!-- <div class="row">
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
              <el-select v-model="form.infoSource" placeholder>
                <el-option
                  v-for="infoSource in [
                    '戶外廣告看版',
                    'FB',
                    '聯播網',
                    '邀請卡',
                    '簡訊',
                    '介紹',
                    '其他',
                  ]"
                  :key="infoSource"
                  :label="infoSource"
                  :value="infoSource"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div> -->
          </div>
          <div class="group">
            <div class="row" style="height: 100%">
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
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
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
      <img
        class="orderbg2"
        v-if="!isMobile"
        src="@/projects/wv/orderbg2.png"
        alt=""
        srcset=""
      />
      <img
        v-if="!isMobile"
        class="orderbgmoon"
        src="@/projects/wv/orderbgmoon.png"
        alt=""
        srcset=""
        data-aos="fade-up"
      />
      <img
        class="orderlogo"
        v-if="!isMobile"
        src="@/projects/wv/logo.svg"
        alt=""
        srcset=""
      />

      <div data-v-3a78245a="" class="star">
        <img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAucAAACzCAMAAAAdWUIyAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABgoQFw0hKkQwJR05NFY/S7fIeWPtbpyVp43ehN7yc30AAAlqSURBVHja7N3JkpswFEBRPyE0MBqMZ/j/34xk42TTSbm70jao7/Emy1T51mshjNgAAAAAAAAAAAAA+HayAZImjw+xI1kSPzeUjmTNkavwCQgdKZLNvfE7UZSOJImoIM+zLMvzPPxzyaGLUhvg00RkjlwHsXWlZLGZK21NvgG+lHmMvIxi6vmCJ3rm+tEw0fFZt8xj5aaw1haFKcNMX+5E183UWzrH1zIvjbW+rura22LJoUtuG6cX+V/DkonMmdeVi9raF+a2dFlmTJLrjHGOr43zkHm7bQ6Hw9C4yseJni90oPPjBHylGXlk3hzG0/F42YXQ7ZIHOvDVZYvx1fZw6vq+744h9NqGgU7nSIaIUpkui9oNl+66n6Z9fzxs54G+1K1F4EudGxvG+bGfoms3Nq03S16gA59fns+d787XKdp3l8b5gs6REPmw85bOkZJ5npe2cmHdsr+vW3bzuoXrUKTiz3VoM55D6Ptrd4rXoXSOpMi8f15th8u56/vuFMd5EfcV2W/B+ojI3+8TlYVvt8PucjqNh3ifiO0WrFOujVYfd/64IeqaYRiabciccY51UqY5VdnfV+jaWF+1zrm2qkPm3PbHKinfTwctH2Q+r9C1Kaz3de2tNWSOlVJmOLbZP36xmOnSmCIw5cIfKAL+Li/j+vwD8jv04PbY3MIfEMVqvaIpUfKvB0Rj6bOcaY5vIOrdi+G59DulmOb4/1RWmvKtj4LJRgL1wDlF+P8ks25wRfbOsOTxEeEoUXwLpV03nSv9zoE+p84xovguosrtdeqdfvsz7BwL/bO8+NtWuhq7nc/IC68kIvcrsReRvPSVf/84x08SI8+DF+70icp0xl12vNL9tx76tU8ZCNvVeKk4W01hbWEYsUiWqFwb3zrXeqN5bgxpElGZ8e5wueycNwx0JErl2ra77nrtds7qnD2QlWEwPUdl2m9P8fS149Zz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"
          alt="伴月灣_面水岸"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAC/CAMAAAAW/Z6QAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMABw8MFhwtJTRCIjliPdFHq5WJS7lbf212U+vhn8T195ksfwAACOZJREFUeNrs3VuO2zAMheGQoiRbvufmxJNC+99l08xr3woUtOf/4B34gIItijoBAAAAAPBXEoKcAKfEYolKROGTWLrcuhhOgEehPMftnPQEeBTyWuvcGGs8XJLYvq49FRROieZuSBRQeCVqxkc8HBPiCQAAAAAAAAAAAAAA8F+J0LEBt0T0jbOV8EmCxZwLXZnwSaw07TQkDv/CI9HY9K/53mYOXsAh0Ty9ah3XhtPpcEg0X661bncCCo9ES3set+stGQGFQyGm6XHvu8JHEjwSjanpUqGAwidRi9H4Uw+vRAJDOgEAAADQJ4l9k8BoQPglGnOTCj0+8ClYet7XIVND4ZKWaa5fDwb8wyXRfBtrXbpIQOGRlva1jSsT/uGTWJrWG11ocEqC5cRRMrglQVXJ535ZttOxsZG0Z3r5amnChlt62QgoHDv+Eg8AAAAAAAAAAAAAAAAAAAAAgGOBm3rhWIhNw4AveCU2LPOzcHoPPkm81bokPQEeSWyvY5+poHBK89AygQ5uCYPk4RsDlPBP5POQIngk70eEC4fglYiEP4go3JHPTc/6LZDQ3TvcKxQJahbfzNgy37uj/TCR73zGklPKOUYjobsmlrrmWHdKfPKZUzcMXZNyND3cEvGDiKZ+Xtp4oE27Tz5T015u/XMaUo6U0B0T6+Za13yctgeRYDE3U39elvPjOaRCCd0xse5Vt/5QAVUrqe2X6zj+mh+XjhK6a5qn+3qkmyF/s3em223CQBj1CBCIfcd44/3fskiyMHUXt01Ikfxdp01y8ovj6xktoxF58kLrpm/P0zTlVZrxwIeg32HVFgaxmIeBMwGUtKDJWOXTzKkcBI+dWqX4OMSYb9HaBnmMOTRFehb0CEGfIBbIFTjctrgtr1P8Sab4Syp4AEG/95OLrhM82CqGklMB77OhxyTpfM7LHpOkJ4iFor5ea7HV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"
          alt="伴月灣_近捷運"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuoAAACkCAMAAAD2dPuhAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMACA0SIRoWMj4tKUo4VEV1sqTij/OZh2tkXb/Tf8kWT25SAAAJJElEQVR42uydbXuaMBSGPSEh4U3eFEGR//8zl2A0VNvNVuyMPPfcPnS7diG9+3g4OYQVAAAAAAAA90NC0AqAt4d43nO4Dn4ICW/soWizkb4cLHg5gnIfrjxBrBOxAuBnsKwNVp5ALJgv1EWHD4iFQWy1SHi50DcOFgdCHQAAAAAAAAAAAAAAAAAAAAAAAAAAALB4SL8wTgUWBcF58J6Qldv9wrwseFNOfjsInoN3wxUrNAFVDHgzyP5Bt5ivoowBb4QT/RqkOngb6IPojNgJYnQC/UfwDtD4+6y544PtPlcw3h44eIYL0zgPLjADjfhar49vizw8cDA3067LxPMwnNhOBi/7jkQsCPV7YZB98UyqF+t5OOVsOxn8a7MTBYLzmPMwgOuAVs70UXQxwdhuXfexCmDadKnWSnIR+Hf04DnVixVd680dQmNlJ41vq0nEQp5mfd1nKQ+ZRwcOngFNTHeiO6zrXuY6BUIm9bE61kkkoPqiIZfpp0jnmjiOLHHsZNeueyc7BTzd7YdhKFrJUcEsHFpdma49lxe07RPXvVs4ZWfV97sUqi8bWk1Mv4iepmokTc+yW9d9W0uigMusrIaqzCSuS72FDI+Lfm26lMbz9YixXcqL64z51l0nFsaqrcu6VTEuS32FtJ4zLIy4ULemp8bzJMk0SWJsT0fXhfA01kWkkiRJI4S6r5iGsTYwoJmaL6EQ1nTjede2u13bdlly7bp3sR4Irq+vuQgQ6n5iitB1ljzeVrCqh6EzPet2ed5r8nxnZLeun1T3rgdDYwcVi6XewkSUlfuyk4I9Nrk7LV+s6bu8b+qtpm76vLWuc+u6d+tI4xvEvJe3EOOq2QybWnFGs4W6lNp0HenNtiwLTVnWTb4zrnsc66uVf0cMPqpeb4Zhq3hAj5se2PJFKZ3pfb0ti/1Rsy/K7ej6KdaF8LEJAzyHCdkW1T5P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"
          alt="伴月灣_鄰公園"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAucAAACzCAMAAAAdWUIyAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABgoQFw0hKkQwJR05NFY/S7fIeWPtbpyVp43ehN7yc30AAAlqSURBVHja7N3JkpswFEBRPyE0MBqMZ/j/34xk42TTSbm70jao7/Emy1T51mshjNgAAAAAAAAAAAAA+HayAZImjw+xI1kSPzeUjmTNkavwCQgdKZLNvfE7UZSOJImoIM+zLMvzPPxzyaGLUhvg00RkjlwHsXWlZLGZK21NvgG+lHmMvIxi6vmCJ3rm+tEw0fFZt8xj5aaw1haFKcNMX+5E183UWzrH1zIvjbW+rura22LJoUtuG6cX+V/DkonMmdeVi9raF+a2dFlmTJLrjHGOr43zkHm7bQ6Hw9C4yseJni90oPPjBHylGXlk3hzG0/F42YXQ7ZIHOvDVZYvx1fZw6vq+744h9NqGgU7nSIaIUpkui9oNl+66n6Z9fzxs54G+1K1F4EudGxvG+bGfoms3Nq03S16gA59fns+d787XKdp3l8b5gs6REPmw85bOkZJ5npe2cmHdsr+vW3bzuoXrUKTiz3VoM55D6Ptrd4rXoXSOpMi8f15th8u56/vuFMd5EfcV2W/B+ojI3+8TlYVvt8PucjqNh3ifiO0WrFOujVYfd/64IeqaYRiabciccY51UqY5VdnfV+jaWF+1zrm2qkPm3PbHKinfTwctH2Q+r9C1Kaz3de2tNWSOlVJmOLbZP36xmOnSmCIw5cIfKAL+Li/j+vwD8jv04PbY3MIfEMVqvaIpUfKvB0Rj6bOcaY5vIOrdi+G59DulmOb4/1RWmvKtj4LJRgL1wDlF+P8ks25wRfbOsOTxEeEoUXwLpV03nSv9zoE+p84xovguosrtdeqdfvsz7BwL/bO8+NtWuhq7nc/IC68kIvcrsReRvPSVf/84x08SI8+DF+70icp0xl12vNL9tx76tU8ZCNvVeKk4W01hbWEYsUiWqFwb3zrXeqN5bgxpElGZ8e5wueycNwx0JErl2ra77nrtds7qnD2QlWEwPUdl2m9P8fS149Zz/PDKqIxv7Cly6/xI56ukyqrlhS5Pr1vc2E9TP7JuWZus6ve86eIporSpm/F8HpvaaK5D10Sy6jpt6fzJ/RZdVK5pXFWwgb4yyrhtwRsXn3IL3XpvyXx9VKZzvrOn3M8yKUvN6xxWiJ9PfO64wSBXIuzHIlki8ngQWOWsXZAsmf/+ifYV1zVInbKn/VAy0JE25btpxw02JE5pN9Q8tonUqYyfuOAHYD8WAAAAAABwGiR+iBg4p/sibbHxGe8kQKokUI8PpSNJsuFtSvgBRHg7HlInc+a87RQJu2UeK5/fXm1i6Ux0JGbOvCysr+vae1uUIXQmOpJyX7RoU/iqdUFb+8LoLOd0BqREJGZehsxdMxwOQ+MqHyd6zkBHOuZxHjMfdpfj8bIbQuiGzpESuR8kZWzthvHc9X13HgdX25JjpX6xd2ZbkoIwGDaArIK75dK8/2uOqHNq5mKWY7ctIF89AdZvTEKWG0j1RVdxuC1UlKadGje/u5naqmCU4Ei27IQjnK32Im2QO7hE51Lwbq57u9LXsymFdDoPRyJ/AYLJHO0LSFMC4Apg07mSmndjYzeaseNCRuKgA8IkkAG2xwLSaD6kfnHY87fO+6h0jggrChbC4H1AOVFpAek1vP2W0sz1YleW+sOUIhL/HDCrxpdh/g8N2heQFmkB6TVAtsehrKjaV7P0/VK/BheHxuGfI6JHa18F8X1q0HsB6ZAWkF4BbHlFxTQ37ateebWGaxlJXhERPQeh8wxyIsshLSC9DPhp0LkZPub5YzC8YLHcEwGW1ThWAfgt28I6HxaQRprCh+x971+ZzpiKFywWc+4MutQ6gDgUnM63BaR21bm6S+eQxdo46XS+C51pV8hVFnqTeR5sYS7KIcC8Ijh73t66gPQo0Y61nwwOoVPJxAqTVIVcrohFqSB7A2GcxMWhuvqYptkUNy0gPUwejrPPBn4KnShKpaRUERLwQYHWlufZmzB2Yv26gJTd9QGCXQaKRBKd/alv7gDjgBtEgbS1DjFb4YRO71tA+k5IrEgVZwp/b/fHB3nQDhpS9PLsyhWTywBuXkDqZK6YdjGaZlEKHY4AJHeglaAj7stfUchg5wKhrdzlMuyeUzW0rbsoVCEE7+c2AqKV4FX+DTibsBsE+Or/4L5cx1F4wNupaeq20pEWH2w2Ktt/aZ3xP8tn8RHGwAXmBrJbcDqXRTct1vZTV7AgsrGnHnGamPufMt+SsDKSUrdfwwNWDrVdqVseq85Xksr/OwEoiqKILFj7TedDGbPOE/8ZrWluhs7bYA0yOO23mLHp+2Y0hYzpHU6c0fkWrdX17KkY9mD21MkU4908Ta7RhuJUM/lgAPZord8KUXw06FuQjHM45ZBRUVZdZ7iQyW15Nq6usHT1VrYfK+GfziEnTAhJTgj9GHDiIg8aS71q4rzOZdm6aG3xUeeAiKjagTOCznjoRyZJXZVKAs8eV+IvfgstzKvpey+Tb4Apf/XLXKocTt8MEHyRNUdUEL+eV+Jf0drLXRr61uAGgGXVWFtziuFk5erKVZeypHW1pIkA2K/Hy8oYrj0M1pw9n2w/ljSHz5QeXHMsMixl0nkYHPWzWjPp4YWo88/NR1udbRV0Sr+u7gMplvyW6/jK7iJwQnfhGlUeyjzLnFulNSM5fOKIfyCAWtLEBhAhCPqCfoQVT3sLUU4ISZc8zwaJuinx59sofe4WBoS8fAET30euF8tx5AOcUzHe40GKc4q+SEoRjV5PRAbC3zYCCCD5D88DUz8Sp98mPEA4zTJ/HIhb/ah/HBChQjCFU+LjSYCe2KN0jrAsu9ZolT/q2I8HPcuwASJ6aPrasGedO/EsAKlitLYfhP+j1xOJz9jzdrFNsueJqEFY8nbuCur/ioEf7N3BDcIwEARAzjaREUE8gxDpv02KyCe5mynCuseuFw71SF+rqSGSi3sf15gYgAOiCVRRgHgLAFCK04f82hAEI70Y8/vuN0gtlm3/PZ0u5BZjfqb3nOzc55Rw2k8FAAAAAAAAAAAAAAAASK8vqoqk1+a+anGRXTy2WlNa1FRsSgsAAADIzdQN+UUYLuPf3h3lQAiDUBQNlFLbGmvUjGNM97/N2QdzzxpeCOF9EJ5oSpYySUdkoualNKOlQWCiqY3t2qtlBjrCktzX83jvvTHQEZdkX5453081co6wJPv4znlchZwjLlGr2/2cw9lbEJimXseyNuOwiMBEk7l3zi2ITVQzNRHiE+G/Hv4AKQcAAIjqByYIXqqIq6c4AAAAAElFTkSuQmCC"
          alt="伴月灣_蘆洲站5分鐘"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAC/CAMAAAAW/Z6QAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMABw8MFhwtJTRCIjliPdFHq5WJS7lbf212U+vhn8T195ksfwAACOZJREFUeNrs3VuO2zAMheGQoiRbvufmxJNC+99l08xr3woUtOf/4B34gIItijoBAAAAAPBXEoKcAKfEYolKROGTWLrcuhhOgEehPMftnPQEeBTyWuvcGGs8XJLYvq49FRROieZuSBRQeCVqxkc8HBPiCQAAAAAAAAAAAAAA8F+J0LEBt0T0jbOV8EmCxZwLXZnwSaw07TQkDv/CI9HY9K/53mYOXsAh0Ty9ah3XhtPpcEg0X661bncCCo9ES3set+stGQGFQyGm6XHvu8JHEjwSjanpUqGAwidRi9H4Uw+vRAJDOgEAAADQJ4l9k8BoQPglGnOTCj0+8ClYet7XIVND4ZKWaa5fDwb8wyXRfBtrXbpIQOGRlva1jSsT/uGTWJrWG11ocEqC5cRRMrglQVXJ535ZttOxsZG0Z3r5amnChlt62QgoHDv+Eg8AAAAAAAAAAAAAAAAAAAAAgGOBm3rhWIhNw4AveCU2LPOzcHoPPkm81bokPQEeSWyvY5+poHBK89AygQ5uCYPk4RsDlPBP5POQIngk70eEC4fglYiEP4go3JHPTc/6LZDQ3TvcKxQJahbfzNgy37uj/TCR73zGklPKOUYjobsmlrrmWHdKfPKZUzcMXZNyND3cEvGDiKZ+Xtp4oE27Tz5T015u/XMaUo6U0B0T6+Za13yctgeRYDE3U39elvPjOaRCCd0xse5Vt/5QAVUrqe2X6zj+mh+XjhK6a5qn+3qkmyF/s3em223CQBj1CBCIfcd44/3fskiyMHUXt01Ikfxdp01y8ovj6xktoxF58kLrpm/P0zTlVZrxwIeg32HVFgaxmIeBMwGUtKDJWOXTzKkcBI+dWqX4OMSYb9HaBnmMOTRFehb0CEGfIBbIFTjctrgtr1P8Sab4Syp4AEG/95OLrhM82CqGklMB77OhxyTpfM7LHpOkJ4iFor5ea7HV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"
          alt="伴月灣_888萬起"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuoAAACkCAMAAAD2dPuhAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMACA0SIRoWMj4tKUo4VEV1sqTij/OZh2tkXb/Tf8kWT25SAAAJJElEQVR42uydbXuaMBSGPSEh4U3eFEGR//8zl2A0VNvNVuyMPPfcPnS7diG9+3g4OYQVAAAAAAAA90NC0AqAt4d43nO4Dn4ICW/soWizkb4cLHg5gnIfrjxBrBOxAuBnsKwNVp5ALJgv1EWHD4iFQWy1SHi50DcOFgdCHQAAAAAAAAAAAAAAAAAAAAAAAAAAALB4SL8wTgUWBcF58J6Qldv9wrwseFNOfjsInoN3wxUrNAFVDHgzyP5Bt5ivoowBb4QT/RqkOngb6IPojNgJYnQC/UfwDtD4+6y544PtPlcw3h44eIYL0zgPLjADjfhar49vizw8cDA3067LxPMwnNhOBi/7jkQsCPV7YZB98UyqF+t5OOVsOxn8a7MTBYLzmPMwgOuAVs70UXQxwdhuXfexCmDadKnWSnIR+Hf04DnVixVd680dQmNlJ41vq0nEQp5mfd1nKQ+ZRwcOngFNTHeiO6zrXuY6BUIm9bE61kkkoPqiIZfpp0jnmjiOLHHsZNeueyc7BTzd7YdhKFrJUcEsHFpdma49lxe07RPXvVs4ZWfV97sUqi8bWk1Mv4iepmokTc+yW9d9W0uigMusrIaqzCSuS72FDI+Lfm26lMbz9YixXcqL64z51l0nFsaqrcu6VTEuS32FtJ4zLIy4ULemp8bzJMk0SWJsT0fXhfA01kWkkiRJI4S6r5iGsTYwoJmaL6EQ1nTjede2u13bdlly7bp3sR4Irq+vuQgQ6n5iitB1ljzeVrCqh6EzPet2ed5r8nxnZLeun1T3rgdDYwcVi6XewkSUlfuyk4I9Nrk7LV+s6bu8b+qtpm76vLWuc+u6d+tI4xvEvJe3EOOq2QybWnFGs4W6lNp0HenNtiwLTVnWTb4zrnsc66uVf0cMPqpeb4Zhq3hAj5se2PJFKZ3pfb0ti/1Rsy/K7ej6KdaF8LEJAzyHCdkW1T5P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"
          alt="伴月灣_8292-2333"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAucAAACzCAMAAAAdWUIyAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABgoQFw0hKkQwJR05NFY/S7fIeWPtbpyVp43ehN7yc30AAAlqSURBVHja7N3JkpswFEBRPyE0MBqMZ/j/34xk42TTSbm70jao7/Emy1T51mshjNgAAAAAAAAAAAAA+HayAZImjw+xI1kSPzeUjmTNkavwCQgdKZLNvfE7UZSOJImoIM+zLMvzPPxzyaGLUhvg00RkjlwHsXWlZLGZK21NvgG+lHmMvIxi6vmCJ3rm+tEw0fFZt8xj5aaw1haFKcNMX+5E183UWzrH1zIvjbW+rura22LJoUtuG6cX+V/DkonMmdeVi9raF+a2dFlmTJLrjHGOr43zkHm7bQ6Hw9C4yseJni90oPPjBHylGXlk3hzG0/F42YXQ7ZIHOvDVZYvx1fZw6vq+744h9NqGgU7nSIaIUpkui9oNl+66n6Z9fzxs54G+1K1F4EudGxvG+bGfoms3Nq03S16gA59fns+d787XKdp3l8b5gs6REPmw85bOkZJ5npe2cmHdsr+vW3bzuoXrUKTiz3VoM55D6Ptrd4rXoXSOpMi8f15th8u56/vuFMd5EfcV2W/B+ojI3+8TlYVvt8PucjqNh3ifiO0WrFOujVYfd/64IeqaYRiabciccY51UqY5VdnfV+jaWF+1zrm2qkPm3PbHKinfTwctH2Q+r9C1Kaz3de2tNWSOlVJmOLbZP36xmOnSmCIw5cIfKAL+Li/j+vwD8jv04PbY3MIfEMVqvaIpUfKvB0Rj6bOcaY5vIOrdi+G59DulmOb4/1RWmvKtj4LJRgL1wDlF+P8ks25wRfbOsOTxEeEoUXwLpV03nSv9zoE+p84xovguosrtdeqdfvsz7BwL/bO8+NtWuhq7nc/IC68kIvcrsReRvPSVf/84x08SI8+DF+70icp0xl12vNL9tx76tU8ZCNvVeKk4W01hbWEYsUiWqFwb3zrXeqN5bgxpElGZ8e5wueycNwx0JErl2ra77nrtds7qnD2QlWEwPUdl2m9P8fS149Zz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"
          alt="伴月灣_快樂王國"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAC/CAMAAAAW/Z6QAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMABw8MFhwtJTRCIjliPdFHq5WJS7lbf212U+vhn8T195ksfwAACOZJREFUeNrs3VuO2zAMheGQoiRbvufmxJNC+99l08xr3woUtOf/4B34gIItijoBAAAAAPBXEoKcAKfEYolKROGTWLrcuhhOgEehPMftnPQEeBTyWuvcGGs8XJLYvq49FRROieZuSBRQeCVqxkc8HBPiCQAAAAAAAAAAAAAA8F+J0LEBt0T0jbOV8EmCxZwLXZnwSaw07TQkDv/CI9HY9K/53mYOXsAh0Ty9ah3XhtPpcEg0X661bncCCo9ES3set+stGQGFQyGm6XHvu8JHEjwSjanpUqGAwidRi9H4Uw+vRAJDOgEAAADQJ4l9k8BoQPglGnOTCj0+8ClYet7XIVND4ZKWaa5fDwb8wyXRfBtrXbpIQOGRlva1jSsT/uGTWJrWG11ocEqC5cRRMrglQVXJ535ZttOxsZG0Z3r5amnChlt62QgoHDv+Eg8AAAAAAAAAAAAAAAAAAAAAgGOBm3rhWIhNw4AveCU2LPOzcHoPPkm81bokPQEeSWyvY5+poHBK89AygQ5uCYPk4RsDlPBP5POQIngk70eEC4fglYiEP4go3JHPTc/6LZDQ3TvcKxQJahbfzNgy37uj/TCR73zGklPKOUYjobsmlrrmWHdKfPKZUzcMXZNyND3cEvGDiKZ+Xtp4oE27Tz5T015u/XMaUo6U0B0T6+Za13yctgeRYDE3U39elvPjOaRCCd0xse5Vt/5QAVUrqe2X6zj+mh+XjhK6a5qn+3qkmyF/s3em223CQBj1CBCIfcd44/3fskiyMHUXt01Ikfxdp01y8ovj6xktoxF58kLrpm/P0zTlVZrxwIeg32HVFgaxmIeBMwGUtKDJWOXTzKkcBI+dWqX4OMSYb9HaBnmMOTRFehb0CEGfIBbIFTjctrgtr1P8Sab4Syp4AEG/95OLrhM82CqGklMB77OhxyTpfM7LHpOkJ4iFor5ea7HV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"
          alt="伴月灣_面水岸"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuoAAACkCAMAAAD2dPuhAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMACA0SIRoWMj4tKUo4VEV1sqTij/OZh2tkXb/Tf8kWT25SAAAJJElEQVR42uydbXuaMBSGPSEh4U3eFEGR//8zl2A0VNvNVuyMPPfcPnS7diG9+3g4OYQVAAAAAAAA90NC0AqAt4d43nO4Dn4ICW/soWizkb4cLHg5gnIfrjxBrBOxAuBnsKwNVp5ALJgv1EWHD4iFQWy1SHi50DcOFgdCHQAAAAAAAAAAAAAAAAAAAAAAAAAAALB4SL8wTgUWBcF58J6Qldv9wrwseFNOfjsInoN3wxUrNAFVDHgzyP5Bt5ivoowBb4QT/RqkOngb6IPojNgJYnQC/UfwDtD4+6y544PtPlcw3h44eIYL0zgPLjADjfhar49vizw8cDA3067LxPMwnNhOBi/7jkQsCPV7YZB98UyqF+t5OOVsOxn8a7MTBYLzmPMwgOuAVs70UXQxwdhuXfexCmDadKnWSnIR+Hf04DnVixVd680dQmNlJ41vq0nEQp5mfd1nKQ+ZRwcOngFNTHeiO6zrXuY6BUIm9bE61kkkoPqiIZfpp0jnmjiOLHHsZNeueyc7BTzd7YdhKFrJUcEsHFpdma49lxe07RPXvVs4ZWfV97sUqi8bWk1Mv4iepmokTc+yW9d9W0uigMusrIaqzCSuS72FDI+Lfm26lMbz9YixXcqL64z51l0nFsaqrcu6VTEuS32FtJ4zLIy4ULemp8bzJMk0SWJsT0fXhfA01kWkkiRJI4S6r5iGsTYwoJmaL6EQ1nTjede2u13bdlly7bp3sR4Irq+vuQgQ6n5iitB1ljzeVrCqh6EzPet2ed5r8nxnZLeun1T3rgdDYwcVi6XewkSUlfuyk4I9Nrk7LV+s6bu8b+qtpm76vLWuc+u6d+tI4xvEvJe3EOOq2QybWnFGs4W6lNp0HenNtiwLTVnWTb4zrnsc66uVf0cMPqpeb4Zhq3hAj5se2PJFKZ3pfb0ti/1Rsy/K7ej6KdaF8LEJAzyHCdkW1T5P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"
          alt="伴月灣_近捷運"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAucAAACzCAMAAAAdWUIyAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABgoQFw0hKkQwJR05NFY/S7fIeWPtbpyVp43ehN7yc30AAAlqSURBVHja7N3JkpswFEBRPyE0MBqMZ/j/34xk42TTSbm70jao7/Emy1T51mshjNgAAAAAAAAAAAAA+HayAZImjw+xI1kSPzeUjmTNkavwCQgdKZLNvfE7UZSOJImoIM+zLMvzPPxzyaGLUhvg00RkjlwHsXWlZLGZK21NvgG+lHmMvIxi6vmCJ3rm+tEw0fFZt8xj5aaw1haFKcNMX+5E183UWzrH1zIvjbW+rura22LJoUtuG6cX+V/DkonMmdeVi9raF+a2dFlmTJLrjHGOr43zkHm7bQ6Hw9C4yseJni90oPPjBHylGXlk3hzG0/F42YXQ7ZIHOvDVZYvx1fZw6vq+744h9NqGgU7nSIaIUpkui9oNl+66n6Z9fzxs54G+1K1F4EudGxvG+bGfoms3Nq03S16gA59fns+d787XKdp3l8b5gs6REPmw85bOkZJ5npe2cmHdsr+vW3bzuoXrUKTiz3VoM55D6Ptrd4rXoXSOpMi8f15th8u56/vuFMd5EfcV2W/B+ojI3+8TlYVvt8PucjqNh3ifiO0WrFOujVYfd/64IeqaYRiabciccY51UqY5VdnfV+jaWF+1zrm2qkPm3PbHKinfTwctH2Q+r9C1Kaz3de2tNWSOlVJmOLbZP36xmOnSmCIw5cIfKAL+Li/j+vwD8jv04PbY3MIfEMVqvaIpUfKvB0Rj6bOcaY5vIOrdi+G59DulmOb4/1RWmvKtj4LJRgL1wDlF+P8ks25wRfbOsOTxEeEoUXwLpV03nSv9zoE+p84xovguosrtdeqdfvsz7BwL/bO8+NtWuhq7nc/IC68kIvcrsReRvPSVf/84x08SI8+DF+70icp0xl12vNL9tx76tU8ZCNvVeKk4W01hbWEYsUiWqFwb3zrXeqN5bgxpElGZ8e5wueycNwx0JErl2ra77nrtds7qnD2QlWEwPUdl2m9P8fS149Zz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"
          alt="伴月灣_鄰公園"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAC/CAMAAAAW/Z6QAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMABw8MFhwtJTRCIjliPdFHq5WJS7lbf212U+vhn8T195ksfwAACOZJREFUeNrs3VuO2zAMheGQoiRbvufmxJNC+99l08xr3woUtOf/4B34gIItijoBAAAAAPBXEoKcAKfEYolKROGTWLrcuhhOgEehPMftnPQEeBTyWuvcGGs8XJLYvq49FRROieZuSBRQeCVqxkc8HBPiCQAAAAAAAAAAAAAA8F+J0LEBt0T0jbOV8EmCxZwLXZnwSaw07TQkDv/CI9HY9K/53mYOXsAh0Ty9ah3XhtPpcEg0X661bncCCo9ES3set+stGQGFQyGm6XHvu8JHEjwSjanpUqGAwidRi9H4Uw+vRAJDOgEAAADQJ4l9k8BoQPglGnOTCj0+8ClYet7XIVND4ZKWaa5fDwb8wyXRfBtrXbpIQOGRlva1jSsT/uGTWJrWG11ocEqC5cRRMrglQVXJ535ZttOxsZG0Z3r5amnChlt62QgoHDv+Eg8AAAAAAAAAAAAAAAAAAAAAgGOBm3rhWIhNw4AveCU2LPOzcHoPPkm81bokPQEeSWyvY5+poHBK89AygQ5uCYPk4RsDlPBP5POQIngk70eEC4fglYiEP4go3JHPTc/6LZDQ3TvcKxQJahbfzNgy37uj/TCR73zGklPKOUYjobsmlrrmWHdKfPKZUzcMXZNyND3cEvGDiKZ+Xtp4oE27Tz5T015u/XMaUo6U0B0T6+Za13yctgeRYDE3U39elvPjOaRCCd0xse5Vt/5QAVUrqe2X6zj+mh+XjhK6a5qn+3qkmyF/s3em223CQBj1CBCIfcd44/3fskiyMHUXt01Ikfxdp01y8ovj6xktoxF58kLrpm/P0zTlVZrxwIeg32HVFgaxmIeBMwGUtKDJWOXTzKkcBI+dWqX4OMSYb9HaBnmMOTRFehb0CEGfIBbIFTjctrgtr1P8Sab4Syp4AEG/95OLrhM82CqGklMB77OhxyTpfM7LHpOkJ4iFor5ea7HV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"
          alt="伴月灣_蘆洲站5分鐘"
        /><img
          data-v-3a78245a=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuoAAACkCAMAAAD2dPuhAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMACA0SIRoWMj4tKUo4VEV1sqTij/OZh2tkXb/Tf8kWT25SAAAJJElEQVR42uydbXuaMBSGPSEh4U3eFEGR//8zl2A0VNvNVuyMPPfcPnS7diG9+3g4OYQVAAAAAAAA90NC0AqAt4d43nO4Dn4ICW/soWizkb4cLHg5gnIfrjxBrBOxAuBnsKwNVp5ALJgv1EWHD4iFQWy1SHi50DcOFgdCHQAAAAAAAAAAAAAAAAAAAAAAAAAAALB4SL8wTgUWBcF58J6Qldv9wrwseFNOfjsInoN3wxUrNAFVDHgzyP5Bt5ivoowBb4QT/RqkOngb6IPojNgJYnQC/UfwDtD4+6y544PtPlcw3h44eIYL0zgPLjADjfhar49vizw8cDA3067LxPMwnNhOBi/7jkQsCPV7YZB98UyqF+t5OOVsOxn8a7MTBYLzmPMwgOuAVs70UXQxwdhuXfexCmDadKnWSnIR+Hf04DnVixVd680dQmNlJ41vq0nEQp5mfd1nKQ+ZRwcOngFNTHeiO6zrXuY6BUIm9bE61kkkoPqiIZfpp0jnmjiOLHHsZNeueyc7BTzd7YdhKFrJUcEsHFpdma49lxe07RPXvVs4ZWfV97sUqi8bWk1Mv4iepmokTc+yW9d9W0uigMusrIaqzCSuS72FDI+Lfm26lMbz9YixXcqL64z51l0nFsaqrcu6VTEuS32FtJ4zLIy4ULemp8bzJMk0SWJsT0fXhfA01kWkkiRJI4S6r5iGsTYwoJmaL6EQ1nTjede2u13bdlly7bp3sR4Irq+vuQgQ6n5iitB1ljzeVrCqh6EzPet2ed5r8nxnZLeun1T3rgdDYwcVi6XewkSUlfuyk4I9Nrk7LV+s6bu8b+qtpm76vLWuc+u6d+tI4xvEvJe3EOOq2QybWnFGs4W6lNp0HenNtiwLTVnWTb4zrnsc66uVf0cMPqpeb4Zhq3hAj5se2PJFKZ3pfb0ti/1Rsy/K7ej6KdaF8LEJAzyHCdkW1T5P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"
          alt="伴月灣_快樂王國"
        />
      </div>
      <ContactInfo />
    </div>

    <GoogleMap />
    <PolicyDialog
      :policyVisible="policyVisible"
      @hidePolicyDialog="hidePolicyDialog"
    />
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
        contacttime: "",
        city: "",
        area: "",
        gender: "",
        infosource: "",
        parking: "",
        houseStyle: "",
        room_type: '',
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

  mounted() {

    const elem = this.$refs.parallax2;

    var parallaxInstance = new Parallax(elem, {
      relativeInput: true,
      selector: '.parallax-item'
    });
  },
  methods: {
    showPolicyDialog() {
      this.policyVisible = true;
    },
    hidePolicyDialog() {
      this.policyVisible = false;
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
        // || !this.form.room_type
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
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
      formData.append("contacttime", this.form.contacttime);
      formData.append("msg", this.form.msg);
      formData.append('room_type', this.form.room_type)
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append("city", this.form.city);
      formData.append("area", this.form.area);
      formData.append("gender", this.form.area);
      formData.append("infosource", this.form.area);
      formData.append("parking", this.form.area);
      formData.append("houseStyle", this.form.area);
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
@import "@/assets/style/function.scss";

.star {
  position: absolute;
  bottom: 1150px;
  left: 0;
  width: 100%;
  opacity: 0.6;
  font-size: 20vw;
  z-index: 10;
  pointer-events: none;
  img {
    position: absolute;
    animation: op 2s ease-in-out infinite alternate;
    opacity: 1;
    &:nth-child(1) {
      top: 0.19em;
      left: 0.06em;
      animation-delay: 0.6s;
      width: 1.93em;
    }
    &:nth-child(2) {
      top: 0.06em;
      left: 0.15em;
      animation-delay: 0s;
      width: 1.75em;
    }
    &:nth-child(3) {
      top: 0.3em;
      left: 0em;
      animation-delay: 1.2s;
      width: 1.94em;
    }
    &:nth-child(4) {
      top: 0.29em;
      right: 0em;
      animation-delay: 0s;
      width: 1.93em;
    }
    &:nth-child(5) {
      top: 0.16em;
      right: 0.1em;
      animation-delay: 0.8s;
      width: 1.75em;
    }
    &:nth-child(6) {
      top: 0.1em;
      right: 0.06em;
      animation-delay: 1.5s;
      width: 1.94em;
    }
    &:nth-child(7) {
      top: 0em;
      left: 1.56em;
      animation-delay: 1s;
      width: 1.93em;
    }
    &:nth-child(8) {
      top: 0.3em;
      left: 1.25em;
      animation-delay: 1.6s;
      width: 1.75em;
    }
    &:nth-child(9) {
      top: -0.15em;
      left: 0.5em;
      animation-delay: 0.1s;
      width: 1.94em;
    }
    &:nth-child(10) {
      top: 0.19em;
      right: 1em;
      animation-delay: 1.4s;
      width: 1.93em;
    }
    &:nth-child(11) {
      top: 0.26em;
      right: 1.1em;
      animation-delay: 0.3s;
      width: 1.75em;
    }
    &:nth-child(12) {
      top: -0.1em;
      right: 0.56em;
      animation-delay: 2s;
      width: 1.94em;
    }
  }
}
@keyframes op {
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.orderbg2 {
  position: absolute;
  width: size(1920);
  bottom: 100px;
  left: 0;
  z-index: 5;
}
.orderbgmoon {
  position: absolute;
  width: size(414);
  bottom: 330px;
  left: size(749);
  z-index: 4;
}
.orderlogo {
  position: absolute;
  width: size(330);
  bottom: 940px;
  left: 50%;
  margin-left: -#{size(165)};
  z-index: 11;
}

.contact1 {
  position: absolute;
  left: size(200);
  width: size(756);
}

.contact2 {
  position: absolute;
  right: -#{size(50)};
  width: size(148);
}
.wave {
  position: absolute;
  left: 0;
  top: size(760);
  height: size(121);
  z-index: 0;
  animation: wave 13s infinite alternate-reverse ease-in-out, fadeIn 1.5s;
  opacity: 0.5;
}

@keyframes wave {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-75%, 0, 0);
  }
}
.bg-img {
  width: 110%;
  position: absolute;
  top: 0;
  right: -2%;
  pointer-events: none;
}
.order-bg {
  //background-color: $order_bg_color;
  background-repeat: no-repeat;
  position: relative;
  background-size: 110vw auto;
  background-position: top;
  font-family: $family3;
  // padding-top: 10vw;
  pointer-events: unset !important;

  input,
  textarea,
  button {
    font-family: $family3;
    background: $order_submit_bg;
    border-radius: $order_submit_borderradius !important;
  }
  .order-top {
    //background-image: url("~@/assets/img/contact_bg.jpg");
    //background: $order_bg_image no-repeat;
    background-color: $order_bg_color;
    background-image: $order_bg_image;
    background-size: cover;
    background-position: top;
    position: relative;
    // padding: 5vw 0;
    // padding-top: 100px;
    height: 2000px;
    padding-top: size(50);
  }
  .order-title {
    font-family: $family1;
    width: auto;
    padding-bottom: 1vw;
    font-weight: 700;
    line-height: 1.3;
    font-size: size(40);
    letter-spacing: size(10);
    text-indent: size(10);
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
    margin-bottom: size(20);
    display: inline-block;
  }
  .order-title-img {
    width: 30vw;
    margin: 3vh auto;
    //margin-bottom: 1vw;

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
    font-size: size(18);
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
    padding-bottom: 18px;
    line-height: 1.5;
    font-weight: 600;
  }

  .order {
    position: relative;
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
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
    height: 300px;
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
    background: $order_input_bg;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 5vw;
      font-size: 16px;
      font-weight: 600;
      opacity: 0.8;
      color: $order_input_label_color;
      text-align: left;
      padding-left: 15px;
      white-space: nowrap;
      line-height: 1.2;
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
  .star {
    position: absolute;
    bottom: 1000px;
    transform: scale(1.5);
  }

  .contact1 {
    left: -#{size-m(80)};
    width: size-m(410);
    top: size-m(50);
  }

  .contact2 {
    right: -#{size-m(15)};
    width: size-m(64);
    top: 0;
  }

  .wave {
    position: absolute;
    left: 0;
    top: unset;
    bottom: -#{size-m(20)};
    height: size-m(75);
    z-index: 0;
    animation: wave 13s infinite alternate-reverse ease-in-out, fadeIn 1.5s;
    opacity: 0.5;
  }

  .order-bg {
    //background-color: $order_bg_color;
    background-image: $order_bg_image_m;
    background-size: contain;
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
      width: 80vw;
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
      background-image: $order_bg_image_m;
      background-size: contain;
      background-position: top;
      background-repeat: repeat;
      // top: 10vw;
      padding-bottom: 0;
      padding-top: 50px;
      height: 1800px;
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
      font-weight: 500;
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
