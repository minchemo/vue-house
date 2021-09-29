<template>
  <div class="section1">
    <div class="float-section">
      <div class="float-btn open">
        <div>
          <font-awesome-icon icon="bars" />
        </div>
      </div>
      <div class="float-menu">
        <div class="close">
          <font-awesome-icon icon="times" />
        </div>
        <div class="list">
          <ul>
            <li v-scroll-to="{ element: `#app`, offset: 0 }">首頁</li>
            <li v-scroll-to="{ element: `.title1`, offset: 0 }">怡家．宜家</li>
            <li v-scroll-to="{ element: `.title2`, offset: 0 }">怡家．宜居</li>
            <li v-scroll-to="{ element: `.title3`, offset: 0 }">怡家．移動</li>
            <li v-scroll-to="{ element: `.title5`, offset: 0 }">怡家．樂活</li>
            <li v-scroll-to="{ element: `.title6`, offset: 0 }">怡家．築夢</li>
            <li v-scroll-to="{ element: `.item6`, offset: 0 }">怡家．格局</li>
            <li
              class="bt_registration"
              v-scroll-to="{ element: `.item-contact`, offset: 0 }"
            >
              怡家．預約
            </li>
            <li v-scroll-to="{ element: `.google-map`, offset: 0 }">
              怡家．位置
            </li>
            <li v-scroll-to="{ element: `.house-info`, offset: 0 }">
              怡家．資訊
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 743 460"
        class="svg-1"
      >
<path class="cls-1" d="M206.9,257.2c-1.2-2.8-2.7-6-4.4-9.5c-49.4,4.5-58.1,5.3-64.5,7.9c-0.7-2.5-2.5-7.6-4.3-12.3l-6.2,2.8
	c-1-3.8-2.8-8.8-4.8-14.2v89.6h-21.3v-79.1c-0.9,5.7-2.2,11.3-3.7,16.8l-16.3-5.6c3.3-9.5,5.8-25.2,6.8-37.2l13.2,1.7v-29.9h21.3
	v27.1l10.2-4.1c2.4,5.2,5.2,11.4,7.4,17l0.1-0.1c3.4-4.6,13.1-22.4,18.5-39.7l22.5,5.5c-5.6,13.3-12.4,26.1-20.3,38.1l30.5-2.1
	c-3.3-4.9-6.7-9.8-10.1-14l17.1-8.4c10.5,12.3,21.4,28.6,26.4,39.8L206.9,257.2z M140.8,261.4h71.8v59.9h-20.6v-5.5h-31.6v5.5h-19.6
	V261.4z M160.4,279.2V298h31.6v-18.8L160.4,279.2z M359.1,252.4c-5.3,3.9-11.3,7.8-17,11.6c5.3,15.1,15.7,28.2,31.9,34.5
	c-4.8,3.8-11.1,11.5-14.1,16.7c-17.2-8.1-27.9-22.4-34.9-41l-3,1.7c3.6,16.3,0.1,31.7-7.3,38c-5.5,5.6-10.7,7.3-19,7.4
	c-3.4,0.1-7.6,0-11.7-0.1c-0.3-5.3-1.9-12.9-5.5-18.4c-11.2,5.1-22.7,9.4-34.4,13c-2.9-6.1-6.7-11.7-11.1-16.8
	c23.4-4.8,51.6-16.1,66.4-27.5c-0.3-1-0.7-2-1.2-2.9c-15,8.5-36.2,17.2-52.8,22c-2.9-5.6-6.5-10.8-10.5-15.6
	c18.2-3.4,42.1-11.5,55-19.2c-0.7-0.8-1.5-1.7-2.4-2.5c-12.9,5.9-26.4,10.5-40.2,13.7c-3.1-5.6-6.7-10.9-10.8-15.8
	c15.6-2.7,31.6-6.9,44.3-12.8h-20.4v-17h82.1v17.1h-30.8c-2.5,2.2-5.2,4.2-8,5.9c4.7,4.2,8.6,9.2,11.7,14.7
	c9.1-6.1,17.7-12.8,25.8-20.2L359.1,252.4z M257.9,232.2h-21v-33.7h52.9c-0.9-2.1-1.8-4.2-2.7-6l23-6.2c2.3,3.9,4.3,8,5.9,12.2h51.6
	v33.7h-22.2V217h-87.6V232.2z M299,299.1c1.5-1.5,2.7-4.6,3.1-8.7c-7.1,4.4-14.5,8.3-22.1,11.8c4.6,0.4,8.5,0.6,11.7,0.6
	S297.2,302.2,299,299.1z M438,275c-4.3,1.1-8.8,2.1-13.2,3.2v43.2h-20.3V283l-18.1,4.2l-5.2-20.8c6.5-1,14.5-2.4,23.3-4.1v-28.3
	h-6.4c-1.1,5.8-2.6,11.5-4.6,17.1c-3.4-1.8-11-4.4-15-5.5c4.6-11.2,7.1-29.4,8.1-46.3l15.9,2.2c-0.3,4.3-0.7,8.7-1.3,13h3.3v-26.5
	h20.3v26.5h11.6V234h-11.6v24.4l11-2.2L438,275z M465.9,217.5h-26.2v-18.3h26.2v-11.1h21.4v11.1h28.6v18.4h-28.6v8.7H510V245h-65.5
	v-18.8h21.4L465.9,217.5z M519.1,274h-12.6v25.4c0,9.7-1.8,15-8.6,18.1c-6.5,3.1-15.3,3.5-26.4,3.5c-0.7-5.9-3.7-14.5-6.4-20.1
	c6.4,0.3,14.7,0.3,17,0.3c2.2,0,3-0.4,3-2.2v-25h-22.3c5.8,5.9,12.3,13.3,15.4,18.6l-16.9,10.5c-3-5.9-10.2-15-16.2-21.6L458,274
	h-18.4v-18.7h45.5v-8h21.4v8h12.6L519.1,274z M635.4,298.6c10.2,0,22.4-0.8,29.1-2.1c0.6,4.9,1.8,14.2,2.8,18.9
	c-6.5,1.7-20.8,1.8-33,1.8h-54.7c-28.3,0-41.4-8.1-41.4-37v-70.2h-5.8v-17.8h127.4v17.8H559.2v71.5c0,12.3,3.7,17,18.5,17
	L635.4,298.6z M563.1,254.3h42.2v39h-42.2V254.3z M638,250.1h-60.2v-34.9H638V250.1z M580.3,279.9h6.8v-12.4h-6.8V279.9z
	 M616.6,228.1h-18.8v9h18.8V228.1z M653.4,293.3h-43.3v-39h43.3V293.3z M634.8,267.6h-7.3v12.4h7.3V267.6z"/>
<path class="cls-2" d="M419.5,1.5H403v0.7l-0.2,0v11.8h-10v17.6h10v83.2h-10v17.6h26.7v-17.6h0l0-83.2l0,0V13.9l0,0V1.5z M499.6,1.8v12.2h-5.1V1.5
	h-16.7v12.4h-49.1v2.5l0,0v116h-9.2v17.6h25.9v-17.7h10.7c9.2,0,16.7-7.9,16.7-17.6l0,0v-70h-27.4V31.6h32.4v100.8
	c0,9.5,7.2,17.3,16.1,17.6l0,0h22.2v-17.6h-21.6v-17.6h5.5l0,0c9-0.3,16.2-8,16.2-17.6V44.8h-16.7v52.4h-5.1V31.6h21.7V1.8H499.6z
	 M456.1,62.4v52.4h-10.7V62.4H456.1z M195.7,114.8V87.7l0,0V70l0,0V40.4l0,0V22.8h-45.2v17.7l0,0V70l0,0v17.7l0,0v27.1l0,0v17.6
	h45.2L195.7,114.8L195.7,114.8z M167.2,40.4H179V70h-11.8V40.4z M167.2,87.7H179v27.1h-11.8L167.2,87.7z M270.3,22.8v-1.2h-64v110.9
	h-10.5v17.6h27.2v-36.1h30.6v36.2h16.7V39.1l0,0L270.3,22.8L270.3,22.8z M222.9,96.3V76.5h30.6v19.8H222.9z M253.6,58.9h-30.6V39.1
	h30.6L253.6,58.9z M288.3,27.8v122.3h71.3c9.2,0,16.7-7.9,16.7-17.6l0,0v-92l0,0V22.8h-88L288.3,27.8z M305,132.4V94.6h54.7v37.9
	L305,132.4z M359.7,76.9H305V40.4h54.6L359.7,76.9z M150.5,0.3h6.6v1.8h-4.9v2.7h4.9v1.8h-4.9v3.6h4.9V12h-6.6V0.3z M178.8,6l3.5,6
	h-2l-2.5-4.3l-2.5,4.3h-2l3.5-6l-3.3-5.7h2l2.3,4l2.3-4h2L178.8,6z M204.1,0.5c-0.8-0.1-1.6-0.2-2.5-0.2h-2.4V12h1.7l0-5.1h0.4
	c0.9,0,1.8,0,2.7-0.2c0.7-0.2,1.3-0.6,1.7-1.1c0.4-0.6,0.6-1.3,0.6-2c0-0.7-0.2-1.5-0.6-2.1C205.3,1,204.7,0.6,204.1,0.5z
	 M204.6,3.6c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.2-0.4,0.4-0.6,0.5c-0.5,0.1-0.9,0.1-1.4,0.1H201l0-2.9h1.5c0.5,0,0.9,0,1.4,0.2
	c0.2,0.1,0.4,0.3,0.6,0.5C204.5,3.1,204.6,3.4,204.6,3.6z M229.1,0c-1,0-2,0.3-2.9,0.8c-0.9,0.5-1.6,1.3-2.1,2.3
	c-0.5,1-0.8,2-0.8,3.1c0,1.6,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.2,1.8c1.6,0,3.1-0.6,4.1-1.8c1.1-1.2,1.7-2.7,1.7-4.4
	c0-1.6-0.6-3.2-1.7-4.4C232.2,0.6,230.7,0,229.1,0z M233.2,6.2c0,0.8-0.2,1.5-0.5,2.2c-0.3,0.6-0.9,1.2-1.5,1.6
	c-0.6,0.4-1.3,0.6-2.1,0.6c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.9-1.2-3.1c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.2,1.4-1.6
	c0.6-0.4,1.3-0.6,2-0.6h0c0.7,0,1.4,0.2,2,0.6c0.6,0.4,1.1,0.9,1.5,1.6C233,4.7,233.2,5.4,233.2,6.2z M257.5,7.2
	c0.3,0.5,0.5,1.2,0.5,1.8c0,0.9-0.3,1.7-1,2.3c-0.6,0.6-1.4,1-2.3,1c-0.7,0-1.4-0.2-1.9-0.6c-0.7-0.5-1.2-1.2-1.5-1.9l-0.2-0.3
	l1.5-0.9l0.2,0.3c0.5,1.1,1.2,1.6,1.9,1.6c0.3,0,0.6-0.1,0.8-0.2c0.5-0.3,0.8-0.8,0.8-1.3c0-0.3-0.1-0.6-0.3-0.9
	c-0.5-0.6-1.1-1.2-1.7-1.7c-0.6-0.5-1.2-1-1.7-1.6c-0.7-1-0.8-2.3-0.2-3.4c0.2-0.4,0.6-0.8,1-1.1c0.9-0.6,2.1-0.6,3,0
	c0.6,0.4,1.1,1,1.5,1.6l0.2,0.3l-1.4,1.1l-0.2-0.3c-0.2-0.4-0.5-0.7-0.9-1c-0.5-0.3-1.1-0.3-1.5,0.1c-0.2,0.2-0.3,0.5-0.3,0.7
	c0,0.2,0,0.4,0.1,0.5c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.1,0.4,0.3,1.3,1.1C256.4,5.7,257,6.4,257.5,7.2z M275.5,0.3h1.7V12h-1.7V0.3z
	 M294,0.3h6.4v1.8H298V12h-1.8V2.1H294V0.3z M317,0.3h1.7V12H317V0.3z M341.8,0c-1,0-2,0.3-2.9,0.8c-0.9,0.5-1.6,1.3-2.1,2.3
	c-0.5,1-0.8,2-0.8,3.1c0,1.6,0.6,3.2,1.7,4.3c1.1,1.2,2.6,1.8,4.1,1.8c1.6,0,3.1-0.6,4.1-1.8c1.1-1.2,1.7-2.7,1.7-4.4
	c0-1.6-0.6-3.2-1.7-4.4C344.9,0.6,343.4,0,341.8,0z M345.9,6.2c0,0.8-0.2,1.5-0.5,2.2c-0.3,0.6-0.9,1.2-1.5,1.6
	c-0.6,0.4-1.3,0.6-2.1,0.6c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.9-1.2-3.1c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.2,1.4-1.6
	c0.6-0.4,1.3-0.6,2-0.6h0c0.7,0,1.4,0.2,2,0.6c0.6,0.4,1.1,0.9,1.5,1.6C345.7,4.7,345.9,5.4,345.9,6.2z M374,0.3V12h-0.7l-6.4-7.7
	V12h-1.8V0.3h0.7l6.4,7.8V0.3H374z M617.6,124.6v22.9h-85.1c0.9-8.7,3.8-17.1,8.3-24.6c4.6-7.7,13.7-18,27.3-30.8
	c11-10.3,17.7-17.3,20.2-21c3.3-5.1,5-10.1,5-15.1c0-5.5-1.5-9.7-4.4-12.6s-6.9-4.4-12.1-4.4c-5.1,0-9.1,1.5-12.1,4.6
	s-4.7,8.2-5.2,15.4l-24.2-2.5c1.4-13.5,6-23.3,13.6-29.2s17.1-8.8,28.5-8.8c12.5,0,22.3,3.4,29.5,10.2c7,6.6,10.9,15.8,10.7,25.5
	c0,5.6-1,11.2-3.1,16.5c-2.5,5.9-5.7,11.4-9.7,16.4c-2.9,3.8-8.2,9.3-15.9,16.4s-12.5,11.8-14.6,14.2c-1.9,2.1-3.6,4.4-5,6.8H617.6z
	"/>
<path class="cls-2" d="M171.4,410.8v10.4h-71v-10.4h14.4v-40.5h41.4v40.5H171.4z M112.6,376h-11.2v-20.1h28.9c-0.6-2.1-1.3-4.1-2.1-6.1l11.3-2.5
	c1.5,2.7,2.7,5.6,3.5,8.6h27.5V376h-11.8v-9.7h-46L112.6,376z M126,380.2v3.8h18.6v-3.8H126z M144.6,393.3H126v4h18.6L144.6,393.3z
	 M126,410.8h18.6v-4.2H126V410.8z M248.2,376.2c-3.1,9.9-7.7,19.3-13.6,27.8c1.7,4.5,3.7,7.1,5.6,7.1c1.6,0,2.5-4,2.9-13.6
	c2.8,2.8,6.1,5,9.7,6.6c-1.7,15.5-5.5,18.8-13.6,18.8c-5.2,0-9.5-3.4-12.9-9.1c-3.6,3.6-7.5,6.7-11.7,9.4c-2.5-3.4-5.3-6.6-8.3-9.5
	c5.7-3.1,10.8-7.1,15.1-12c-2.7-8.9-4.4-19.8-5.3-31.2h-20.6v7.6h19.4c0,0-0.1,2.8-0.1,4c-0.2,16.2-0.6,23.5-2.5,26
	c-1.4,2-3.6,3.2-5.9,3.6c-3,0.4-6.1,0.6-9.1,0.5c-0.3-3.6-1.3-7.2-2.9-10.5c-1.1,8.4-3.3,16.9-7.4,23c-2.9-3.1-6.2-5.7-9.8-7.9
	c5.9-9.4,6.3-23.4,6.3-33.8v-23.8h32c-0.2-3.6-0.2-7.3-0.2-10.9h12.1c-0.1,3.6-0.1,7.3,0.1,10.9h9c-2.5-2-5.2-3.8-7.9-5.5l7-6.9
	c4,2.1,9.6,5.6,12.4,8.2l-4,4.1h8.4v11.3H228c0.5,6.1,1.3,12.2,2.5,18.2c2.5-4.9,4.6-10,6.1-15.2L248.2,376.2z M195.4,388.4
	c-0.2,4-0.5,8.4-1,12.8c2.4,0.2,4.4,0.3,5.7,0.3c0.9,0.1,1.8-0.3,2.4-1c0.6-1,0.9-4.2,1.1-12.1L195.4,388.4z M325.1,384.4
	c-2.9,2.2-6,4.4-9.1,6.6c2.9,8.6,8.4,15.9,17,19.5c-3,2.7-5.5,5.9-7.5,9.4c-9.2-4.6-14.9-12.7-18.6-23.1l-1.6,1
	c1.9,9.2,0.1,17.9-3.9,21.5c-2.9,3.2-5.7,4.1-10.1,4.2c-1.8,0.1-4,0-6.3-0.1c-0.2-3.6-1.2-7.2-2.9-10.4c-5.9,2.9-12.1,5.3-18.4,7.4
	c-1.6-3.4-3.6-6.6-6-9.5c12.5-2.7,27.6-9.1,35.5-15.5c-0.2-0.6-0.4-1.1-0.6-1.7c-8.9,5.2-18.3,9.4-28.2,12.4
	c-1.6-3.1-3.4-6.1-5.6-8.8c9.8-1.9,22.5-6.5,29.4-10.9c-0.4-0.5-0.8-1-1.3-1.4c-6.9,3.3-14.1,5.9-21.5,7.8c-1.7-3.2-3.6-6.1-5.8-9
	c8.3-1.5,16.9-3.9,23.7-7.2h-10.9v-9.7h43.9v9.7h-16.5c-1.3,1.2-2.8,2.4-4.3,3.3c2.5,2.4,4.6,5.2,6.3,8.3c4.9-3.4,9.5-7.3,13.8-11.4
	L325.1,384.4z M271,373h-11.3v-19H288c-0.5-1.2-1-2.4-1.4-3.4l12.3-3.6c1.2,2.2,2.3,4.5,3.2,6.9h27.6v19h-11.8v-8.6H271V373z
	 M293,410.8c1-1.4,1.6-3.1,1.7-4.9c-3.8,2.5-7.7,4.7-11.8,6.6c2.5,0.2,4.5,0.3,6.3,0.3S292,412.5,293,410.8L293,410.8z M375.7,346.1
	v79.2h-4v-79.2H375.7z M488.4,410.8v10.4h-71v-10.4h14.4v-40.5h41.4v40.5H488.4z M429.6,376h-11.2v-20.1h28.9
	c-0.6-2.1-1.3-4.1-2.1-6.1l11.3-2.5c1.5,2.7,2.7,5.6,3.5,8.6h27.5V376h-11.8v-9.7h-46L429.6,376z M442.9,380.2v3.8h18.6v-3.8H442.9z
	 M461.6,393.3h-18.6v4h18.6V393.3z M442.9,410.8h18.6v-4.2h-18.6V410.8z M568.5,410v11.2h-72.1V410h30v-13.7h-20.6v-11.1h20.5v-12.1
	h-15.2c-2,3.8-4.3,7.4-6.9,10.8c-3.3-2.6-6.7-5-10.4-7c6.1-6.5,11.2-17.4,13.9-28.1l12,2.7c-1,3.5-2.1,6.9-3.5,10.3h10.1v-13.8h12
	v13.8h25.9v11.3h-26v12.1h22.7v11.1h-22.7V410H568.5z M589.3,388c-4.9-3.1-9.9-6-15-8.6l6.2-8.6c4.3,2,11.7,5.4,15.2,7.5L589.3,388z
	 M575.1,414.7c5.5-7.9,10.5-16.2,15-24.7l8.5,7.7c-4.2,8.3-9,16.9-13.8,24.8L575.1,414.7z M592.4,366.1c-3.1-2.3-9.9-6.1-14.3-8.7
	l6.5-8.3c4.2,2.1,11.2,5.6,14.6,7.8L592.4,366.1z M629.7,382v8.4h16V423h-10.9v-2.9h-21.4v3.2h-10.4v-32.8h15.8v-8.4h-20.3v-11h20.3
	v-7.3c-4.8,0.7-9.8,1.3-14.4,1.7c-0.6-3.4-1.7-6.7-3.1-9.8c13.3-1.3,27.5-4,36.3-7.7l8.8,9c-5.4,2.1-11,3.7-16.7,4.8v9.3H649v11
	L629.7,382z M634.7,400.8h-21.4v8.9h21.4V400.8z"/>
<polyline class="cls-3" points="641.5,121.7 742,121.7 742,456.7 1,456.7 1,121.7 122.6,121.7 "/>
      </svg>
      <div class="txt0" data-aos="fade" data-aos-delay="700" data-aos-offset="-500" >
        <span>邊間好光景 近享副都心</span>
        塭仔圳｜4併2~3房
      </div>
      <img class="s1bg" src="./s1/s1bg.png" alt="s1bg" v-if="!isMobile" />
      <img class="s1bg" src="./s1/s1bg_m.png" alt="s1bg_m" v-if="isMobile" />

      <img
        class="cloud"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
        src="./s1/cloud-1.png"
        alt=""
      />
      <img
        v-if="isMobile"
        class="cloud-2"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
        src="./s1/cloud-2.png"
        alt=""
      />

      <div class="build">
        <div class="building-3">
          <img src="./s1/building-x.png" alt="" />
        </div>
        <div class="train">
          <img src="./s1/train_s.png" alt="" />
        </div>
      </div>
    </div>

    <div class="main-2">
      <div class="item item0">
        <img v-if="isMobile" class="movehere" src="./s1/movehere.png" alt="" />
        <img v-if="!isMobile" class="item-img" src="./s1/a1.jpg" alt="" />
        <img v-if="isMobile" class="item-img" src="./s1/a1-mo.jpg" alt="" />
        <img
          v-if="!isMobile"
          class="item-img-mask"
          src="./s1/item0-mask.png"
          alt=""
        />
        <img
          v-if="isMobile"
          class="item-img-mask"
          src="./s1/item0-mask-mo.png"
          alt=""
        />
      </div>
      <div class="title">
        <div class="title1">
          <svg
            version="1.1"
            v-if="!isMobile"
            id="svg1"
            class="svg1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1105"
            style="enable-background:new 0 0 1920 1105;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="1102.4883"
              y1="1279.1797"
              x2="798.9469"
              y2="-233.7092"
            >
              <stop offset="0.2067" style="stop-color:#74B3FF" />
              <stop offset="0.5475" style="stop-color:#0062FF" />
              <stop offset="1" style="stop-color:#1D2083" />
            </linearGradient>
            <path
              class="st0"
              d="M1920,1105V33c-86-17-413,90-653,82C378.5,85.4,458.9-67.3,0,36.1V1105"
            />
          </svg>

          <svg
            version="1.1"
            v-if="isMobile"
            id="svg1"
            class="svg1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375 774"
            style="enable-background:new 0 0 375 774;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="267.3254"
              y1="801.4406"
              x2="90.3369"
              y2="-80.6943"
            >
              <stop offset="0.2067" style="stop-color:#74B3FF" />
              <stop offset="0.5475" style="stop-color:#0062FF" />
              <stop offset="1" style="stop-color:#1D2083" />
            </linearGradient>
            <path
              class="st0"
              d="M374.6,774V28.9c-28,4.3-56.6,7.3-82.3,6.4C119.2,29.6,53.1,10.2-0.4,1v773"
            />
          </svg>
          <div class="main-title" data-aos="fade" data-aos-delay="200">
            重劃未來
          </div>
          <div class="subtitle" data-aos="fade" data-aos-delay="400">
            大重劃、大街廓，成家夢想無限大
          </div>
          <div
            v-if="!isMobile"
            class="content"
            data-aos="fade"
            data-aos-delay="600"
          >
            北台灣第三大塭仔圳重劃區，大街廓整體開發，大棟距綠覆環境。<br />
            坐擁重劃區規劃，近享市區繁華機能，雙享共同生活圈。<br />
            成家選怡家，一次買最好，一生住更好。
          </div>
          <div
            v-if="isMobile"
            class="content"
            data-aos="fade"
            data-aos-delay="600"
          >
            北台灣第三大塭仔圳重劃區，大街廓整體開發，<br />
            大棟距綠覆環境。坐擁重劃區規劃，近享市區繁<br />
            華機能，雙享共同生活圈。成家選怡家，一次買最<br />
            好，一生住更好。
          </div>
          <div class="photos" data-aos="fade" data-aos-delay="200">
            <div class="square square1 active">
              <p>明日街廓實景圖</p>
            </div>
            <div class="square square2 next">
              <p>明日街廓實景圖</p>
            </div>
            <div class="square square3 next">
              <p>明日街廓實景圖</p>
            </div>
            <div class="square square4 next">
              <p>明日街廓實景圖</p>
            </div>
            <div v-if="isMobile" class="photos-arrow">
              <div class="photos-arrow-next"></div>
              <div class="photos-arrow-prev"></div>
            </div>
          </div>
          <!--  <img class="building-5" src="./s1/building-5.png" alt="" /> -->
        </div>
        <div class="title2">
          <svg
            version="1.1"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            v-if="!isMobile"
            viewBox="0 0 1920 462"
            style="enable-background:new 0 0 1920 462;"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M769.5,49C431.5-15.6,253-23-3,71.2v217.2c165.1,19.6,309.1,57.1,378.6,75.3c14.2,3.7,28.3,7.4,42.2,11.1c529.6,139,923.1,77.5,1179.8,44c81.4-10.6,199.9-41.9,323.5-97.3V34C1461.5,137.5,1225.1,136.2,769.5,49z"
            />
          </svg>
          <svg
            version="1.1"
            v-if="isMobile"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375 332"
            style="enable-background:new 0 0 375 332;"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M122.3,16.8C73.8,7.5,35.1,1.7,0,0.4v291c158.2,55.2,283.3,42.5,375,26.4v-282
	C294.6,43.3,224.6,36.4,122.3,16.8z"
            />
          </svg>

          <div class="txt-main">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              便利機能
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              麵包與玫瑰花，精采生活全都要
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              新泰路金融商圈，小資理財最上手；<br />
              中平路家樂福商圈，最愛裝滿購物車；<br />
              幸福路佳瑪商圈，饗樂享樂一次到位。
            </div>
          </div>

          <div class="txt-hide txt2-12">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              便利機能
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              麵包與玫瑰花，精采生活全都要
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              新泰路金融商圈，小資理財最上手；<br />
              中平路家樂福商圈，最愛裝滿購物車；<br />
              幸福路佳瑪商圈，饗樂享樂一次到位。
            </div>
          </div>

          <div class="txt-hide txt2-34">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              潮流饗宴
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              逛不停、玩不膩，潮流熱點宏匯廣場
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              超過400個頂尖娛樂品牌，VR ZONE虛擬實境樂園、<br />
              SONY Zepp表演展館、美麗新影城，<br />
              時尚購物、感官饗宴跨領域新地標。
            </div>
          </div>

          <div class="txt-hide txt2-56">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              明星學區
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              文風名校當鄰居，預約資優學習
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              鄰近新泰國小、高詢問度「夢不落幼兒園｣散步就到，<br />
              國小&國中預定地也位於步行生活圈；<br />
              上學離家近，學習有效率。
            </div>
          </div>
        </div>
      </div>
      <div class="item item1" data-title="title2">
        <img class="item-img" src="./s1/item1-8.jpg" alt="" v-if="!isMobile" />
        <img class="item-img" src="./s1/item1-8m.jpg" alt="" v-if="isMobile" />
        <img class="item-img" src="./s1/item1-1.jpg" alt="" />
        <img class="item-img" src="./s1/item1-4.jpg" alt="" />
        <img class="item-img" src="./s1/item1-2.jpg" alt="" />
        <img class="item-img" src="./s1/item1-6.jpg" alt="" />
        <img
          v-if="!isMobile"
          class="item-img-mask"
          src="./s1/item1-mask.png"
          alt=""
        />
        <img
          v-if="isMobile"
          class="item-img-mask"
          src="./s1/item1-mask-mo.png"
          alt=""
        />
      </div>
      <div class="title">
        <div class="title3 text-align-left">
          <svg
            class="svg3"
            v-if="!isMobile"
            version="1.1"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 612"
            style="enable-background:new 0 0 1920 612;"
            xml:space="preserve"
          >
            <g>
              <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="1295.1907"
                y1="244.5132"
                x2="1920"
                y2="244.5132"
              >
                <stop offset="0" style="stop-color:#FFFF0B" />
                <stop offset="1" style="stop-color:#E0A72C" />
              </linearGradient>
              <path
                class="st0"
                d="M1690.6,239.3c-87.6,58.4-199,175.3-395.4,249.7c411.3-138.1,580.9-313.7,624.8-358.9V0
		C1920,0,1778.1,180.9,1690.6,239.3z"
              />
              <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="337.6145"
                x2="1745.3656"
                y2="337.6145"
              >
                <stop offset="0" style="stop-color:#FFFF0B" />
                <stop offset="1" style="stop-color:#E0A72C" />
              </linearGradient>
              <path
                class="st1"
                d="M696.2,603.2c488.6-27.6,807.3-195.6,1049.2-431.3C841.1,747.7,1,69.9,1,69.9L1,64v448.7v0l-1,71.5
		C37.9,593.1,287.3,626.3,696.2,603.2z"
              />
            </g>
          </svg>
          <svg
            version="1.1"
            class="svg3"
            id="圖層_1"
            v-if="isMobile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375 332"
            style="enable-background:new 0 0 375 332;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="242.4738"
              y1="254.1499"
              x2="378.5"
              y2="254.1499"
            >
              <stop offset="0" style="stop-color:#FFFF0B" />
              <stop offset="1" style="stop-color:#E0A72C" />
            </linearGradient>
            <path
              class="st0"
              d="M242.5,299.3c63-11.6,114-40.6,136-62V209C366.5,236.7,303.5,278.7,242.5,299.3z"
            />
            <linearGradient
              id="SVGID_3_"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="158.9983"
              x2="375"
              y2="158.9983"
            >
              <stop offset="0" style="stop-color:#FFFF0B" />
              <stop offset="1" style="stop-color:#E0A72C" />
            </linearGradient>
            <path
              class="st1"
              d="M375,201.2V10.7C208.1,112.9,51.1,32.3,0,0v309.2C68,326.2,239.8,331.5,375,201.2z"
            />
          </svg>
          <div
            class="main-title reverse-color"
            data-aos="fade"
            data-aos-delay="200"
          >
            暢行雙北
          </div>
          <div
            class="subtitle reverse-color"
            data-aos="fade"
            data-aos-delay="400"
          >
            速連城際遊，串聯雙北精華
          </div>
          <div
            class="content reverse-color"
            data-aos="fade"
            data-aos-delay="600"
          >
            台一線快速道路，快意抵達北車核心區域；<br />
            台65線快速道路，轉接國道1號、國道2號，<br
              v-if="isMobile"
            />秒速暢行雙北。
          </div>
        </div>
      </div>
      <div class="item item2">
        <img class="item-img" src="./s1/item2-1.jpg" alt="" />
        <img class="item-img" src="./s1/item2-2.jpg" alt="" />
        <img class="item-img" src="./s1/item2-3.jpg" alt="" />
        <img class="item-img" src="./s1/item2-4.jpg" alt="" />
        <img
          v-if="!isMobile"
          class="item-img-mask"
          src="./s1/item2-mask.png"
          alt=""
        />
        <img
          v-if="isMobile"
          class="item-img-mask"
          src="./s1/item2-mask-mo.png"
          alt=""
        />
      </div>

      <div class="title">
        <div class="title4 text-align-right">
          <svg
            version="1.1"
            class="svg4"
            v-if="!isMobile"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 543"
            style="enable-background:new 0 0 1920 543;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="-5655.1318"
              y1="268.3787"
              x2="-3361.1318"
              y2="268.3787"
              gradientTransform="matrix(-1 0 0 1 -3735.1318 0)"
            >
              <stop offset="0" style="stop-color:#FFFF0B" />
              <stop offset="1" style="stop-color:#E0A72C" />
            </linearGradient>
            <path
              class="st0"
              d="M868,531C292.5,488.5-272,276-374,239C1132,602,1920,0,1920,0v377C1875,396,1400.5,570.3,868,531z"
            />
          </svg>
          <svg
            version="1.1"
            class="svg4"
            v-if="isMobile"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375 423"
            style="enable-background:new 0 0 375 423;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="211.5"
              x2="375"
              y2="211.5"
            >
              <stop offset="0" style="stop-color:#FFFF0B" />
              <stop offset="1" style="stop-color:#E0A72C" />
            </linearGradient>
            <path
              class="st0"
              d="M0,303.1c60,51.8,239.7,149.1,375,110.7V0.5C303.2,85.5,169,141,0,102.7V303.1z"
            />
          </svg>

          <div
            class="main-title reverse-color"
            data-aos="fade"
            data-aos-delay="200"
          >
            迅捷移動
          </div>
          <div
            class="subtitle reverse-color"
            data-aos="fade"
            data-aos-delay="400"
          >
            步行抵捷運，權掌軌道網絡
          </div>
          <div
            class="content reverse-color"
            data-aos="fade"
            data-aos-delay="600"
          >
            輕鬆散步就到機捷A5泰山站，<br
              v-if="isMobile"
            />4站抵台北車站，7站抵達桃園國際機場；<br />
            近擁未來「新五泰轉運站」，<br
              v-if="isMobile"
            />預約國際都會運轉核心。
          </div>
        </div>
      </div>
      <div class="item item3">
        <img class="item-img" src="./s1/item3-1.jpg" alt="" />
        <img class="item-img" src="./s1/item3-2.jpg" alt="" />
        <img class="item-img" src="./s1/item3-3.jpg" alt="" />
        <img
          v-if="!isMobile"
          class="item-img-mask"
          src="./s1/item3-mask.png"
          alt=""
        />
        <img
          v-if="isMobile"
          class="item-img-mask"
          src="./s1/item3-mask-mo.png"
          alt=""
        />
      </div>
      <div class="title">
        <div class="title5">
          <svg
            version="1.1"
            class="svg5"
            v-if="!isMobile"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 390"
            style="enable-background:new 0 0 1920 390;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_5_"
              gradientUnits="userSpaceOnUse"
              x1="2759.0662"
              y1="975.7862"
              x2="879.3441"
              y2="100.2153"
            >
              <stop offset="0.2067" style="stop-color:#74B3FF" />
              <stop offset="0.5475" style="stop-color:#0062FF" />
              <stop offset="1" style="stop-color:#1D2083" />
            </linearGradient>
            <path
              class="st0"
              d="M1920,0c-104.4,19.4-276.6,46-488.2,53.9c-360.1,13.5-526.9-38.6-899.6-32C410.3,24.1,226.3,33.3,0,68.9v206.7
	c164.7,12.9,308.7,37.2,378,49.2c14.2,2.5,28.2,4.9,42.1,7.3c528.1,91.7,920.4,51.1,1176.4,29c81.2-7,200.4-30,323.6-66.6V0z"
            />
          </svg>

          <svg
            version="1.1"
            class="svg5"
            v-if="isMobile"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375 298"
            style="enable-background:new 0 0 375 298;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_5_"
              gradientUnits="userSpaceOnUse"
              x1="629.149"
              y1="343.6652"
              x2="166.783"
              y2="128.2961"
            >
              <stop offset="0.2067" style="stop-color:#74B3FF" />
              <stop offset="0.5475" style="stop-color:#0062FF" />
              <stop offset="1" style="stop-color:#1D2083" />
            </linearGradient>
            <path
              class="st0"
              d="M375.1,1.9c-20.4,3.8-53.8,9-95.2,10.6c-70.5,2.6-103.2-7.6-176.2-6.3C79.9,6.6,43.8,8.4-0.5,15.4
		c0,13.5,0,245,0,258.5c32.2,2.5,60.5,7.3,74,9.6c2.8,0.5,5.5,1,8.2,1.4c103.4,18,180.3,10,230.4,5.7c15.9-1.4,39.2-5.9,63.4-13
		L375.1,1.9z"
            />
          </svg>
          <div class="txt-main">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              萬坪公園
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              收藏都市綠心，樂享好森活
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              「新莊運動公園」22公頃廣闊生態綠地，漫遊都會<br
                v-if="isMobile"
              />森活綠境；<br
                v-if="!isMobile"
              />散步運動，暢快流汗，小小孩&毛小孩<br
                v-if="isMobile"
              />假日放電跑不停。
            </div>
          </div>
          <div class="txt-hide txt5-12" data-i="1">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              萬坪公園
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              收藏都市綠心，樂享好森活
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              「新莊運動公園」22公頃廣闊生態綠地，漫遊都會<br
                v-if="isMobile"
              />森活綠境；<br
                v-if="!isMobile"
              />散步運動，暢快流汗，小小孩&毛小孩<br
                v-if="isMobile"
              />假日放電跑不停。
            </div>
          </div>
          <div class="txt-hide txt5-34" data-i="2">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              快意休閒
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              都會動男女，輕鬆運動好自在
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              「一起動起來，別再當沙發動物！鄰近「新五泰國民運動中心｣，多元運動設施，下班紓壓、假日揮汗，輕鬆釋放運動魂。
            </div>
          </div>
          <div class="txt-hide txt5-5" data-i="3">
            <div class="main-title" data-aos="fade" data-aos-delay="200">
              頂級照護
            </div>
            <div class="subtitle" data-aos="fade" data-aos-delay="400">
              國際醫療園區，守護新五泰健康
            </div>
            <div class="content" data-aos="fade" data-aos-delay="600">
              鄰近大新莊生活圈唯一大型醫學中心「輔大醫療園區｣，匯集國家級醫療資源，給新五泰居民最好的健康照護。
            </div>
          </div>
        </div>
      </div>
      <div class="item item4" data-title="title5">
        <img class="item-img" src="./s1/item4-1.jpg" alt="" />
        <img class="item-img" src="./s1/item4-3.jpg" alt="" v-if="!isMobile"  />
        <img class="item-img" src="./s1/item4-3m.jpg" alt="" v-if="isMobile" />
        <img class="item-img" src="./s1/item4-2.jpg" alt="" />
        <img class="item-img" src="./s1/item4-6.jpg" alt="" />
        <img class="item-img" src="./s1/item4-5.jpg" alt="" v-if="!isMobile" />
        <img class="item-img" src="./s1/item4-5m.jpg" alt="" v-if="isMobile" />
        <img
          v-if="!isMobile"
          class="item-img-mask"
          src="./s1/item4-mask.png"
          alt=""
        />
        <img
          v-if="isMobile"
          class="item-img-mask"
          src="./s1/item4-mask-mo.png"
          alt=""
        />
      </div>
      <div class="title">
        <div class="title6">
          <svg
            version="1.1"
            class="svg6"
            v-if="!isMobile"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 390"
            style="enable-background:new 0 0 1920 390;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_6_"
              gradientUnits="userSpaceOnUse"
              x1="912.3488"
              y1="732.8369"
              x2="987.4792"
              y2="-231.337"
            >
              <stop offset="0.2067" style="stop-color:#74B3FF" />
              <stop offset="0.5475" style="stop-color:#0062FF" />
              <stop offset="1" style="stop-color:#1D2083" />
            </linearGradient>
            <path
              class="st0"
              d="M1923,0h-740.7H0v174c164.9,19.6,303.2,57,372.6,75.2c14.2,3.7,28.2,7.4,42.1,11.1
	c529,138.9,921.9,77.4,1178.2,44c81.3-10.6,206.7-44.7,330.1-100.1V0z"
            />
          </svg>

          <svg
            version="1.1"
            v-if="isMobile"
            class="svg6"
            id="圖層_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 375 298"
            style="enable-background:new 0 0 375 298;"
            xml:space="preserve"
          >
            <linearGradient
              id="SVGID_6_"
              gradientUnits="userSpaceOnUse"
              x1="154.1658"
              y1="554.6024"
              x2="207.1342"
              y2="-125.1593"
            >
              <stop offset="0.2067" style="stop-color:#74B3FF" />
              <stop offset="0.5475" style="stop-color:#0062FF" />
              <stop offset="1" style="stop-color:#1D2083" />
            </linearGradient>
            <path
              class="st0"
              d="M230.6-0.4H0v248.5c32.2,3.8,59.1,11.1,72.7,14.7c2.8,0.7,5.5,1.4,8.2,2.2C184,292,260.6,280,310.6,273.5
	c15.9-2.1,40.3-8.7,64.4-19.5V-0.4H230.6z"
            />
          </svg>
          <div class="main-title" data-aos="fade" data-aos-delay="200">
            宏觀規劃
          </div>
          <div class="subtitle" data-aos="fade" data-aos-delay="400">
            大棟距，大街廓，國際級壯闊視野
          </div>
          <div class="content" data-aos="fade" data-aos-delay="600">
            坐擁七千八百坪4區完整規劃，雄偉建築重繪新<br
              v-if="isMobile"
            />北天際線，<br v-if="!isMobile" />
            以大棟距街廓串聯城市景觀，漫步林<br
              v-if="isMobile"
            />蔭大道，坐享四季風光流轉。
          </div>
        </div>
      </div>
      <div class="item item5">
        <img class="item-img" src="./s1/item5-1.jpg" alt="" />
        <img class="item-img" src="./s1/item5-2.jpg" alt="" v-if="!isMobile" />
        <img class="item-img" src="./s1/item5-2m.jpg" alt="" v-if="isMobile" />
        <img class="item-img" src="./s1/item5-3.jpg" alt="" v-if="!isMobile" />
        <img class="item-img" src="./s1/item5-3m.jpg" alt="" v-if="isMobile" />
        <img class="item-img" src="./s1/item5-4.jpg" alt="" />
        <img class="item-img-mask" src="./s1/item5-mask.png" alt="" />
      </div>

       <svg
          version="1.1"
          class="svg7"
          id="svg7"
          v-if="!isMobile"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 2958"
          style="enable-background:new 0 0 1920 2958;"
          xml:space="preserve"
        >
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="500.0722"
            y1="-350.5462"
            x2="1009.5332"
            y2="1778.2731"
          >
            <stop offset="1.889726e-02" style="stop-color:#74B3FF" />
            <stop offset="3.039975e-02" style="stop-color:#579FFF" />
            <stop offset="4.416089e-02" style="stop-color:#3C8CFF" />
            <stop offset="5.992822e-02" style="stop-color:#267CFF" />
            <stop offset="7.827424e-02" style="stop-color:#1570FF" />
            <stop offset="0.1008" style="stop-color:#0968FF" />
            <stop offset="0.1322" style="stop-color:#0263FF" />
            <stop offset="0.2162" style="stop-color:#0062FF" />
            <stop offset="1" style="stop-color:#1D2083" />
          </linearGradient>
          <path
            class="st0"
            d="M142.7,41.9c-27.8,8.3-55.2,17.3-81.5,28.5C39,79.9,17.7,91-2,103.7V2958h1924V184.6
	c-369.9-62.5-588.8-83.2-921.5-146.7c-182.7-34.9-446.4-59-805.4-11C177.6,31.9,160.1,36.7,142.7,41.9z"
          />
        </svg>

        <svg
          version="1.1"
          v-if="isMobile"
          class="svg7"
          id="svg7"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 375 682"
          style="enable-background:new 0 0 375 682;"
          xml:space="preserve"
        >
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="83.6561"
            y1="-74.58"
            x2="199.0938"
            y2="407.7841"
          >
            <stop offset="1.889730e-02" style="stop-color:#74B3FF" />
            <stop offset="3.039976e-02" style="stop-color:#579FFF" />
            <stop offset="4.416079e-02" style="stop-color:#3C8CFF" />
            <stop offset="5.992813e-02" style="stop-color:#267CFF" />
            <stop offset="7.827416e-02" style="stop-color:#1570FF" />
            <stop offset="0.1008" style="stop-color:#0968FF" />
            <stop offset="0.1322" style="stop-color:#0263FF" />
            <stop offset="0.2162" style="stop-color:#0062FF" />
            <stop offset="1" style="stop-color:#1D2083" />
          </linearGradient>
          <path
            class="st0"
            d="M26.5,8.6C21,10.2,15.6,12,10.4,14.2c-4.4,1.9-8.6,4-12.4,6.6V682h379V36.7C304.1,24.4,261,20.3,195.5,7.8
	c-36-6.9-87.9-11.6-158.7-2.2C33.4,6.6,29.9,7.6,26.5,8.6z"
          />
        </svg>
      <div class="item item6">
        <h1>怡家．格局</h1>
        <swiper :options="swiperOptions" :instanceName="2">
          <swiper-slide
            v-for="item of swiperList"
            :key="item.id"
            :style="{ backgroundImage: `url(${item.imgUrl})` }"
          >
            <img :src="item.imgUrl" alt="" />
          </swiper-slide>

          <div
            v-if="isMobile"
            class="swiper-button-prev prev6"
            slot="button-prev"
          ></div>
          <div
            v-if="isMobile"
            class="swiper-button-next next6"
            slot="button-next"
          ></div>
        </swiper>
      </div>
      <div class="bg">
        <img v-if="!isMobile" src="./s1/bg-2.png" alt="" />
        <img v-if="isMobile" src="./s1/bg-mo.png" alt="" />
      </div>
    </div>

    <div v-if="isMobile" class="zoom">
      <img src="" alt="" />
      <div class="close">
        <font-awesome-icon icon="times" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.section1 {
  .svg-1 {
    width: size(600);
    top: calc(50% + 100vw * (110 - 540) / 1920);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;

    .cls-1 {
      fill: #ffff0b;
    }
    .cls-2 {
      fill: #fff;
    }
    .cls-3 {
      fill: none;
      stroke: #fff;
      stroke-miterlimit: 10;
      stroke-width: 2px;
    }
  }

  .float-section {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    .float-btn {
      width: 3vw;
      height: 3vw;
      background: #1d2083;
      border-radius: 100%;
      line-height: 3vw;
      color: yellow;
      font-size: 1vw;
      cursor: pointer;
      position: absolute;
      left: 2vw;
      top: 2vw;
    }

    .float-menu {
      position: absolute;
      left: 1vw;
      top: 1vw;
      width: 20vw;
      background: #9fc9f5;
      //height: 100h;
      box-shadow: 0 0 20px #4660864f;
      display: none;
      padding: 0 0 2em;

      .close {
        width: 3vw;
        height: 3vw;
        background: #1d2083;
        border-radius: 100%;
        line-height: 3vw;
        color: yellow;
        font-size: 1vw;
        left: 1vw;
        top: 1vw;
        position: absolute;
        cursor: pointer;
      }

      .list {
        width: 75%;
        margin: 0 auto;
        ul {
          padding-top: 6vw;

          li {
            border-top: 1px solid #1d2083;
            font-size: 24px;
            font-weight: bold;
            color: yellow;
            padding-top: 12px;
            padding-bottom: 12px;
            transition: all 0.1s;
            cursor: pointer;

            &:hover {
              color: #1d2083;
            }
          }
        }
      }
    }
  }
  .main {
    position: relative;
    width: 100vw;
    height: 58vw;
    background: rgb(196, 255, 237);
    background: linear-gradient(
      30deg,
      rgba(196, 255, 237, 1) 20%,
      rgba(41, 102, 255, 1) 100%
    );
    overflow: hidden;

    .logoTitle {
      z-index: 1;
      width: 32vh;
      position: absolute;
      top: 21vh;
      right: 39vh;
    }

    .t1 {
      z-index: 1;
      width: 32vh;
      position: absolute;
      top: 21vh;
      right: 39vh;
    }

    .t2 {
      z-index: 1;
      width: 72vh;
      position: absolute;
      top: 39vh;
      right: 19vh;
    }
    .txt0 {
      position: absolute;
      top: calc(50% - 2vw);
      font-size: 2.1vw;
      font-weight: 700;
      line-height: 1.4;
      left: 0;
      right: 0;
      z-index: 50;
      color: #1d2083;
      span {
        display: block;
        letter-spacing: 0.02em;
      }
    }
    .s1bg {
      position: absolute;
      left: 0;
      z-index: 12;
      bottom: 0;
      width: 100%;
    }
    /*
    .building-1 {
      z-index: 0;
      width: 45vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .building-2 {
      z-index: 2;
      width: 18.5vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }
 */
    .building-4 {
      z-index: 2;
      width: 8vw;
      position: absolute;
      right: 0;
      bottom: 31vw;
    }

    .tree {
      z-index: 2;
      width: 44vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .cloud {
      z-index: 15;
      width: 80vw;
      position: absolute;
      right: 5%;
      top: 2%;
      animation: cloud 8s ease-in-out infinite alternate;
    }

    @keyframes cloud {
      to {
        transform: translateX(-10%);
      }
    }

    .build {
      width: 100%;
      height: size(200);
      position: absolute;
      top: 70.4%;
      left: 0;
      overflow: hidden;
      z-index: 11;
      pointer-events: none;

      .building-3 {
        top: 0;
        right: 0;
        position: absolute;
        img {
          width: 100%;
        }
      }

      .train {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;

        img {
          width: 100%;
          animation: train 5s linear infinite;
          transform: translateX(100%);
        }
      }

      @keyframes train {
        to {
          transform: translateX(0);
        }
      }
    }
  }
  .main-2 {
    position: relative;
    overflow: hidden;
    margin-top: 0;
    z-index: 10;
    margin: -48vw 0 0 0;

    .title {
      font-family: "Noto Sans TC", serif;
      position: relative;
      z-index: 100;
      width: 100%;
      /*  background: url("./s1/title1_bg.png") no-repeat 0 77.04vw;
      background-size:100% auto;
      height: 200vw;
      top: 0; */

      .main-title {
        font-size: size(46);
        font-weight: bold;
        color: #ffff0b;
        position: relative;
        z-index: 3;

        &.reverse-color {
          color: #0042ad;
        }
      }
      .subtitle {
        font-size: size(24);
        margin-top: 0.6667em;
        margin-bottom: 0.833em;
        font-weight: bold;
        color: #fff;
        position: relative;
        z-index: 3;

        &.reverse-color {
          color: #0042ad;
        }
      }

      .content {
        font-size: size(18);
        line-height: 1.5;
        color: #fff;
        position: relative;
        z-index: 3;

        &.reverse-color {
          color: #606060;
        }
      }

      .title1 {
        position: relative;
        //transform: translate(-50%, 0%);
        //top: 90vw;
        margin: -6vw 0 0 0;
        padding: 12vw 0 0 0;

        //  left: 0;
        width: 100%;
        .svg1 {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
        }
        .st0 {
          fill: url(#SVGID_1_);
        }

        .photos {
          display: flex;
          margin-top: 2vw;
          justify-content: center;

          .square {
            width: 18vw;
            height: 18vw;
            background: #eee;
            margin: 0.2vw;
            background-size: cover;
            background-position: center center;
            box-shadow: 0 0 20px rgb(0 0 0 / 25%);
            position: relative;

            p {
              position: absolute;
              bottom: 5%;
              left: 5%;
              color: #fff;
              font-size: 14px;
            }

            &.square1 {
              background-image: url("./s1/item5-1.jpg");
            }
            &.square2 {
              background-image: url("./s1/item5-2.jpg");
            }
            &.square3 {
              background-image: url("./s1/item5-3.jpg");
            }
            &.square4 {
              background-image: url("./s1/item5-4.jpg");
            }
          }
        }

        .building-5 {
          position: absolute;
          width: 36vw;
          bottom: -13vw;
          right: 6vw;
        }
      }

      .title2 {
        position: relative;
        // transform: translate(-50%, 0%);
        top: 0;
        left: 0;
        width: 100%;
        padding: 5vw 0 0 0;
        margin: 10vw 0 -4vw 0;

        svg {
          width: calc(100% + 2px);
          z-index: 2;
          position: absolute;
          top: -3.5vw;
          left: -1px;
        }
        .st0 {
          fill: #0042ad;
        }

        .txt-hide {
          display: none;
        }
      }

      .title3 {
        margin: -8vw 0 -15vw 0;
        padding: 7.5vw 0 0 22.5vw;
        position: relative;
        //    transform: translate(-114%, 0%);
        top: 0;
        left: 0;
        .svg3 {
          position: absolute;
          width: 100%;
          top: -13vw;
          left: 0;
        }
        .st0 {
          fill: url(#SVGID_2_);
        }
        .st1 {
          fill: url(#SVGID_3_);
        }
      }

      .title4 {
        margin: -5.5vw 0 -15vw 0;
        padding: 2vw 16.5vw 0 0;
        position: relative;
        top: 0;
        left: 0;
        .svg4 {
          position: absolute;
          width: 100%;
          top: -13vw;
          left: 0;
        }
        .st0 {
          fill: url(#SVGID_4_);
        }
      }

      .title5 {
        margin: 0vw 0 -15vw 0;
        padding: 2.5vw 0 0 0;
        position: relative;
        top: 0;
        left: 0;
        .svg5 {
          position: absolute;
          width: 100%;
          top: -4vw;
          left: 0;
        }
        .st0 {
          fill: url(#SVGID_5_);
        }
        .txt-hide {
          display: none;
        }
      }

      .title6 {
        position: relative;
        padding: 3vw 0 0 0;
        margin: 0vw 0 -3vw 0;
        top: 0;
        left: 0;
        .svg6 {
          position: absolute;
          width: 100%;
          top: 0vw;
          left: 0;
        }
        .st0 {
          fill: url(#SVGID_6_);
        }
        .txt-hide {
          display: none;
        }
      }
    }
        .svg7 {
          position: relative;
          width: 100%;
          margin: -11.5vw 0 -140.5vw 0;
          z-index: 6;
        //  top: 0vw;
      //    left: 0;
        }
        .st0 {
          fill: url(#SVGID_7_);
        }
        .txt-hide {
          display: none;
        }

    .item {
      position: relative;
      width: 100%;
      cursor: pointer;

      &.bigplan {
        cursor: initial;
      }

      .item-img-mask {
        display: none;
      }
    }

    .item0 {
      z-index: 1;
      .movehere {
        width: 100%;
        position: absolute;
        left: 0;
        top: 98vw;
        z-index: 1;
        pointer-events: none;
      }
    }

    .item1 {
      top: 0;
      z-index: 10;
      height: calc(100vh - 1vw);
    }

    .item2 {
      top: 0;
      z-index: 9;
      height: calc(100vh + 4vw);
      &::before {
        z-index: 5;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8vw;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    .item3 {
      top: 0;
      z-index: 8;
      height: calc(100vh + 4vw);
    }

    .item4 {
      top: 0;
      z-index: 7;
      height: calc(100vh + 4vw);
    }

    .item5 {
      top: 0;
      z-index: 6;
      height: calc(100vh - 3vw);
    }

    .item6 {
      display: block;
      top: 0;
      z-index: 7;
      padding: 4vw 0 0 0;
      margin: -7vw 0 7vw 0;

      .svg6 {
        position: absolute;
        width: 100%;
        top: -3vw;
        left: 0;
      }
      .st0 {
        fill: url(#SVGID_7_);
      }
      .txt-hide {
        display: none;
      }

      h1 {
        font-size: 46px;
        font-weight: bold;
        color: #ffff0b;
        position: absolute;
        transform: translate(-187%, 0%);
        left: 50%;
      }

      .photos {
        display: flex;
        justify-content: center;
        padding-top: 10vw;

        .photo {
          width: 30vw;
          height: 20vw;
          background: #606060;
          z-index: 1;
          position: relative;
          box-shadow: 0 0 20px rgb(0 0 0 / 30%);
          transition: all 0.3s;
          cursor: pointer;
          .img {
            width: 100%;
          }

          .info {
            position: absolute;
            width: 100%;
            height: auto;
            background: #fff;
            bottom: 0;
            left: 0;
            padding: 6px 0;
          }

          &:hover {
            box-shadow: 0 0 20px rgb(0 0 0 / 60%);
          }

          &.active {
            z-index: 2;
            transform: scale(1.2);
          }
        }
      }

      .swiper-container {
        margin-top: 0;
        width: 100%;
        padding: 5vw 0;
        .swiper-wrapper{}
        .swiper-slide {
        //  width:size(1110);
          background-size: cover;
          background-repeat: no-repeat;
          transition: transform 0.4s;
          filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.54));
          transform:scale(0.3);
            z-index: 7;
            opacity: 0;
          &:hover {
            cursor: pointer;
          }

          img {
            width: 100%;
            visibility: hidden;
          }
          &.swiper-slide-prev {
            transform:translateX(50%)scale(0.7);
            z-index: 9;
            opacity: .8;
          }
          &.swiper-slide-next {
            transform:translateX(-50%)scale(.7);
            z-index: 9;
            opacity: .8;
          }
          &.swiper-slide-active {
            z-index: 10;
            transform:translateZ(0) scale(1);
            backface-visibility: hidden;
            opacity: 1;
          }
        }
      }
    }

    .item-contact {
      //上面區塊高
      margin: -7vw 0 0 0;
      position: relative;
      z-index: 50;
    }

    .bg {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      overflow: hidden;
      pointer-events: none;

      img {
        width: 100%;
        transform: scale(1.01);
        transform-origin: center center;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    .item {
      &.bigplan {
        cursor: pointer;
      }
    }

    .svg-1 {
      width: size-m(300);
      top: size-m(100);
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 100;

      .cls-3 {
        stroke-width: 2px;
      }
    }

    .float-section {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999;

      .float-btn {
        width: 14vw;
        height: 14vw;
        line-height: 14vw;
        font-size: 6vw;
        left: 5vw;
        top: 5vw;
      }

      .float-menu {
        position: absolute;
        left: 0vw;
        top: 0vw;
        width: 100vw;
        background: #0065e9f2;
        height: 100vh;
        box-shadow: 0 0 20px #4660864f;
        display: none;

        .close {
          width: 14vw;
          height: 14vw;
          line-height: 14vw;
          font-size: 6vw;
          left: 5vw;
          top: 5vw;
        }

        .list {
          width: 100vw;
          ul {
            padding-top: 20vw;
            width: 80vw;
            margin: 0 auto;

            li {
              border-top: 1px solid #1d2083;
              font-size: 24px;
              font-weight: bold;
              color: yellow;
              padding-top: 12px;
              padding-bottom: 12px;
              transition: all 0.1s;
              cursor: pointer;

              &:hover {
                color: #1d2083;
              }

              &:first-child {
                border: 0;
                color: #1d2083;
              }
            }
          }
        }
      }
    }

    .main {
      position: relative;
      width: 100vw;
      height:calc(100vw * 635 / 375);

      .t1 {
        width: 20vh;
        top: 21vh;
        right: 50%;
        margin-right: -10vh;
      }

      .t2 {
        width: 80vw;
        top: 31vh;
        right: 50%;
        margin-right: -40vw;
      }
      .txt0 {
        font-size: 7vw;
      }

      .building-1 {
        width: 90vw;
        left: -18vw;
      }

      .building-2 {
        width: 39.5vw;
        left: -20vw;
      }

      .tree {
        width: 80vw;
        left: -12vw;
      }

      .cloud {
        width: 120vw;
      }

      .cloud-2 {
        z-index: 15;
        width: 22vw;
        position: absolute;
        right: 10%;
        bottom: 18%;
        animation: cloud-2 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }

      @keyframes cloud-2 {
        0% {
          bottom: 18%;
          right: 10%;
        }
        40% {
          bottom: 17%;
          right: 11%;
        }
        70% {
          bottom: 18%;
          right: 12%;
        }
        100% {
          bottom: 18%;
          right: 10%;
        }
      }

      .build {
        height: size-m(200);
        top: 88%;
        .building-3 {
          img {
            width: 200%;
          }
        }

        .train {
          width: 200%;
          img {
            width: 100%;
            animation: train 5s linear infinite;
            transform: translateX(100%);
          }
        }
      }
    }

    .main-2 {
      margin-top: -40vw;
      .title {
        .main-title {
          font-size: 28px;
        }
        .subtitle {
          font-size: 18px;
          margin-top: 16px;
          margin-bottom: 20px;
          font-weight: bold;
          color: #fff;

          &.reverse-color {
            color: #0042ad;
          }
        }

        .content {
          font-size: 14px;
          line-height: 1.5;
          color: #fff;

          &.reverse-color {
            color: #606060;
          }
        }

        .title1 {
          //  top: 238vw;
          width: 100%;
          .svg1 {
            top: -17vw;
          }

          .photos {
            justify-content: center;
            align-items: center;
            padding: 50vw 0;

            .square {
              width: 80vw;
              height: 80vw;
              margin: 0;
              position: absolute;
              transition: all 0.3s;

              p {
              }

              &.square1 {
                transform: translate(100vw, 0);
              }
              &.square2 {
                transform: translate(100vw, 0);
              }
              &.square3 {
                transform: translate(100vw, 0);
              }
              &.square4 {
                transform: translate(100vw, 0);
              }

              &.next {
                transform: translate(100vw, 0);
              }

              &.prev {
                transform: translate(-100vw, 0);
              }

              &.active {
                transform: translate(0, 0);
              }
            }

            .photos-arrow {
              position: relative;
              z-index: 5;
              display: flex;
              justify-content: space-between;
              width: 92vw;
              flex-flow: row-reverse;

              .photos-arrow-prev {
                width: 20px;
                height: 20px;
                color: #fff;
                border-bottom: 2px solid;
                border-left: 2px solid;
                transform: rotate(45deg);
              }
              .photos-arrow-next {
                width: 20px;
                height: 20px;
                color: #fff;
                border-bottom: 2px solid;
                border-left: 2px solid;
                transform: rotate(-135deg);
              }
            }
          }

          .building-5 {
            display: none;
          }
        }
        .title2 {
          //      top: 442vw;
          width: 100%;
          padding:25vw 0 0 0;margin: 10vw 0 10vw 0;
        }
        .title3 {
          background: #fff;
          width: 100%;
          padding: 15vw 0 0 15vw;
          margin: -4vw 0 -3vw 0;
        }
        .title4 {
          width: 100%;
          padding: 12vw 16.5vw 0 0;
          margin: -0.5vw 0 -6vw 0;
          .svg4 {
            top: -30vw;
          }
        }
        .title5 {
          padding: 15vw 0 0 0;
          width: 100%;
          margin: 0vw 0 15vw 0;
        }
        .title6 {
          padding: 15vw 0 0 0;
          width: 100%;
          margin: 0vw 0 11vw 0;
        }
      }

      .item0 {
        top: -12vw;
      }

      .item1 {
        height:100vw;
     //   height: calc(100vh - 60vw);
        //   top: 480vw;
      }

      .item2 {
        height:100vw;
        //    top: 632vw;
        // height: calc(100vh - 60vw);
      }

      .item3 {
        height:100vw;
        //   top: 774vw;
        // height: calc(100vh - 60vw);
      }

      .item4 {
        height:100vw;
        //  top: 916vw;
        // height: calc(100vh - 60vw);
      }

      .item5 {
        height:100vw;
        //    top: 1073vw;
       // height: calc(100vh - 60vw);
      }

      .item6 {
        padding-top:10vw;
        margin: -25vw 0 0 0;
        h1 {
          font-size: 28px;
          transform: translate(-108%, 0%);
          margin: 3vw 0 0 0;
        }

        .photos {
          padding-top: 20vw;

          .photo {
            width: 70vw;
            height: 50vw;
            position: absolute;

            &:hover {
              box-shadow: 0 0 20px rgb(0 0 0 / 60%);
            }

            &.active {
              z-index: 4;
              transform: scale(1.2) translate(0, 0);
            }

            &.left {
              transform: translate(-12vw, 0);
            }

            &.right {
              transform: translate(12vw, 0);
            }
          }
          .photo-2 {
            z-index: 3;
          }
        }

        .swiper-container {
          margin-top: 20vw;
          width: 100% !important;
          padding: 0 !important;

          .swiper-slide {
            background-size: cover;
            background-repeat: no-repeat;
            transition: transform 0.4s;
            filter: unset;
            border: 1px solid rgb(119, 119, 119);
            &:hover {
              border-color: initial;
              cursor: pointer;
            }

            img {
              width: 100%;
              visibility: hidden;
            }

            &.swiper-slide-active {
              z-index: 10;
              transform: perspective(1px) translateZ(0) scale(1);
              backface-visibility: hidden;
            }
          }
        }
      }
      .item-contact {
      margin: -30vw 0 0 0;
        position: relative;
        z-index: 50;
      }
    }
  }
}
.zoom {
  position: fixed;
  z-index: 5000;
  width: 100%;
  height: 100%;
  background: #eee;
  top: 0;
  left: 0;
  display: none;
  overflow: auto;

  img {
    height: 100%;
  }

  .close {
    z-index: 10;
    position: fixed;
    right: 15px;
    top: 15px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgb(0, 122, 255, 0.9);
    color: yellow;
    border-radius: 100px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import slider from "@/mixins/slider.js";
import ContactSection from "@/layouts/ContactSection.vue";

export default {
  name: "section1",
  components: {
    ContactSection
  },
  mixins: [slider],
  data() {
    return {
      isMobile,
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        initialSlide: 1,
        watchOverflow: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        autoplay: {
          delay: 5000
        },
        speed: 500,
        loop: true,
        slidesPerView: isMobile ? 1 : 2.1,
        spaceBetween: isMobile ? 1 : 0,
        loop: isMobile ? true : true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./s1/item6-1.jpg")
        },
        {
          id: "0002",
          imgUrl: require("./s1/item6-2.jpg")
        },
        {
          id: "0003",
          imgUrl: require("./s1/item6-1.jpg")
        },
        {
          id: "0004",
          imgUrl: require("./s1/item6-2.jpg")
        },
        {
          id: "0005",
          imgUrl: require("./s1/item6-1.jpg")
        },
        {
          id: "0006",
          imgUrl: require("./s1/item6-2.jpg")
        },
        {
          id: "0007",
          imgUrl: require("./s1/item6-1.jpg")
        },
        {
          id: "0008",
          imgUrl: require("./s1/item6-2.jpg")
        }
      ]
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    }
  },
  mounted() {
    // 輪播分頁按鈕產製
    function generatePagination(items) {
      let pH = "<div class='item-cal-pagination'>";
      for (let i = 0; i < items; i++) {
        pH += `<div data-index="${i}" class="item-cal-pagination-dot ${
          i == 0 ? "active" : ""
        }"></div>`;
      }
      pH += "</div>";

      return pH;
    }

    // 輪播前後頁按鈕
    function generateArrowButton() {
      let h = "";

      let arrowNext = "<div class='next'></div>";
      let arrowPrev = "<div class='prev'></div>";

      h += arrowNext + arrowPrev;
      return h;
    }

    //輪播背景處理
    $("#section1 .item").each(function(index, value) {
      let itemImg = $(value).find(".item-img");
      let maskImgSrc = $(value)
        .find(".item-img-mask")
        .attr("src");

      let box = "";

      if (index == 0 && !isMobile) {
        $(value).addClass("bigplan");
      }

      $(itemImg).each(function(i, val) {
        let imgSrc = $(val).attr("src");

        let imgSize = "width:100%;";
        if (isMobile && index == 0) {
          imgSize = "height:240vw;";
        } else if (isMobile) {
          imgSize = "width:100%;";
        }

        if (index == 0 && isMobile) {
          box += `
              <div class="${i == 0 ? "active" : ""}"
              data-index="${i}"
              style="
              mask: url(${maskImgSrc}) no-repeat center center;
              -webkit-mask: url(${maskImgSrc}) no-repeat center center;
              -webkit-mask-size: 100%;
              -webkit-mask-position: top center;
              overflow-y: hidden;
              overflow-x: scroll;
              ">
                <img class="bigplan" style="${imgSize}" src="${imgSrc}">
              </div>
            `;
        } else if (index == 1) {
          box += `
              <div class="item-cal ${i == 0 ? "active" : ""}"
              data-index="${i}"
              style="
              background-image:url(${imgSrc});
              background-size: cover;
              mask: url(${maskImgSrc}) no-repeat center center;
              -webkit-mask: url(${maskImgSrc}) no-repeat center center;
              mask-size: cover;
              -webkit-mask-size: cover;
              ">
                <img style="visibility:hidden;${imgSize}" src="${imgSrc}">
              </div>
            `;
        } else {
          box += `
              <div class="item-cal ${i == 0 ? "active" : ""}"
              data-index="${i}"
              style="
              background-image:url(${imgSrc});
              background-size: cover;
              ">
                <img style="visibility:hidden;${imgSize}" src="${imgSrc}">
              </div>
            `;
        }
      });

      $(value)
        .find(".item-img")
        .remove();

      $(value)
        .find(".item-img-mask")
        .remove();

      if (index == 0 && isMobile) {
        $(value).append(box);
      } else {
        $(value).append(`<div class="item-cal-box">${box}</div>`);

        let firstImage = $(value)
          .find("img")
          .eq(0);

        $(firstImage).one("load", function() {
          let height = $(value)
            .find(".item-cal")
            .height();

          $(value)
            .filter(".item0")
            .find(".item-cal-box")
            .height(height + "px");
          $(value)
            .not(".item0")
            .find(".item-cal-box")
            .height("100%")
            .find(".item-cal")
            .height("100%")
            .find("img")
            .css({ height: "100%", "object-fit": "cover" });
        });
      }

      $(value)
        .not(".item0")
        .find(".item-cal-box")
        .append(generatePagination(itemImg.length))
        .append(generateArrowButton());
    });

    //鳥瞰圖捲動偵測
    $(".bigplan")
      .parent()
      .on("scroll", function() {
        $(".movehere").fadeOut();
      });

    function updateTxt(item, title) {
      let currentIndex = $(item)
        .find(".item-cal-pagination .item-cal-pagination-dot.active")
        .attr("data-index");

      let mainTxt = $("." + title).find(".txt-main");
      let targetTxt;

      if (title == "title5") {
        if (currentIndex == 0 || currentIndex == 1 || currentIndex == 2) {
          targetTxt = $("." + title)
            .find(".txt5-12")
            .html();
        } else if (currentIndex == 3) {
          targetTxt = $("." + title)
            .find(".txt5-34")
            .html();
        } else if (currentIndex == 4) {
          targetTxt = $("." + title)
            .find(".txt5-5")
            .html();
        }
      } else if (title == "title2") {
        if (currentIndex == 0 || currentIndex == 1 || currentIndex == 2) {
          targetTxt = $("." + title)
            .find(".txt2-12")
            .html();
        } else if (currentIndex == 3) {
          targetTxt = $("." + title)
            .find(".txt2-34")
            .html();
        } else if (currentIndex == 4) {
          targetTxt = $("." + title)
            .find(".txt2-56")
            .html();
        }
      }

      $(mainTxt).html(targetTxt);
    }

    //輪播圖分頁按鈕監聽
    $(".item-cal-pagination-dot").click(function() {
      let parent = $(this).parent();
      let item = $(this).closest(".item");
      let targetIndex = $(this).attr("data-index");

      item.find(".item-cal").removeClass("active");
      parent.find(".item-cal-pagination-dot").removeClass("active");

      item.find(".item-cal[data-index=" + targetIndex + "]").addClass("active");

      $(this).addClass("active");

      let titleData = item.attr("data-title");

      if (titleData == "title5") {
        updateTxt(item, "title5");
      } else if (titleData == "title2") {
        updateTxt(item, "title2");
      }

      updatePaginationBtnStatus();

      /*$.each(autoPlayInternal, function(i, val) {
        clearInterval(val);
      });*/
    });
    $(".next").click(function() {
      let target = $(this);
      let next = target
        .closest(".item-cal-box")
        .find(".item-cal-pagination-dot.active")
        .next();

      next.click();

      updatePaginationBtnStatus();
    });
    $(".prev").click(function() {
      let target = $(this);

      let prev = target
        .closest(".item-cal-box")
        .find(".item-cal-pagination-dot.active")
        .prev();

      prev.click();

      updatePaginationBtnStatus();
    });

    $(".item6 .photos .photo").click(function() {
      $(".item6 .photos .photo").removeClass("active");
      $(this)
        .removeClass("right left")
        .addClass("active");

      if (isMobile) {
        $(this)
          .next()
          .addClass("right");
        $(this)
          .prev()
          .addClass("left");
      }
    });

    $(".float-btn.open").click(function() {
      $(".float-menu").show();
    });

    $(".float-menu .close").click(function() {
      $(".float-menu").hide();
    });

    if (isMobile) {
      $(".item0 .item-cal").scrollLeft(320);

      $(".item0 .item-cal").on("scroll", function() {
        $(".item0 .movehere").hide();

        setTimeout(function() {
          $(".item0 .movehere").fadeIn();
        }, 2000);
      });

      //photos
      let currentPhoto = 1;

      function carousellPhotos(type) {
        if (type == "prev") {
          if (currentPhoto == 1) {
            return;
          } else {
            currentPhoto = currentPhoto - 1;
          }
        } else {
          if (currentPhoto == 4) {
            return;
          } else {
            currentPhoto = currentPhoto + 1;
          }
        }

        $(".photos .square.active")
          .removeClass("next active")
          .addClass("prev");
        $(".photos .square" + currentPhoto)
          .removeClass(type)
          .addClass("active");
        $(".photos .square" + currentPhoto)
          .next()
          .removeClass("prev")
          .addClass("next");
      }

      $(".photos-arrow .photos-arrow-prev").click(function() {
        carousellPhotos("prev");
      });
      $(".photos-arrow .photos-arrow-next").click(function() {
        carousellPhotos("next");
      });

      $(".swiper-slide").click(function() {
        let img = $(this)
          .find("img")
          .attr("src");

        $(".zoom img").attr("src", img);
        $(".zoom").fadeIn();
      });

      $(".zoom .close").click(function() {
        $(".zoom").fadeOut();
      });
    }

    let hammerItems1 = $(".item6 .photos .photo");

    $.each(hammerItems1, function(i, val) {
      let hammertime = new Hammer($(val)[0]);
      hammertime.on("swipeleft", function(ev) {
        let target = $(ev.target).parent();
        target.next().click();
      });
      hammertime.on("swiperight", function(ev) {
        let target = $(ev.target).parent();
        target.prev().click();
      });
    });

    let hammerItems2 = $(".item-cal");

    $.each(hammerItems2, function(i, val) {
      let hammertime = new Hammer($(val)[0]);
      hammertime.on("swipeleft", function(ev) {
        let target = $(ev.target);
        let targetIndex = parseInt(target.attr("data-index")) + 1;

        let targetEl = target
          .parent()
          .find(".item-cal-pagination-dot[data-index='" + targetIndex + "']");

        if (targetEl.length == 0) {
          target
            .parent()
            .find(".item-cal-pagination-dot[data-index=0]")
            .click();
        } else {
          targetEl.click();
        }

        $.each(autoPlayInternal, function(i, val) {
          clearInterval(val);
        });
      });

      hammertime.on("swiperight", function(ev) {
        let target = $(ev.target);
        let targetIndex = parseInt(target.attr("data-index")) - 1;

        let targetEl = target
          .parent()
          .find(".item-cal-pagination-dot[data-index='" + targetIndex + "']");

        let total = target.parent().find(".item-cal-pagination-dot").length;

        if (targetEl.length == 0) {
          target
            .parent()
            .find(".item-cal-pagination-dot[data-index=" + (total - 1) + "]")
            .click();
        } else {
          targetEl.click();
        }

        $.each(autoPlayInternal, function(i, val) {
          clearInterval(val);
        });
      });
    });

    let hammerItems3 = $(".title1 .photos .square");

    $.each(hammerItems3, function(i, val) {
      let hammertime = new Hammer($(val)[0]);
      hammertime.on("swipeleft", function(ev) {
        let target = $(ev.target);
        target
          .parent()
          .find(".photos-arrow-next")
          .click();
      });
      hammertime.on("swiperight", function(ev) {
        let target = $(ev.target);
        target
          .parent()
          .find(".photos-arrow-prev")
          .click();
      });
    });

    let autoPlayInternal = [];
    let autoPlayDelay = 5000;

    function autoPlayCarousell() {
      if (autoPlayInternal.length != 0) {
        return;
      }

      let paginations = $(".item-cal-pagination");

      $.each(paginations, function(i, val) {
        let $this = $(val);
        const pages = $this.find(".item-cal-pagination-dot").length;

        let interval = setInterval(() => {
          let nextBtn = $this.parent().find(".next");

          if (nextBtn.hasClass("disable")) {
            $this.find(".item-cal-pagination-dot[data-index=0]").click();
          } else {
            nextBtn.click();
          }
        }, autoPlayDelay);

        autoPlayInternal.push(interval);
      });
    }

    function updatePaginationBtnStatus() {
      let itemBox = $(".item-cal-box");
      $.each(itemBox, function(i, val) {
        let currentSlide = $(val).find(".item-cal.active");

        let hasNext = currentSlide.next(".item-cal");
        let hasPrev = currentSlide.prev(".item-cal");

        if (hasNext.length == 0) {
          $(val)
            .find(".next")
            .addClass("disable");
        } else {
          $(val)
            .find(".next")
            .removeClass("disable");
        }

        if (hasPrev.length == 0) {
          $(val)
            .find(".prev")
            .addClass("disable");
        } else {
          $(val)
            .find(".prev")
            .removeClass("disable");
        }
      });
    }

    autoPlayCarousell();
    updatePaginationBtnStatus();
    setInterval(function() {
      autoPlayCarousell();
    }, 5000);
  }
};
</script>
