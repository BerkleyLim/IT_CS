import './App.css';
import View1Component from './ver2/custom_hook/View1Component';
import View2Component from './ver2/custom_hook/View2Component';
// import Container from './ver1/design/Container'; // ver1의 presentation & container

function App() {
  return (
    <div className="App">
      {/* 다음은 OriginComponent와 Presentation&Container 디자인 패턴 */}
      {/* <OriginComponent /> */}
      {/* <Container /> */}

      {/* 다음은 custom hooks 적용 */}

      <View1Component />
      <View2Component />

    </div>
  );
}

export default App;
