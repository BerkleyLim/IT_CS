import CustomHookComponent from "./CustomHookComponent";

// View만 처리
const View1Component = () => {
  const {onNameChange, onAgeChange} = CustomHookComponent();

  return (
    <div>
      <form>
        <label>이름</label>
        <input type="text" name="name" onChange={onNameChange}></input>
        <br/>
        <label>나이</label>
        <input type="text" name="age" onChange={onAgeChange}></input>
        <br/>
      </form>
    </div>
  )
}

export default View1Component