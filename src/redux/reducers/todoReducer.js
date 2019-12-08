
const initialState={
    todos:[
        {
            name:"test",
            completed:false
        }
    ],
};
//initialState default olarak ataması,boş gelirse diye 
//tore reducer a gönderilecek şeyleri kontrol eder, ikinci parametre dispatcher den bizim gönderdiğimiz değer 
//case de action type kontrolü yaptık
//push yerine ... ile açıp atabilirdik başka yöntemler de kullanılabilir
//completed değeri yapılıp yapılmadığının kontrolünü tutuyor ilk başta false geliyor
//...state gelen değeri parçalayıp yazmamızsı sağlar
export default(state=initialState,action)=>{
    console.log("action:",action);
    console.log("state",state);
    switch(action.type){
        case 'todo/add_todo':
            const {todos}=state;
            todos.push({name:action.data,completed:false});
            return{
                ...state,
                todos:todos,
                //eşitse js de direk todos, da yazılabilir
            };
        default:
            return state;
            
    }
}