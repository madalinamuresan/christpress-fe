<script setup>
  import { ref } from 'vue'
  const bibleBookNames = [
    { name: "Geneza" },
    { name: "Exod" },
    { name: "Leviticul" },
    { name: "Numeri" },
    { name: "Deuteronomul" },
    { name: "Iosua" },
    { name: "Judecatorii" },
    { name: "Rut" },
    { name: "1 Samuel" },
    { name: "2 Samuel" },
    { name: "1 Imparati" },
    { name: "2 Imparati" },
    { name: "1 Cronici" },
    { name: "2 Cronici" },
    { name: "Ezra" },
    { name: "Neemia" },
    { name: "Estera" },
    { name: "Iov" },
    { name: "Psalmii" },
    { name: "Proverbe" },
    { name: "Eclesiastul" },
    { name: "Cantarea Cantarilor" },
    { name: "Isaia" },
    { name: "Ieremia" },
    { name: "Plangerile lui Ieremia" },
    { name: "Ezechiel" },
    { name: "Daniel" },
    { name: "Osea" },
    { name: "Ioel" },
    { name: "Amos" },
    { name: "Obadia" },
    { name: "Iona" },
    { name: "Mica" },
    { name: "Naum" },
    { name: "Habacuc" },
    { name: "Tefania" },
    { name: "Hagai" },
    { name: "Zaharia" },
    { name: "Maleahi" },
    { name: "Matei" },
    { name: "Marcu" },
    { name: "Luca" },
    { name: "Ioan" },
    { name: "Faptele Apostolilor" },
    { name: "Romani" },
    { name: "1 Corinteni" },
    { name: "2 Corinteni" },
    { name: "Galateni" },
    { name: "Efeseni" },
    { name: "Filipeni" },
    { name: "Coloseni" },
    { name: "1 Tesaloniceni" },
    { name: "2 Tesaloniceni" },
    { name: "1 Timotei" },
    { name: "2 Timotei" },
    { name: "Tit" },
    { name: "Filimo" },
    { name: "Evrei" },
    { name: "Iacov" },
    { name: "1 Petru" },
    { name: "2 Petru" },
    { name: "1 Ioan" },
    { name: "2 Ioan" },
    { name: "3 Ioan" },
    { name: "Iuda" },
    { name: "Apocalipsa" }
  ]
  const selectedBibleBook = ref()
</script>

<template>
  <!-- <Dropdown v-model="selectedBibleBook" :options="bibleBookNames" optionLabel="name" placeholder="Selecteaza o carte" :editable="true"/> -->
  <Dropdown v-model="selectedBibleBook" :options="bibleBookNames" optionLabel="name" :filter="true" placeholder="Selecteaza o carte" :showClear="true">
    <template #value="slotProps">
      <div class="country-item country-item-value" v-if="slotProps.value">
        <i class="pi pi-book" style="font-size: 1.5rem"></i>
        <div>{{slotProps.value.name}}</div>
      </div>
      <span v-else>
        {{slotProps.placeholder}}
      </span>
    </template>
    <template #option="slotProps">
      <div class="country-item">
        <i class="pi pi-book" style="font-size: 1.5rem"></i>
        <div>{{slotProps.option.name}}</div>
      </div>
    </template>
  </Dropdown>
</template>

<style lang="scss" scoped>
  .p-dropdown {
    width: 16rem;
  }

  .country-item {
    i {
      width: 17px;
      margin-right: 1rem;
    }
    display: inline-flex;
  } 
</style>
