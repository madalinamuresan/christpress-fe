<script setup>
  import { onMounted, ref, watch } from 'vue'
  import ScrollPanel from 'primevue/scrollpanel'

  const bibleBookNames = [
    { id: 1, name: "Geneza" },
    { id: 2, name: "Exod" },
    { id: 3, name: "Leviticul" },
    { id: 4, name: "Numeri" },
    { id: 5, name: "Deuteronomul" },
    { id: 6, name: "Iosua" },
    { id: 7, name: "Judecatorii" },
    { id: 8, name: "Rut" },
    { id: 9, name: "1 Samuel" },
    { id: 10, name: "2 Samuel" },
    { id: 11, name: "1 Imparati" },
    { id: 12, name: "2 Imparati" },
    { id: 13, name: "1 Cronici" },
    { id: 14, name: "2 Cronici" },
    { id: 15, name: "Ezra" },
    { id: 16, name: "Neemia" },
    { id: 17, name: "Estera" },
    { id: 18, name: "Iov" },
    { id: 19, name: "Psalmii" },
    { id: 20, name: "Proverbe" },
    { id: 21, name: "Eclesiastul" },
    { id: 22, name: "Cantarea Cantarilor" },
    { id: 23, name: "Isaia" },
    { id: 24, name: "Ieremia" },
    { id: 25, name: "Plangerile lui Ieremia" },
    { id: 26, name: "Ezechiel" },
    { id: 27, name: "Daniel" },
    { id: 28, name: "Osea" },
    { id: 29, name: "Ioel" },
    { id: 30, name: "Amos" },
    { id: 31, name: "Obadia" },
    { id: 32, name: "Iona" },
    { id: 33, name: "Mica" },
    { id: 34, name: "Naum" },
    { id: 35, name: "Habacuc" },
    { id: 36, name: "Tefania" },
    { id: 37, name: "Hagai" },
    { id: 38, name: "Zaharia" },
    { id: 39, name: "Maleahi" },
    { id: 40, name: "Matei" },
    { id: 41, name: "Marcu" },
    { id: 42, name: "Luca" },
    { id: 43, name: "Ioan" },
    { id: 44, name: "Faptele Apostolilor" },
    { id: 45, name: "Romani" },
    { id: 46, name: "1 Corinteni" },
    { id: 47, name: "2 Corinteni" },
    { id: 48, name: "Galateni" },
    { id: 49, name: "Efeseni" },
    { id: 50, name: "Filipeni" },
    { id: 51, name: "Coloseni" },
    { id: 52, name: "1 Tesaloniceni" },
    { id: 53, name: "2 Tesaloniceni" },
    { id: 54, name: "1 Timotei" },
    { id: 55, name: "2 Timotei" },
    { id: 56, name: "Tit" },
    { id: 57, name: "Filimon" },
    { id: 58, name: "Evrei" },
    { id: 59, name: "Iacov" },
    { id: 60, name: "1 Petru" },
    { id: 61, name: "2 Petru" },
    { id: 62, name: "1 Ioan" },
    { id: 63, name: "2 Ioan" },
    { id: 64, name: "3 Ioan" },
    { id: 65, name: "Iuda" },
    { id: 66, name: "Apocalipsa" }
  ]
  let selectedBibleBook = ref()
  let selectedBibleBookChapter = ref()
  let nextselectedBibleBookChapter = ref()
  let bookChaptersData = ref({})

  const setChapterVerses = (chapterNumber) => {
    selectedBibleBookChapter.value = bookChaptersData.value.filter(chapter => chapter.chapter_number == chapterNumber)[0]
    if(chapterNumber + 1 <= bookChaptersData.value.length) {
      nextselectedBibleBookChapter.value = bookChaptersData.value.filter(chapter => chapter.chapter_number == chapterNumber + 1)[0]
    } else {
      nextselectedBibleBookChapter.value = null
    }
  }
  watch(selectedBibleBook, (newSelectedBibleBook) => {
    bookChaptersData.value = {}
    selectedBibleBookChapter.value = null
    if (newSelectedBibleBook != null) {
      fetch(`https://christpress.herokuapp.com/books/${newSelectedBibleBook.id}`)
        .then(response => response.json())
        .then(data => {
          bookChaptersData.value = data.chapters
          setChapterVerses(1)
        })
    }
  })

  onMounted(() => {
    selectedBibleBook.value = bibleBookNames[0]
  })
</script>

<template>
  <div class="flex justify-content-center flex-wrap">
    <div class="col-12 lg:col-8">
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
    </div>
  </div>
  <div class="flex justify-content-center flex-wrap">
    <div class="col-12 lg:col-8">
      <div class="card">
        <div class="flex md:justify-content-start justify-content-center flex-wrap card-container cyan-container">
          <div v-for="chapter in bookChaptersData" :key="chapter.chapter_number">
            <div @click="setChapterVerses(chapter.chapter_number)" class="pointer flex align-items-center justify-content-center w-2rem h-2rem bg-cyan-500 font-bold text-white border-round m-2">{{chapter.chapter_number}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="selectedBibleBookChapter" class="flex justify-content-center flex-wrap">
    <div class="col-12 lg:col-8">
      <div class="grid">
        <div class="col-12 md:col-6 p-5">
          <h4>{{selectedBibleBook.name}}: Capitol {{selectedBibleBookChapter.chapter_number}}</h4>
          <ScrollPanel style="width: 100%; height: 400px" class="custombar1">
            <div v-for="verse in selectedBibleBookChapter.chapter_verses">
              <p>{{verse.verse_number}}. {{verse.value}}</p>
            </div>
          </ScrollPanel>
        </div>
        <div v-if="nextselectedBibleBookChapter" class="col-12 md:col-6 p-5">
          <h4>{{selectedBibleBook.name}}: Capitol {{nextselectedBibleBookChapter.chapter_number}}</h4>
          <ScrollPanel style="width: 100%; height: 400px">
            <div v-for="verse in nextselectedBibleBookChapter.chapter_verses">
              <p>{{verse.verse_number}}. {{verse.value}}</p>
            </div>
          </ScrollPanel>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .p-dropdown {
    width: 100%;
  }

  .country-item {
    i {
      width: 17px;
      margin-right: 1rem;
    }
    display: inline-flex;
  }

  .pointer {
    cursor: pointer
  }

  ::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
      .p-scrollpanel-wrapper {
        border-right: 9px solid var(--surface-ground);
      }

      .p-scrollpanel-bar {
        background-color: var(--primary-color);
        opacity: 1;
        transition: background-color .2s;

        &:hover {
          background-color: #007ad9;
        }
      }
    }

  &.custombar2 {
    .p-scrollpanel-wrapper {
      border-right: 9px solid var(--surface-border);
      border-bottom: 9px solid var(--surface-border);
    }

    .p-scrollpanel-bar {
      background-color: var(--surface-ground);
      border-radius: 0;
      opacity: 1;
      transition: background-color .2s;
    }
  }
}
</style>
