<script setup>
    defineProps ({
        items: 
        {
            type: Object
        },
        show: 
        {
            type: Boolean
        }
    });

    const selected = ref(new Set());

    // // Добавление элемента в выбранные
    // const addToSelected = (item) => {
    //     selected.value.add(item);
    // }

    // // Удаление элемента из выбранных
    // const removeFromSelected = (item) => {
    //     selected.value.delete(item);
    //     // document.getElementById(item).classList.remove('IsSelected');
    // }

    const Click = (item) =>    
    {
        if(selected.value.has(item)) selected.value.delete(item); else selected.value.add(item);
    }

</script>

<template>
    <div v-if="show" v-for="(item, index) in items.option_values" class="tile">
        <div class="item" :id="item.option_value_id" 
        @click="Click(item.option_value_id)" 
        :name="item.option_value_name" 
        :value='item.option_value_id'
        :class="{ 'IsSelected': selected.has(item.option_value_id) }"
        >
             {{ item.option_value_title }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

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

.IsSelected 
{
    // color: var(--btn-color1) !important;
    // background-color: var(--btn-color2) !important;
    
    background-color: var(--btn-color1) !important;
    border: 1px solid black !important;
}


</style>