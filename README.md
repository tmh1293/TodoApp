"# TodoApp" 
BTVN
1. Dùng Type of
2.
3.
const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';
console.log(macbooks) // ['macbook2015', { model: 'm1' }, 'macbook2017']
console.log(apples) // ['air', { model: 'm1' }, 'macbook2017']