import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 
@Injectable({
 providedIn: 'root'
})
export class UploadService {

  url="http://127.0.0.1:5000/";
 
 constructor( private httpClient: HttpClient) { }
 
 public uploadfile(file: File,param:any) {
   let formParams = new FormData();
   formParams.append('file', file)
   formParams.append('formid', param[0]['formid']);
   formParams.append('field', param[0]['field']);

  //  let mData= {stids:'123',file:file};
  // console.warn(formParams);
   return this.httpClient.post(this.url+"upload_user_doc", formParams)
 }

 deletedoc(data:any){
  console.warn("data",data)
  return this.httpClient.post(this.url+"delete_doc",data)
}
}

 