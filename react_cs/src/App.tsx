import './App.css';
import View1Component from './ver2/custom_hook/View1Component';
import View2Component from './ver2/custom_hook/View2Component';
import CustomHookComponent from './ver2/custom_hook/CustomHookComponent';
// import Container from './ver1/design/Container'; // ver1의 presentation & container

function App() {
  // custom hook 에서 불려옴
  const {onNameChange, onSexChange, onAgeChange} = CustomHookComponent()
  return (
    <div className="App">
      {/* 다음은 OriginComponent와 Presentation&Container 디자인 패턴 */}
      {/* <OriginComponent /> */}
      {/* <Container /> */}

      {/* 다음은 custom hooks 적용 */}

      <View1Component onAgeChange={onAgeChange} onNameChange={onNameChange} />
      <View2Component onSexChange={onSexChange} />

    </div>
  );
}

export default App;
