import { use, useState } from "react"
function App() {
  // 自定义一个组件
  const Button = () => {
    return <button>自定义Button</button>
  }

  const message = 'kaizizhou'
  const count = 19
  const list = [
    { id: 1, name: 'kaizizhou' },
    { id: 2, name: 'zhoukai' },
    { id: 3, name: 'zhoukai2' },
  ]
  const isLogin = true
  const type = 3
  function getTpye() {
    if (type === 1) {
      return '类型1'
    } else if (type === 2) {
      return '类型2'
    } else return '其他类型'
  }
  function getName() {
    return '凯子周'
  }
  const clickHandler = (name, e) => {
    console.log("点击了", name, e)
  }
  // 简单绑定
  const [count1, setCount] = useState(0)
  const clickhandle = () => setCount(count1 + 1)
  //复杂绑定
  const [form, setForm] = useState({
    name: 'kaizizhou',
    age: 18
  })
  const changeName = () => {
    setForm({
      ...form,
      name: 'zhoukai'
    })
  }
  //输入绑定
  const [input, setInput] = useState('')
  const changeInput = (e) => {
    setInput(e.target.value)
  }
  return (
    <div className="App">
      Test1
      {message}
      {'this is a message'}
      {count}
      {getName()}
      {new Date().getDate()}
      <div style={{ color: 'red' }}><h1>red</h1></div>
      {/* map 方法 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      {/* 三元运算 */}
      <div>
        {isLogin ? '存在' : '不存在'}
      </div>
      {/* 逻辑与 */}
      <div>
        {isLogin && '存在'}
      </div>
      {/* 调用函数 */}
      <div>
        {getTpye()}
      </div>
      <button onClick={(e) => clickHandler('kaizizhou', e)}>
        点击
      </button>
      <div>
        ----------------------------------------------------------------------
      </div>
      <Button></Button>
      <div>
        ----------------------------------------------------------------------
      </div>
      <div>
        <button onClick={clickhandle}>
          {count1}
        </button>
        <button onClick={changeName}>
          {form.name}
        </button>
      </div>
      <div>
        ----------------------------------------------------------------------
      </div>
      <div>
        <input type="text" value={input} onChange={(e) => changeInput(e)}></input>
      </div>
    </div>

  );
}

export default App;
