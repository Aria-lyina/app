<template>
    <!-- <div>
      <button @click="if (showComponent) showComponent = false; else showComponent = true">Показать компоненту</button>
      <div>
       <img src="img" v-if="showComponent"/>
      </div>
    </div>-->
    <div> 
        <div v-if="selected.length != 0" class="tile">
            <div class="item">Выбрано хз товаров </div>
            <div class="item">Сбросить </div>
            <div class="item" v-for="item in selected">{{ item }} <cross class="cross" color="black"/> </div>
        </div>
    </div>

  </template>
  
  <script setup>
const selected = ref(['Apple', 'Samsung','6.5" - 6.9"','Apple', 'Samsung','6.5" - 6.9"','Apple', 'Samsung','6.5" - 6.9"','Apple', 'Samsung','6.5" - 6.9"']);


  </script>
  
  
<style scoped lang="scss">
.tile 
{
    .item 
    {
        background-color: var(--background-product);
       
        min-width: 40px;

        height: 30px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: var(--fontsize-small-default);
        padding-left:var(--pad-item-tile);
        padding-right: var(--pad-item-tile);
        margin-right: var(--marg-item-tile);
        // margin-bottom: var(--marg-item-tile);

        border: 1px solid var(--background-product);

        &:hover 
        {
            background-color: var(--btn-color1-hover);
        }
    }

    display: inline-block;
    padding-top: var(--marg-item-tile);

}
</style>