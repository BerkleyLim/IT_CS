import CustomHookComponent from "./CustomHookComponent"

// View만 처리
const View2Component = () => {
  const {onSexChange} = CustomHookComponent()

  return (
    <div>
      <form>
        <label>성별</label>
        <input type="text" name="sex" onChange={onSexChange}></input>
        <br/>
      </form>
    </div>
  )
}

export default View2Component