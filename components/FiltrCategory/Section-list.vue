<script setup>
import {ref} from 'vue'

const props = defineProps ({
        items: 
        {
            type: Object
        },
        show: 
        {
            type: Boolean
        }
  })

  const itemsSort = ref(new Map());

  const selected = ref([]);
//   const items = props.items.map(child=>child);
//   console.log(props.items);

// const properties = ['apple', 'banana', 'car', 'dog', 'elephant', 'cat', 'fish'];

// // Создаем массивы для каждой буквы алфавита
// const alphabetArrays = Array(26).fill().map(() => []);

// Проходим по всем свойствам
for (const item of props.items.option_values) {
  // Получаем первую букву свойства
  const firstLetter = item.option_value_title.charAt(0);
//   console.log(firstLetter);

  if (!itemsSort.value.has(firstLetter)) itemsSort.value.set(firstLetter, new Array());
    itemsSort.value.get(firstLetter).push(item);

  // Получаем индекс этой буквы в алфавите
//   const index = firstLetter.charCodeAt(0) - 97;

//   console.log(index);
  

//   console.log(alphabetArrays);
//   // Добавляем свойство в соответствующий массив
//   alphabetArrays[index].push("item");

    // contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
}

// users.sort(function (a, b) 
//     {
//         if (a.name < b.name) {
//         return -1;
//         }
//         if (a.name > b.name) {
//         return 1;
//         }
//         return 0
//   };)

// // Выводим результат
// for (let i = 0; i < alphabetArrays.length; i++) {
//   const letter = String.fromCharCode(i + 97);
//   console.log(`${letter}: ${alphabetArrays[i]}`);
// }
    // itemsSort.value = new Map([...itemsSort.entries()].sort(function (a, b) 
    //     {
    //         if (a.key < b.key) {
    //         return -1;
    //         }
    //         if (a.key > b.key) {
    //         return 1;
    //         }
    //         return 0
    //     };));

    // console.log(itemsSort.value);

    // if () {
        
    // }    

    itemsSort.value = new Map([...itemsSort.value.entries()].sort());

    const searchInput = ref();

    onMounted(() => 
    {
    // Получаем доступ к значению поля ввода
        console.log(searchInput); // Выводит текущее значение поля ввода


        setInterval(l, 1500);
        // console.log("wjhj?");
        // Можно связать значение поля с константой
        // const searchValue = ref('123456789');
        // searchInput.value = "56789";


        // let s = document.getElementById("seach");

        // // console.log(s);
        // console.log(s);
        // if(s!=null || s!=undefined)
        // {
        //     console.log(s);
        //     console.log("YESS");
        // }

        function l ()
        {
            console.log(searchInput);
        }
         });

    // console.log(itemsSort.value);

    


</script>

<!-- <style src="@/assets/checkBox.scss"></style>  -->

<template>

<div v-if="show" class="cont">

    <input ref="searchInput" id="seach" class="seach-li fontFiltrName" type="text" placeholder="Поиск..." value="gfd">

    <div class="bord">
        <div class="cont-list scroll-default">
            <ul>
                <li v-for="(item, index) in items.short_list" class="li_checkbox">
                    <div class="checkboxSt fontFiltr">
                        <input class="check_1" type="checkbox" :id="item.option_value_id" 
                        :name="item.option_value_name" :value='item.option_value_id' v-model="selected"/>
                        <label class="checkboxSt-lbl" :for="item.option_value_id">  {{ item.option_value_title }}
                                <span class="fontLightGrey font13">({{ item.products_quantity }})</span> 
                        </label>
                    </div>
                </li>
            </ul>

            <div v-for="[key, value] of itemsSort" :key="key">
                <div class="name-section">{{ key }}</div>
                <ul>
                    <li v-for="(item, index) in value" class="li_checkbox">
                        <div class="checkboxSt fontFiltr">
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