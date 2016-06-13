export interface IFacebookLoginHandler {
  init: () => boolean;
  registerCallback: (successCallback: any, cancelCallback: any, failCallback: any) => void;
  logInWithPublishPermissions: (permissions: string[]) => void;
  logInWithReadPermissions: (permissions: string[]) => void;
}

interface IFBDelegate {
  applicationDidFinishLaunchingWithOptions: () => boolean;
  applicationOpenURLSourceApplicationAnnotation: () => void;
  applicationDidBecomeActive: () => void;
}

declare module "nativescript-facebook-login2" {
  const FacebookLoginHandler: IFacebookLoginHandler;
  const FBDelegate: IFBDelegate;
  export = {
    FacebookLoginHandler,
    FBDelegate
  };
}
