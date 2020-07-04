import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import ShowNote from './ShowNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
const App = () => {
  const [note, setNote] = useState([]);
  const addData = (form_d) => {
    setNote((old)=> {
      return [...old, form_d];
    });
  }
  const deleteData = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Note!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setNote((old)=>{
          return old.filter((currV, index)=>{
            return index!==id; 
          });
      });
        swal("Deleted! Your current Note is delete!", {
          icon: "success",
        });
      } else {
        swal("Safe! Your current Note is note delete!");
      }
    });
    
  }
  return (
    <>  
  <Header/>
  <Note passNoteData={addData}/>
  <div className="container-fluid d-flex flex-column flex-md-row flex-wrap justify-content-center justify-content-xl-start align-content-center">
  { note===null ? null :
  note.map((val, index) => {
    return (
      <ShowNote
        key = {index}
        id = {index}
        title = {val.title}
        desc = {val.desc}
        d_Data = {deleteData}
    />
    );
  })
  }
  </div>
  <Footer/>
  </>
  );
}

export default App;