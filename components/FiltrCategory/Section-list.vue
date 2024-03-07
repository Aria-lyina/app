<script setup>

const props = defineProps ({
        items: 
        {
            type: Object
        },
        show: 
        {
            type: Boolean
        },
        // selected:
        // {
        //     type: Array 
        // }
  })

  const itemsSort = ref(new Map());

  const selected = ref([]);

    for (const item of props.items.option_values) 
    {
    // Получаем первую букву свойства
        const firstLetter = item.option_value_title.charAt(0);

        if (!itemsSort.value.has(firstLetter)) itemsSort.value.set(firstLetter, new Array());
        itemsSort.value.get(firstLetter).push(item);
    }

    itemsSort.value = new Map([...itemsSort.value.entries()].sort());
    itemsSort.value.forEach((value, key) => 
    {
        value.hide = false;
    });

    const searchInput = ref(null);

    const ChangeInput = () => 
    { 
        // console.log("change");
        if(searchInput.value!=null&&searchInput.value.value!="") 
        {
            props.items.short_list.forEach((v)=>
            {
                v.disabled = true;
            });
        }
        else 
        {
            props.items.short_list.forEach((v)=>
            {
                v.disabled = false;
            });
        }

        itemsSort.value.forEach((value, key) => 
        {
            let count = 0;
            value.forEach((v)=>
            {
                //console.log(v);
                v.disabled = !v.option_value_name.toLowerCase().includes(searchInput.value.value.toLowerCase());
                
                if(!v.disabled)
                count++;
            })
            // console.log("hide ", key, " ", count);
            // console.log(value.hide);

            if(count==0)
            value.hide = true;
            else value.hide = false;

        });
    };

</script>

<style src="@/assets/checkBox.scss"></style> 

<template>
    <div v-if="show" class="cont">

        <input ref="searchInput" class="seach-li fontFiltrName" @input="ChangeInput()" type="text" placeholder="Поиск..." value="">

        <div class="bord">
            <div class="cont-list scroll-default">
                <ul>
                    <li  v-for="(item, index) in items.short_list" class="li_checkbox">
                        <div v-if="!item.disabled" class="checkboxSt fontFiltr">
                            <input class="check_1" type="checkbox"
                            :name="item.option_value_name" :value='item.option_value_id' v-model="selected"/>
                            <label class="checkboxSt-lbl" :for="item.option_value_id">  {{ item.option_value_title }}
                                    <span class="fontLightGrey font13">({{ item.products_quantity }})</span> 
                            </label>
                        </div>
                    </li>
                </ul>

                <div v-for="[key, value] of itemsSort" :key="key">
                    <div v-if="!value.hide" class="name-section" >{{ key }}</div>
                    <ul>
                        <li v-for="(item, index) in value" class="li_checkbox">
                            <div v-if="!item.disabled" class="checkboxSt fontFiltr">
                                <input class="check_1" type="checkbox" :id="item.option_value_id" 
                                :name="item.option_value_name" :value='item.option_value_id' v-model="selected"/>
                                <label class="checkboxSt-lbl" :for="item.option_value_id">  {{ item.option_value_title }}
                                        <span class="fontLightGrey font13">({{ item.products_quantity }})</span> 
                                </label>
                            </div>
                        </li>
                    </ul>
                    <!-- Ключ: {{ key }}, Значение: {{ value }} -->
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.name-section
{
    height: 35px;
    // text-align: center;
    display: flex;
    align-items: center;
    font-size: 18px;
}

.bord
{
    border-right: 0.5px solid black;
}

.seach-li
{   
    width: 100%;
    height: 45px;

    border: 0;

    background-color: var(--background-product);
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;

    &::placeholder
    {
        color:var(--light-color-text);
    }
}
.cont
{
    // background-color: aqua;
    height: 550px;
    margin-top: 15px;
    // margin-bottom: 15px;

    // border-bottom: 0 !important;

    &-list 
    {
        margin-top: 25px;
        height: 450px;
        overflow-y: scroll;
    }
}

</style>