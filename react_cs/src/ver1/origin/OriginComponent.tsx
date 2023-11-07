import React, { KeyboardEvent, useEffect, useState } from 'react'

// 인터페이스 설정 - 이름
type NameInterface = {
  name: string
}

// 인터페이스 설정 - 나이
type AgeInterface = {
  name: string
}


const OriginComponent = () => {
  // 일반적, 컴포넌트 구현
  // 처음 배울때, return 안에 있는 건 view단을 출력, return 바깥은 로직 표현
  const [name, setName] = useState<NameInterface>();
  const [age, setAge] = useState<AgeInterface>();

  const onNameChange = (e:any) => {
    const {name, value} = e.currentTarget;
    setName({
      [name] :value
    } as NameInterface)
  }
  
  const onAgeChange = (e:any) => {
    const {name, value} = e.currentTarget
    setAge({
      [name]: value
    } as AgeInterface)
  }

  // 테스트용
  useEffect(() => {
    console.log(name)
    console.log(age)
  }, [name, age])

  return (
    <div>
      <form>
        <label>이름</label>
        <input type="text" name="name" onChange={onNameChange}></input>
        <br/>
        <label>나이</label>
        <input type="text" name="age" onChange={onAgeChange}></input>
      </form>
    </div>
  )
}

export default OriginComponent