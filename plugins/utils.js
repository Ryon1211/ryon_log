import moment from 'moment';

const assetUrl = obj => `https:${obj.fields.file.url}`;
const dateParse = arg => {
  return moment(arg).format('YYYY年MM月DD日');
}

export default({}, inject) => {
  inject('assetUrl', assetUrl);
  inject('dateParse', dateParse);
}