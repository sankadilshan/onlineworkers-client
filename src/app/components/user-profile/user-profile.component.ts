import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserinfoService } from 'src/app/service/userinfo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/models/userInfo.models';
import { ScrollToService } from 'ng2-scroll-to-el';
import { SocialService } from 'src/app/service/social.service';


export class Post {
  jobtitle: string;
  jdescription: string;
  validto: Date;
  contact: number;

}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css', './spinner.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: UserinfoService,
    private _formBuilder: FormBuilder,
    private _scrollService: ScrollToService,
    private _userInfoService: UserinfoService,
    private _socialService: SocialService) { }

  minDate = new Date();
  _ppicurl = "../assets/img/logo/default-p.PNG";
  _pavatar = "../assets/img/logo/default-p.PNG"
  _username = "user1"
  likes = 12000
  comments = 15000
  username = "Nimal123@"
  jobtitle = "Data Entry"
  post1 = [{ 'jobtitle': 'carpenter' }, { 'jobtitle': 'sdfsdfsdfs' }]
  description = "nov 4, 2019 - The default animation can be customized to something other than just a 360 degree rotation. Basically you can create a component that swaps between mat-icon's when clicked or when a parent element like a button is clicked. Prerequisites are you have a an"
  address = "2nd mile post,Laxapana"
  email = "xxxxxxxxxxxx@xxxxx.com"
  contactNo = "+94718676767"
  area = "plumnber,carpenter,teller"
  msg = "msg dddgdgd dgdsgdsg  dsf dsdfjskdfj sljlsdfjslsff  sjdfldsjflsd sdfsdljlrdj iteota"
  date = "2010/10/11"
  show
  commentsarray: Array<any>
  load = false;
  isLinear = false;
  commentForm: FormGroup
  replyForm: FormGroup
  
  jobForm1: FormGroup
  jobForm2: FormGroup
  
  reply: string
  comment: string
  post: Post = new Post()
  disabled: boolean = true
  jobDiscription: any
  exp: any
  exp_len:number

  selectedFile: File
  retrievedImage: any
  base64Date: any
  retrieveResponse: any
  message: string
  imgName: any
  ngOnInit() {
    this._socialService.getDetails().subscribe((data: any) => {
      // console.log('data', data["jobDic"]);
      this.jobDiscription = data["jobDic"]
      // console.log(data['jobDic'])
      this.exp=data['experiance']
      this.exp_len=data['experiance'].length
      // console.log('exp',data['experiance'])

    }, (error: any) => {
      console.log('error', error.message)
    })
    this.commentForm = this._formBuilder.group({
      'comment': [this.comment]
    })
    this.replyForm = this._formBuilder.group({
      'reply': [this.reply]
    })
   
    this.jobForm1 = this._formBuilder.group({
      'jobtitle': [this.post.jobtitle, [Validators.required]],
      'jdescription': [this.post.jdescription, [Validators.required, Validators.minLength(100), Validators.maxLength(300)]],
      'validto': [this.post.validto, [Validators.required]],
      'contact': [this.post.contact, [Validators.required, Validators.maxLength(10), Validators.minLength(9)]]

    })
    // this.jobForm2=this._formBuilder.group({
    //   'pic':[this.post.pic,[Validators.required]],
    //   'imgName':[this.post.imgName,[Validators.required]]
    // })
    this.service.getComments().subscribe(data => {
      this.commentsarray=data.body['comments']
      this.load=true
    })
  }

  clickCamera() {
    console.log("profile picture clicking")
  }
  saveComment() {
    console.log("hello")
    console.log(this.comment)
    this.commentForm.reset();
    // let c={username:this.username,date:this.date,msg:event.comment}

    //  this.commentsarray.push(c)
  }
  saveReply() {
    console.log(this.reply)
    this.replyForm.reset();
  }
  toggle() {
    this.show = !this.show
  }
 
  onSubmitJobForm1() {

  }
  onSubmitJobForm2() {

  }
  //p.picture uploading
  onChanged(event) {
    console.log("event pic", event.target.value)
    const pic=<File>event.target.value;
    let picname=1234+'profile_pic'
    this._userInfoService.uploadPictures(pic,picname,1233).subscribe(res=>{
      
    })
    
  }
  scroll(element) {
    this._scrollService.scrollTo(element, 700, -100)
  }
  onFileChange(event) {
    console.log('event', event)
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
      this.disabled = false;
      console.log(this.selectedFile)
    }
  }
  onUpload() {
    const uploadImage = new FormData()
    /// console.log('jobform2',this.jobForm2)
    console.log(this.selectedFile);
    uploadImage.append('imageFile', this.selectedFile, this.selectedFile.name)
      
  }
  

}
