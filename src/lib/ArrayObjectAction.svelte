<!-- 开发过程中，修改数组和对象中的值是不会生效的 -->
<!-- 因为数组或者对象的地址是没有改变的，可以通过浅拷贝或者深拷贝的形式实现 -->

<!-- 对象
1, Object.assign()
2, { ...obj1,...obj2}
3, JSON.parse(JSON.stringify(obj)); -->

<!-- 数组
1, [...arr1, ..arr2]
2, JSON.parse(JSON.stringify(arry)) -->

<script>
  let arr = [1, 2, 3];
  let show = false;

  $: total = arr.reduce((total, val)=> (total = total + val), 0);

  const handleClick = () => {
    // 直接push是 没有作用的
    arr.push(arr.length + 1);
    arr = [...arr];
    return (show = !show);
  };

  let obj1 = {
    name: "xiaowang",
  };
  let obj2 = {
    name: "xiaowang",
    age: 10,
  };
  // 1、第一个空对象是防止修改obj1  2、又后向前进行覆盖；
  let obj3 = Object.assign({}, obj1, obj2, { sex: "haoren" });
</script>

<button on:click={handleClick}> 修改对象/数组值 </button>

{#if show}
 <div>对象原始值： {JSON.stringify(obj2)}</div>
 <div>对象合并值： {JSON.stringify(obj3)}</div>
 <div>数组：{JSON.stringify(arr)}</div>
 <div> 数组计算：{arr.join("+")} =  {total}</div>
{:else}
{/if}
