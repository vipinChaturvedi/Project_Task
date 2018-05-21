import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  data = [];
  storeCategory;
  category = [];
  store: string;
   map = new Map();
  constructor(private router: Router, private homeService: HomeService) {

  }

  ngOnInit() {

    this.homeService.getData()
      .subscribe(
        response => {
          console.log(JSON.stringify(response));
          this.data = response;

          for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].category !== '') {
              if (this.category.length === 0) {
                this.category.push(this.data[i].category);
              } else {
                let count = 0;
                for (let j = 0; j < this.category.length; j++) {
                  if (this.data[i].category === this.category[j]) {
                    count++;
                  }
                }
                if (count === 0) {
                  this.category.push(this.data[i].category);
                }
              }
            }
          }


          for (let i = 0; i < this.data.length; i++) {
            this.storeCategory = [];
            var obj = {
              'availabletime': this.data[i].availabletime,
              'description': this.data[i].description,
              'name': this.data[i].name,
              'price': this.data[i].price,
              'vegflag': this.data[i].vegflag
            }
            this.storeCategory.push(obj);
            if (this.map.has(this.data[i].category)) {
              this.storeCategory = this.map.get(this.data[i].category);
              this.storeCategory.push(obj);
              this.map.set(this.data[i].category, this.storeCategory);
            } else {
              this.map.set(this.data[i].category, this.storeCategory);
            }

          }

          this.getDetails('', 0);
          console.log("category   " + JSON.stringify(this.category));
          console.log(this.map)
        },
        error => {
        });


  }
  price=[];
  categoryData=[];

  categoryDetails;
  categoryName :string;
  allDeatils:boolean=true;
  storeIndex = [];

  selectCategory=[
    {
      "categoryName":'',
      'category':[]
    }
  ]

  selectIndex=[
    {
      'index':[]
    }
  ]

  count:number=0;

  getDetails(data, index) {


    this.categoryName = data;
    if (data == ''){
      this.allDeatils = true;
      for ( let i = 0;  i < this.category.length; i++) {
        this.selectCategory[i]=
        {
          "categoryName":'',
          'category':[]
        }

        this.selectIndex[i]={
          'index': []
        }

        var obj = this.map.get(this.category[i]);
        console.log("obj qqqq " + JSON.stringify(obj));
        // this.categoryDetails.push(obj);
        this.selectCategory[i].categoryName=this.category[i];
        this.selectCategory[i].category=obj;

        this.selectIndex[i].index.length =  this.selectCategory[i].categoryName.length;
        this.selectIndex[i].index.fill(0);
      }
    }else{
      console.log("vipin h")
      this.allDeatils=false;
      this.categoryDetails = this.map.get(data);
      this.storeIndex.length=this.categoryDetails.length;
      this.storeIndex.fill(0);
    }

    console.log("categoryDetails"+ JSON.stringify(this.categoryDetails));

  }


  decreaseData(list, j, i){
    console.log()

      this.count--;


      if (this.allDeatils == false) {
        if( this.storeIndex[i] > 0) {
          this.storeIndex[i]--;
          if (this.storeIndex[i] == 0)
            this.price.splice(i, 1);
          this.categoryData.splice(i, 1);
        }
      } else {
        this.selectIndex[j].index[i]--;

      
    }
  }

count1:number=0;
  plusData(list, j, i) {
    console.log(j+"  "+i);
    this.count1=0;
    this.count++;

    if(this.allDeatils == false) {
      this.storeIndex[i]++;

      for( let z=0; z < this.categoryData.length;z++){
        if(this.categoryData[z] == list.name){
          this.count1=1;
          break;
        }
      }
      if(this.count1 == 0){
        this.price.push(list.price);
        this.categoryData.push(list.name)
      }

    }else{
      console.log("vipin1");
      this.selectIndex[j].index[i]++;

    }
  }

  clearData(){
    this.count=0;
    this.selectIndex=[];
    this.storeIndex=[];
  }


}
