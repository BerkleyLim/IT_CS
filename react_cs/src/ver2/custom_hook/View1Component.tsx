// 상속 설정
type ViewInterface= {
  onNameChange: any,
  onAgeChange: any
}

// Presentation 컴포넌트
// View만 처리
const View1Component = (props:ViewInterface) => {
  const {onNameChange, onAgeChange} = props;

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