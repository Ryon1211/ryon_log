import { createClient } from '~/plugins/contentful.js';;

class getClass {
  constructor() {
    this.client =  createClient();
  }

  _mergeOption(defaultOptions, argOptions) {
    if(argOptions){
      return {...defaultOptions, ...argOptions}
    }else {
      return defaultOptions
    }
  }

  getPost(c_type, argOptions){
    let options = this._mergeOption({
      content_type: c_type,
      limit: 1,
      'fields.slug': "",
    }, argOptions);

    return this.client.getEntries(options)
      .then(res => res.items[0])
      .catch(console.error);
  }

  getTags(argOptions){
    let options = this._mergeOption({
      content_type: 'tag'
    }, argOptions);

    return this.client.getEntries(options)
      .then(res => res.items)
      .catch(console.error);
  }

  getTagInfo(argOptions){
    let options = this._mergeOption({
        content_type: 'tag',
        'fields.slug': '',
        limit: 1
    }, argOptions);

    return this.client.getEntries(options)
      .then(res => res.items[0])
      .catch(console.error);
  }

  getPosts(c_type, argOptions){
    let options = this._mergeOption({
      content_type: c_type, 
      limit: 16,
      select: 'fields.createDate,fields.slug,fields.title,fields.tags,fields.headBanner', 
      order: '-fields.createDate' 
    }, argOptions);
    
    return this.client.getEntries(options)
    .then(res => res.items)
    .catch(console.error);
  }

  countPosts(c_type, argOptions){
    let options = this._mergeOption({
      content_type: c_type, 
      select: 'sys.id',
    }, argOptions);
    
    return this.client.getEntries(options)
    .then(res => res.total)
    .catch(console.error);
  }
}  

const getContent = new getClass();

export default({}, inject) => {
  inject('getContent', getContent);
}