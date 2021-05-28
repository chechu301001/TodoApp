import React, {useState} from 'react';
import ToDoList from './ToDoList';
import AddIcon from '@material-ui/icons/Add';


const App = () => {
  const [limit, setLimit] = useState(true);

  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);//array of items to be printed

  //this function is called in the input part
  //onChange passes an object.
  //That is event
  const itemEvent = (event) => {
    setInputList(event.target.value); //Whatever user types that is updated to setinputlist
    //inputlist value becomes whatever we typed
  };

  //on clicking button this is called
  //we need list to be one below other once clicked
  //so put that list in array
  //There again a change of state so one more hooks.
  const listOfItems = () => {
    //setitems is a function 
    //olditems carries the text we type
    //referencing
    setItems((oldItems) => {
      //new array is existing array + inputlist ie the thing we typed bruuhhhh!
      return [...oldItems, inputList];//returning an array which is stored in setItems
      //this new value will sit in Items array
    });
    //now the value typed must disappear
    //setInputList holds these values. So..
    setInputList('');//make it empty
    if(Items.length===5){
      alert("This will be your last item");
      setLimit(false);
    }
  };
  //deleteitems is here.used props in todo and called it here.
  const deleteItems = (id) => { //passing id of the original arr content
    console.log("deleted");
    setLimit(true);

    setItems((oldItems) => {
      //filter function helps in removing
      //follow the function requirements
      //the chosen array sits in arElem and id in index
      //return after checking if id is same as index.
      return oldItems.filter((arrElem, index) => {
        return index !==id;//returns the array without the element whose id is same as index.
      })
    })
  };

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input
            type="text"
            placeholder="Add an Item" 
            onChange={itemEvent}
            value={inputList}//This is the value we type, and must disappear once we click on add button
            onClick=""
          />
          {limit?
          <button onClick={listOfItems} className="plus"><AddIcon/></button>: null}

          <ol>
              {
              //displaying the whole array
              //itemval is just for iterating through array in map function.
              //items will also be an array.Map through it and print the contents.
              Items.map((itemval, index) => {
                //<toDoList/> itemval does not know what this is.
                //so props
                //return <toDoList text={itemval}/>; //it is a function so must return
                return (
                  <ToDoList 
                    id={index} //this is because we need unique keys
                    key={index} 
                    text={itemval}
                    onSelect={deleteItems}//call to delete in the todolist
                  />
                );
              }
              )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;