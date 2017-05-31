import {isUndefined} from "util";
export class MockStorge {
  private url: string;

  constructor(url?: string)
  {
    if(isUndefined(url))
    {
      this.url = "";
    }
    else
    {
      this.url = url;
    }
  }

  public getMock(): any{
    return {
      storage: function(){
        return {
          ref: function(){
            return {
              child: function(params){
                return {
                  getDownloadURL: function(){
                    return new Promise((resolve, reject) => { "" });
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}
