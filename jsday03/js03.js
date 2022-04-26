//宣告inputs （querySelectorAll .controls底下所有的input）
const inputs = document.querySelectorAll('.controls input');
console.log(inputs)
function handleUpdate() {
    //宣告suffix ＝ 有dataset.sizing就用（||不然或者）給你（''空的）
  const suffix = this.dataset.sizing || '';
  //(documentElement=html)底下的css（setProperty設定新值）this.name 和 this.value 套用suffix
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
//在inputs這個（forEach陣列內的每個元素，皆傳入並執行給定的函式一次）在input增加change事件執行handleUpdate這個函數
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
