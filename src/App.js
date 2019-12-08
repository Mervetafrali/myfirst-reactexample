import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './compenents/Button';
import Input from './compenents/Input';
import ListElement from './compenents/ListElements';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      values: [],
      isRunOnClick: true,
    }
  }
  componentDidMount() {
    console.log('componentDidMount');
    const { currentValue } = this.state;
    if (currentValue !== '') {
      this.setState({ isRunOnClick: false });
    }

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    /*const{currentValue}=this.state;
    //iki eşittir ve 3 eşittir arasında ki fark, == value kontrolü yapar(2=='2' true sonuç odaklı çalışır)
    //=== tür kontrolü ve değer kontrolü yapar(2==='2' false döner)
    if(currentValue !==''){
      this.setState({isRunOnClick:false});
    }else{
      this.setState({isRunOnClick:true});
    }*/
    console.log('prevPros', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);

  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  _renderElements = () => {
    const { values } = this.state;
    //foreach ile yapımı
    /*const test =[];
    values.forEach(value => {
      test.push(<ListElement text={value}/>);
    });
    //map ile yapımı
    //map eleman kadar değer döndürüyor
    return(test);*/
    /*const test = values.map(value => {
      return(<ListElement text={value}/>);
    });
    return test;*/
    //kısa olarak map
    return values.map((value,index) => <ListElement key={index} text={value} />)
  }
  //burada tanımlı propstan gelmiyor
  _handleOnClick = () => {
    const { currentValue, values, isRunOnClick } = this.state;
    if (isRunOnClick === true) {
      values.push(currentValue);
      this.setState({}, () => {
        console.log(this.state.values)
      });

    }


  };
  _handleOnChange = event => {
    this.setState({ currentValue: event.target.value }, () => {
      console.log('this.state.currentValue 1', this.state.currentValue);
      //asenkron çalışıyor
    });
    console.log('this.state.currentValue 2', this.state.currentValue);
  };
  //this olmazsa hata verir

  //key kullanım amacı: forla ekrana bastırdığımız component için kullanıyoruz. performans kazancı sağlıyor
  render() {
    const { currentValue } = this.state;

    console.log('render');
    const css = {
      ul: {
        backgroundColor: 'black',
        color:'white',
      }
    }

    return (
      <div className="App">
        <div>
          <Input handleOnChange={this._handleOnChange} />
          {currentValue && (
            <Button isDisable={currentValue === ''} title="test" handleOnClick={this._handleOnClick} />

          )}
        </div>
        <div style={css.ul}>
          <ul>
            {/* vir dom ile comp olarak bağlı, değiştikçe yazı görüntü de ğişecek */}

            {this._renderElements()}
          </ul>
        </div>
      </div>
    );
  }

}

export default App;
