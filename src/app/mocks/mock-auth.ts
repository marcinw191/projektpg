import {isUndefined} from "util";
export class MockAuth {

  private profile: any;
  private authenticated: boolean;

  constructor(profile?: any, authenticated?: boolean)
  {
    if(isUndefined(profile))
    {
      this.profile = {
        user_id: "google-oauth2|114567725685047947770",
        picture: "https://lh4.googleusercontent.com/-E_whVjppYfU/AAAAAAAAAAI/AAAAAAAAA7A/1yYHBYCvDyc/photo.jpg",
        name: "Bartłomiej Kornowski",
        email: "bartlomiej.kornowski@gmail.com"
      }
    }
    else
    {
      this.profile = profile
    }
    if(isUndefined(authenticated))
    {
      this.authenticated = true;
    }
    else
    {
      this.authenticated = true;
    }
  }

  public getMock(): any {
    let _this = this;
    return {
      authenticated: function(){
        return _this.authenticated;
      },
      getProfileAuth: function(){
        return _this.profile;
      }
    }
  }
}
