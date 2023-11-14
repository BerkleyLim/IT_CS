import { useEffect, useState } from 'react'

// 인터페이스 설정 - 이름
type NameInterface = {
  name: string
}

// 인터페이스 설정 - 나이
type AgeInterface = {
  name: string
}

// 인터페이스 설정 - 성별
type SexInterface = {
  name: string
}


// Container 컴포넌트 - 로직 처리
const CustomHookComponent = () => {
  const [name, setName] = useState<NameInterface>();
  const [age, setAge] = useState<AgeInterface>();
  const [sex, setSex] = useState<SexInterface>();

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

  const onSexChange = (e:any) => {
    const {name, value} = e.currentTarget
    setSex({
      [name]: value
    } as SexInterface)
  }

  // 테스트용
  useEffect(() => {
    console.log(name)
    console.log(age)
  }, [name, age])
  
  useEffect(() => {
    console.log(sex)
  }, [sex])

  return {
    onAgeChange,
    onNameChange,
    onSexChange,
  }
}

export default CustomHookComponent