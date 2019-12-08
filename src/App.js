import React from 'react';
import logo from './logo.svg';
import './App.css';

//dispatch için redux fonk çağırdık
import { connect } from 'react-redux';

import Button from './compenents/Button';
import Input from './compenents/Input';
import ListElement from './compenents/ListElements';

//Action
import { addTodo } from './redux/actions/todoAction';

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
    const{todoList}=this.props;
    return todoList.map((value, index) => <ListElement key={index} text={value.name} />)
  }
  //burada tanımlı propstan gelmiyor
  _handleOnClick = event => {
    //propsun içinde kullabdık dispatchi
    const { dispatch ,todoList} = this.props;
    const { currentValue, values, isRunOnClick } = this.state;
    //dispatch comp ile reducer arasındaki iletişimi actionlar ile sağlar 
    console.log('todoList:',todoList);
    dispatch(addTodo(currentValue));
    //tüm reducerlara iletilir 
    

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
        color: 'white',
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
            {/* dir dom ile comp olarak bağlı, değiştikçe yazı görüntüsü değişecek */}

            {this._renderElements()}
          </ul>
        </div>
      </div>
    );
  }

}
//comp ile reduxı bağlıyor. İki parantez içeriyor. fonk üreten bi fonksiyondur.  ikincisine app comp eklenir

/*const connect = ()=>{
    return ()=>{
      return 'merve'
    };
}*/
const mapStateToProps = (state) =>{
  return {
    //hangi state i hangi propsaa bağlıyacağız onu söylüyor
    todoList:state.todos.todos,
  }

}
//comp app olduğu için onu yazıyoruz
export default connect(mapStateToProps)(App);
//connect yazdığımızda dispatch çaşılıyor,dispatch default olarak gönderiliyor
