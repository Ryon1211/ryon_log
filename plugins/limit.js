const limit = {
  slLimit: 4,
  topLimit: 8,
  maxLimit: 16
}

export default({}, inject) => {
  inject('limit', limit);
}