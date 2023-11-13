// 상속 설정
type ViewInterface= {
  onSexChange: any,
}

// Presentation 컴포넌트
// View만 처리
const View2Component = (props:ViewInterface) => {
  const {onSexChange} = props;

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