import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'jesus';
  age= 36;
  img = 'https://cdn-icons-png.flaticon.com/512/4645/4645949.png';

  imgParent='';


  btnDisabled =true;
  register={

    name:'',
    email:'',
    password:'',
  }

  names: string[]= ['jesus', 'jose ', 'michael'];
  newName ='';
  registrate='./assets/imagenes/registrate.png';
  fondo='./assets/imagenes/fondo.jpg';
  formulario='./assets/imagenes/formulario.jpg';


  person ={
    name:'Nicolas',
    age:18,
    avatar:'https://cdn-icons-png.flaticon.com/512/4645/4645949.png'
  }

  toggleButton (){
     this.btnDisabled = !this.btnDisabled;

  }

 increAge(){

    this.person.age +=1;

  }

  onScroll(event: Event ){
     const element =event.target as HTMLElement;
     console.log(element.scrollTop);
  }

  chageName(event: Event){
    const element =event.target as HTMLInputElement;
    this.person.name=element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName ='';
  }

  deleteName(index:number){
    this.names.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
  }
  onLoaded(img:string){
    console.log('log padre',img)
  }
}
