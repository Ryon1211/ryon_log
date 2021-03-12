import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

// 利用するアイコンを配列に追加
const solidIcons = [faSearch, faRedo];
const regularIcons = [faEdit];
const bransIcons = [faTwitter, faGithub];

// 利用するアイコンをlibraryに追加
solidIcons.forEach(icon => library.add(icon));
regularIcons.forEach(icon => library.add(icon));
bransIcons.forEach(icon => library.add(icon));
// console.log(library);

// グローバルコンポーネントに登録
Vue.component('fa', FontAwesomeIcon);