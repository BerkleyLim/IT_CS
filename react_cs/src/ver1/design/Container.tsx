import { useEffect, useState } from 'react'
import Presentation from './Presentation'

// 인터페이스 설정 - 이름
type NameInterface = {
  name: string
}

// 인터페이스 설정 - 나이
type AgeInterface = {
  name: string
}


// Container 컴포넌트 - 로직 처리
const Container = () => {
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
    <Presentation 
      onNameChange={onNameChange}
      onAgeChange={onAgeChange}
    />
  )
}

export default Container