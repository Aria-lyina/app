<template>
    <!-- <div>

    </div> -->
    <header class="default_header">
        <div class="default_header_container">

        <button class="button-header">
            <div class="content-button">
                    <img src="../img/uicons-regular-rounded/svg/fi-rr-apps.svg" class="ic">
                    <!-- <i class = "fi fi-rr-apps"></i> -->
                    <div class="text-head" id="text-catalog">Каталог товаров</div> 
            </div>
        </button>
        

        <button class="button-header" id="button-logo">
            <div class="content-button">
                    <img src="../img/rozetka-logo_1.png" class="ic" id="img-logo">
            </div>
        </button>


        
        <button class="button-header header-right-buttons">
            <div class="content-button">
                    <img src="../img/uicons-regular-rounded/svg/fi-rr-search.svg" class="ic">
                    <div class="text-head">Поиск</div> 
            </div>
        </button>


        <button class="button-header">
            <div class="content-button">
                <img src="../img/uicons-regular-rounded/svg/fi-rr-user.svg" class="ic">
            </div>
        </button>


        <button class="button-header">
            <div class="content-button">
                    <img src="../img/uicons-regular-rounded/svg/fi-rr-arrows-retween-re.svg" class="ic">
                    <div class="text-head">0</div> 
            </div>
        </button>

        <button class="button-header">
            <div class="content-button">
                    <img src="../img/heart-3.svg" class="ic">
                    <div class="text-head">0</div> 
            </div>
        </button>

        <button class="button-header">
            <div class="content-button">
                    <img src="../img/uicons-regular-rounded/svg/fi-rr-shopping-bag.svg" class="ic">
                    <div class="text-head">0</div> 
            </div>
        </button>

        <button class="button-header" id="last-text-head">
            <div class="content-button">
                    <div class="text-head">Ru</div> 
            </div>
        </button>

        </div> 
    </header>
    <div class="default">
      <slot />
    </div>
  </template>
  
 <style scoped>
    :root {
    /* --primary-color-text-header: rgba(26,26,26); */
    /* --primary-color-text-header: rgb(90, 90, 90); */
    --font-header: 12;
    }

  .default 
  {
    border: 1px solid #b9e39e;
    /* padding: 100px; */
    /* position: relative; */

    /* position: absolute; */
    height: 200%;
    /* width: 99%; */

    height: 2000px;
    background-color: #3dffff46;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 1%;
    /* top: 11%; */
  }
  /* .default::before {
    content: 'layouts/default.vue';
    position: absolute;
    top: 2px;
    left: 5px;
    color: #68b538;
    font-family: monospace;
  } */

  .default_header
    {
        /* background: rgba(182, 255, 231, 0.48); */
        height: 50px;
        margin-left: 2%;
        display: flex;
        margin-right: 2%;
    }
    .default_header_container
    {
        display: flex;
        flex-direction: row;
        /* background-color:rgb(106, 248, 255); */
        width:100%;
        height:100%;
        /* justify-content: center; */
        align-items: center;
    }
    .content-button
    {
        display: flex;
    }
    
    #button-logo
    {
        margin: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    #img-logo
    {
        height: 35px;
    }

    img.ic
        {
            width: auto;
            height: 15px;
        }

    .header-right-buttons
    {
        margin-left: auto;
    }

    #text-catalog
    {
        margin-left: 20px;  
    }
    .text-head
    {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5px;
        /* background-color:aqua; */
        font-size: 13px;
    }

    #last-text-head
    {
        margin-right: 0px;
        padding-right: 0px;
    }
    .button-header
    {
        color: var(--primary-color-text-header);
        background-color:white;
        border:0px;
        padding-left: 0px;
        cursor: pointer;
        margin-right: 20px;
    }

  </style>