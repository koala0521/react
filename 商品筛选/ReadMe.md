### 商品筛选作业

- 不需要部署环境，直接本地打开即可查看效果。 
- react代码，都写在了index.html中 script 标签中

### 实现思路：

- 通过操作数据实现DOM的跟新，
- 通过给数据加了一个属性 'chedked',来区别数据是否被选中
- 在展示所有选择的数据那里，遍历所有数据找到 'chedked'=true的数据 ,用数组来存所有被选中的，根据数据渲染DOM
- 删除选中的数据时，只要把对应数据的 'chedked'属性，改为false即可。