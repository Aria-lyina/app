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

  const selected = ref([]);

</script>

<template>
    <div v-if="show" class="cont">
        <ul>
            <li v-for="(item, index) in items.option_values" class="li_checkbox">
                <div class="checkboxSt fontFiltr">
                    <input class="check_1" type="checkbox" :id="item.option_value_id" 
                    :name="item.option_value_name" :value='item.option_value_id' v-model="selected"/>
                    <label class="checkboxSt-lbl" :for="item.option_value_id">  {{ item.option_value_title }}
                            <span class="fontLightGrey font13">({{ item.products_quantity }})</span> 
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<!-- <style src="@vueform/slider/themes/default.scss"></style>  -->
<!-- <style src="@/assets/checkBox.scss"></style>  -->
<!-- <style src="@/assets/cast-rang.scss"></style> -->

<!-- <style lang="scss" scoped>

// .sl-rang
// {

// }

.container
{
    border-bottom: 1px solid var(--light-color-text); 
    padding-top: 15px;
    // background-color: aqua;
    padding-bottom: 15px;
    // >ul 
    // {
    //     padding-bottom: 15px;
    // }
}

.status-hide
{
    // background-color:red;
    display: flex;
    align-items: center;
}

.name-list
{
    // background-color: violet;
    padding-top:12px;
    padding-bottom:12px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    color: var(--link-color);

    &:hover
    {
        .name-list-text
        {
            color: var(--link-color-hover);
        }
        
    }

    &-text 
    {
        // background-color: aqua;
        max-width: 80%;
    }
}

</style> -->
