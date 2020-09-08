const formatNumber = (num) => {
  return  num
  .toFixed(2) 
  .replace('.', ',') 
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ'
};

export default formatNumber;
